import Link from "next/link";

import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Link href="/">Home</Link>
        <Link href="/add-post">Create Post</Link>
      </div>
      <main>{children}</main>
    </>
  );
}
