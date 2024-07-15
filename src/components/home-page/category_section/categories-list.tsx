"use client";
import React, { useCallback } from "react";
import categoriesData from "@/data/categories.json";
import { Category } from "@/types/category";
import Image from "next/image";
import SingleCardComponent from "./single-card-component";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
type Props = {};

export default function CategoriesList({}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const newPath = `/categories/${pathname}`;
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  return (
    <section className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-2 gap-5  p-3">
      {(categoriesData as Category[]).map((category, index) => {
        return (
          <Link
            href={
              newPath + "?" + createQueryString("categories", category.name)
            }
            key={index}
            // href={`categories/${category.name}`}
          >
            <div className="">
              <SingleCardComponent category={category} />
            </div>
          </Link>
        );
      })}
    </section>
  );
}
