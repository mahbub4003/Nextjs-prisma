import { NextResponse } from "next/server";
import { verifyToken } from "./utility/jwtutility";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/dashboard")) {
    try {
      const token = req.cookies.get("token");
      const payload = await verifyToken(token.value);
      const reqHeader = new Headers(req.headers);
      reqHeader.set("email", payload.email);
      reqHeader.set("id", payload.id);

      return NextResponse.next({ request: { headers: reqHeader } });
    } catch (e) {
      return NextResponse.json(
        { status: "fail", data: "unauthorized" },
        { status: 401 }
      );
    }
  }

  if (req.nextUrl.pathname.startsWith("/api/user")) {
    try {
    } catch (e) {}
  }
}
