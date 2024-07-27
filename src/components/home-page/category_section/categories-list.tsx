import React from "react";
import { Category } from "@/types/category";
import Link from "next/link";
import SingleCardComponent from "./single-card-component";

type Props = {};

export default async function CategoriesList({}: Props) {
  let data: Category[] = [];

  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);
    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }
    data = await res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

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
