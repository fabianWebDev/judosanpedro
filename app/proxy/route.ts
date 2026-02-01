import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function GET(request: NextRequest) {
    const { pathname } = new URL(request.url)

    if (pathname === '/') {
        return NextResponse.redirect(new URL('/es', request.url))
    }

    return NextResponse.next()
}
