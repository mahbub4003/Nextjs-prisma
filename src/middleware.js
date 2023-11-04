import { NextResponse } from "next/server";
import { verifyToken } from "./utility/jwtutility";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    try {
      const token = req.cookies.get("token");
      const payload = await verifyToken(token.value);
      const reqHeader = new Headers(req.headers);
      reqHeader.set("email", payload.email);
      reqHeader.set("id", payload.id);

      return NextResponse.next({ request: { headers: reqHeader } });
    } catch (e) {
      console.log(cookies().get("unauthorized"));
      return NextResponse.json(
        { status: "fail", data: "unauthorized" },
        { status: 401 }
      );
    }
  }

  if (req.nextUrl.pathname.startsWith("/")) {
    try {
      return NextResponse.next();
    } catch (e) {
      console.log(e.toString());
    }
  }
}
