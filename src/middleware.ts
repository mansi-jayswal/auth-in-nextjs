import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {

  const protectedPaths = ['/profile', '/editProfile'];
  console.log('url is : '+ request.url);

  const isProtectedPath = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );
  const token = request.cookies.get('token');

  if (isProtectedPath && !token ) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}
