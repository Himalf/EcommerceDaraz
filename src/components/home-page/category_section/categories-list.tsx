"use client";
import React, { useState, useEffect, useCallback } from "react";
import categoriesData from "@/data/categories.json";
import { Category } from "@/types/category";
import Image from "next/image";
import SingleCardComponent from "./single-card-component";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
type Props = {};

export default function CategoriesList({}: Props) {
  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/categories");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

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
    <section className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-2 gap-5 p-3">
      {data.map((category, index) => {
        return (
          <Link
            href={
              newPath + "?" + createQueryString("categories", category.name)
            }
            key={index}
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
