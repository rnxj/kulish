import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const pathname = request.nextUrl.pathname;

  // Check if the request is for an admin API route (excluding login)
  if (pathname.startsWith('/api/admin') && !pathname.includes('/api/admin/login')) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  } 
  // Check if the request is for admin pages
  else if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('adminToken');
    if (!token && pathname !== '/admin/login') {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/admin/:path*', '/admin/:path*']
}; 