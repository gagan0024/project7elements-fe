"use client";
import * as React from "react";
// import { SessionProvider } from 'next-auth/react';
import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "next/navigation";
const Providers = ({ children }) => {
  const router = useRouter();
  return (
    // <SessionProvider>
    <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>
    // </SessionProvider>
  );
};

export default Providers;
