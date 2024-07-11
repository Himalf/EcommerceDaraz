import React from "react";
import categoriesData from "@/data/categories.json";
import { Category } from "@/types/category";
import Image from "next/image";
import SingleCardComponent from "./single-card-component";
type Props = {};

export default function CategoriesList({}: Props) {
  return (
    <section className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-2 gap-5  p-3">
      {(categoriesData as Category[]).map((category, index) => {
        return (
          <div key={index} className="">
            <SingleCardComponent category={category} />
          </div>
        );
      })}
    </section>
  );
}
