import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginForm() {
  // Destructure the 'data' property directly from the hook result
  const { data: session } = useSession();

  if (session) {
    // User is authenticated
    return (
      <div>
        {/* Your logged-in content */}
        <p>Welcome, {session.user.name}!</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    // User is not authenticated
    return (
      <div>
        {/* Your sign-in content */}
        <button onClick={() => signIn('google')}>Sign in with Google</button>
      </div>
    );
  }
}