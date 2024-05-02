"use client";

import GoNav from "./GoNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <GoNav /> */}
      <div>{children}</div>
    </div>
  );
}
