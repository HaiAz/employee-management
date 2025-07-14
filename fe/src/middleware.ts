import { NextRequest, NextResponse } from 'next/server';
import { createI18nMiddleware } from 'next-international/middleware';

import { DEFAULT_LOCALE, LOCALES } from './configs/configs';
import { TOKEN_STORAGE_KEY } from './configs/jwt';

const I18nMiddleware = createI18nMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  urlMappingStrategy: 'rewriteDefault',
  resolveLocaleFromRequest: () => {
    return DEFAULT_LOCALE;
  },
});

export async function middleware(request: NextRequest) {
  // const pathname = request.nextUrl.pathname;

  // const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  // if (pathname.includes('/auth/sign-in') && token) {
  //   return NextResponse.redirect(new URL('/', request.url));
  // }

  return I18nMiddleware(request);
}

export const config = {
  // Exclude any folder in /public folder if needed
  matcher: ['/((?!api|manifest.json|manifest.webmanifest|icons|images|pwa-icons|_next/static|_next/image|favicon.ico).*)'],
};
