import { createToken } from "@/utility/jwtutility";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqBody = await req.json();

    const prisma = new PrismaClient();
    const result = await prisma.user.findFirst({
      where: {
        AND: {
          email: reqBody.email,
          password: reqBody.password,
        },
      },
    });

    if (!result.id) {
      return NextResponse.json({ status: "fail" });
    } else {
      let token = await createToken(result["email"], result["id"]);
      let expirationTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
      let tokenString = `token=${token}; expires=${expirationTime.toUTCString()};path=/`;
      return NextResponse.json(
        { stasus: "success", data: result },
        {
          status: 200,
          headers: { "set-cookie": tokenString, id: result["id"] },
        }
      );
    }
  } catch (e) {
    return NextResponse.json({ data: e, status: "fail" }, { status: 203 });
  }
}
