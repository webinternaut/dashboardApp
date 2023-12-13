import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
    pages: {
        signIn: "/api/auth/signin",
        error: "/error",
        signOut: "/api/auth/signout",
      },
  callbacks: {
    // authorized({ auth, request: { nextUrl } }) {
    //   const isLoggedIn = !!auth?.user;
    //   if (!isLoggedIn) {
    //     // Redirect unauthenticated users to login page
    //     return Response.redirect('/api/auth/signin');
    //   } else if (nextUrl.pathname.startsWith('/dashboard/home')) {
    //     return true;
    //   } else {
    //     return Response.redirect(new URL('/dashboard/home', nextUrl));
    //   }
    // },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      if (!isLoggedIn) {
        // Redirect unauthenticated users to login page
        return nextUrl.pathname.startsWith('/api/auth/signin');
      } else {
        // Allow access to all pages for logged-in users
        return true;
      }
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;