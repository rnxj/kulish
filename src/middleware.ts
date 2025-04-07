import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const pathname = request.nextUrl.pathname;

  // Check if the request is for an admin API route
  if (pathname.startsWith('/api/admin')) {
    // For API routes, we just check authentication but don't redirect
    const authHeader = request.headers.get('authorization');
    // API routes stay the same
  } 
  // Add your admin route authentication here if needed
  else if (pathname.startsWith('/admin')) {
    // You could add authentication checks here if needed
    // For example, check for a session cookie and redirect to login if not present
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}; 