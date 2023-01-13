import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  if (url.pathname == "/") {
    url.pathname = "/admin/alunos";
    return NextResponse.redirect(url);
  }
  if (req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.rewrite(new URL("/admin/alunos", req.url));
  }
  return NextResponse.next();
}
