import { NextResponse } from 'next/server';
export function middleware(req) {
  const country = req.headers.get('x-vercel-ip-country') || 'RU';
  const allowedCountries = ['RU', 'BY', 'KZ', 'AM', 'AZ', 'KG', 'TJ', 'UZ', 'MD'];
  if (!allowedCountries.includes(country)) {
    return new NextResponse('Access Denied: Your region is not supported.', { status: 403 });
  }
  return NextResponse.next();
}
