import React from "react";
import { Category } from "@/types/category";
import Link from "next/link";
import SingleCardComponent from "./single-card-component";

type Props = {};

export default async function CategoriesList({}: Props) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <section className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-2 gap-5 p-3">
      {data.length > 0 ? (
        (data as Category[]).map((category, index) => (
          <Link
            href={`/categories/${encodeURIComponent(category.name)}`}
            key={index}
          >
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
