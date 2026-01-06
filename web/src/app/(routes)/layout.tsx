"use client";
import { GetUserProfileDocument } from "@/generated/graphql";
import { useQuery } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { data, loading, error } = useQuery(GetUserProfileDocument);

  // Redirect if error occurs
  useEffect(() => {
    if (!loading && error) {
      router.push("/"); // redirect to home
    }
  }, [loading, error, router]);

  // Show loading spinner or text while fetching
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there is data, render children
  if (data) {
    return <>{children}</>;
  }

  // Default fallback (optional)
  return null;
};

export default Layout;
