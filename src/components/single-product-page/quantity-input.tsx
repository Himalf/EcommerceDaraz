"use client";
import React, { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaMinus, FaPlus } from "react-icons/fa";
type Props = {
  stockQuantity: number;
};
export const SELECTED_QUANTITY = "quantity";
export default function QuantityInput({ stockQuantity }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const handleQuantityUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxNum = Math.max(1, Math.min(stockQuantity, Number(e.target.value)));
    router.push(
      pathname + "?" + createQueryString(SELECTED_QUANTITY, maxNum.toString())
    );
  };
  const updateQuantity = (newQuantity: number) => {
    router.push(
      pathname +
        "?" +
        createQueryString(SELECTED_QUANTITY, newQuantity.toString())
    );
  };
  const currentQuantity = Number(searchParams.get(SELECTED_QUANTITY) ?? 1);
  return (
    <section className="flex gap-3 items-center select-none">
      <FaMinus
        className={`text-muted-foreground cursor-pointer ${
          currentQuantity > 1 ? "" : "cursor-not-allowed"
        }`}
        onClick={() => {
          if (currentQuantity > 1) {
            updateQuantity(currentQuantity - 1);
          }
        }}
      />
      <input
        type="number"
        value={searchParams.get(SELECTED_QUANTITY) ?? 1}
        min={1}
        max={stockQuantity}
        step={1}
        onChange={handleQuantityUpdate}
        className="text-center outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[2ch]"
      />
      <FaPlus
        className={`text-muted-foreground cursor-pointer ${
          currentQuantity < stockQuantity ? "" : "cursor-not-allowed"
        }`}
        onClick={() => {
          if (currentQuantity < stockQuantity) {
            updateQuantity(currentQuantity + 1);
          }
        }}
      />
    </section>
  );
}
