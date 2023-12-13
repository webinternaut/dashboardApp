import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};