"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function getSearchParamsDetail() {
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
}
getSearchParamsDetail();
// <Link
//   href={
//     newPath + "?" + createQueryString("categories", category.name)
//   }
//   key={index}
// >
//  <SingleCardComponent category={category} />
// </Link>
