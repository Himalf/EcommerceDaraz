"use client";
import React, { useEffect, useState } from "react";
import { Category } from "@/types/category";
import Link from "next/link";
import SingleCardComponent from "./single-card-component";

type Props = {};

export default function CategoriesList({}: Props) {
  const [data, setData] = useState<Category[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/categories`);
      const category = await res.json();
      setData(category);
    };
    fetchData();
  }, []);

  return (
    <section className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-2 gap-5 p-3">
      {data.length > 0 ? (
        data.map((category, index) => (
          <Link href={`/categories/${category.name}`} key={index}>
            <div className="">
              <SingleCardComponent category={category} />
            </div>
          </Link>
        ))
      ) : (
        <p>No categories found.</p>
      )}
    </section>
  );
}
