import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="bg-primaryColor sticky top-0 left-0 ">
      <nav className="flex items-center justify-between gap-10 py-2  border-b  container text-white">
        <section className="text-2xl font-bold text-white">
          <Image
            src={
              "https://icms-image.slatic.net/images/ims-web/e6ac6883-1158-4663-bda4-df5a1aa066e5.png"
            }
            alt="logo"
            height={60}
            width={70}
          />
        </section>
        <ul className="flex items-center gap-5 text-md text-white">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Products</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
        <section className="flex gap-20 items-center">
          <section>
            <Input
              type="search"
              placeholder="search here..."
              className="text-primaryColor"
            />
          </section>
          <section className="space-x-3 items-center flex">
            <Button variant={"secondary"} className="text-primaryColor">
              Signup
            </Button>
            <Button variant={"ghost"} className="text-white">
              Login
            </Button>
            <Button variant="link" size={"icon"} className="text-white">
              <FaCartPlus className="text-2xl" />{" "}
            </Button>
          </section>
        </section>
      </nav>
    </div>
  );
}
