"use client";

import React, { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient();
      const x = supabase.auth.getSession().then(({ data, error }) => {
        if (data.session === null) {
          router.push("/login");
        } else {
          console.log("data", data);
        }
      });
    };
    checkAuth();
  }, []);

  return <div>page</div>;
}
