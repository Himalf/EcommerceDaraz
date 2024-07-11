import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-gray-200 mt-20 flex items-center justify-center gap-5 relative bottom-0">
      <p>My Ecommerce &copy; 2024</p>
      <section className="space-x-5">
        <Link href={"/"}>Privacy Policy</Link>
        <Link href={"/"}>Terms and Agreement</Link>
      </section>
    </footer>
  );
}
