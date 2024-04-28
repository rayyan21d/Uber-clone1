import React from "react";
import { redirect } from "next/navigation";
import reddit from "next-auth/providers/reddit";
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";

const page = () => {
  const [authenticated, setAuthenticated] = React.useState(false);
  React.useEffect(() => {
    setAuthenticated(true);
  }, []);
  if(!authenticated) {
    redirect('/login');
  }
  return <div>page</div>;
};

export default page;
