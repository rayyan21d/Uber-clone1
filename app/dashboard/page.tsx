'use client'
import React,{useState,useEffect} from "react";
import { redirect } from "next/navigation";
import reddit from "next-auth/providers/reddit";
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";

const Page = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    setAuthenticated(true);
  }, []);
  if(!authenticated) {
    redirect('/login');
  }
  return <div>page</div>;
};

export default Page;
