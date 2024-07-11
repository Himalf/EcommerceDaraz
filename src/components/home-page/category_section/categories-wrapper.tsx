import React from "react";
import CategoriesList from "./categories-list";

type Props = {};

export default function CategoriesWrapper({}: Props) {
  return (
    <div className="container">
      <h2 className="font-bold text-2xl">Categories</h2>
      <CategoriesList />
    </div>
  );
}
