import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  if (url.pathname == "/") {
    url.pathname = "/admin/alunos";
    return NextResponse.redirect(url);
  }
  else if (url.pathname.startsWith("/admin/alunos")) {
    return NextResponse.rewrite(new URL("/admin/alunos", req.url));
  }
  else if (url.pathname.startsWith("/admin/professores")) {
    return NextResponse.rewrite(new URL("/admin/professores", req.url));
  }
  return NextResponse.next();
}
