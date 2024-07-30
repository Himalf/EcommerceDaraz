import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import productData from "@/data/products.json";
import cartItemsData from "@/data/cart-items.json";
import { TCartItem } from "@/types/cart-item";
import Image from "next/image";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import { CiHeart } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import QuantityInput from "../single-product-page/quantity-input";
import Link from "next/link";
import { TProduct } from "@/types/product";

type Props = {};

export default async function CartItemTable({}: Props) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
    cache: "no-store",
  });
  const cartData = await res.json();
  return (
    <Table className="">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {(cartData as TProduct[]).map((cartItem, ind) => {
          return (
            <TableRow key={ind} className="cursor-pointer">
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex gap-3">
                  <figure className=" min-h-[90px] max-h-[90px] max-w-28 min-w-28">
                    <Image
                      src={cartItem.images[0]}
                      alt={cartItem.name}
                      height={100}
                      width={100}
                      className="object-cover w-full h-full"
                    />
                  </figure>
                  <p className="line-clamp-3 text-lg leading-6">
                    {cartItem.name}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-primaryColor">
                Rs.
                {getDiscountedPrice(cartItem.price, cartItem.discount)}
                <p className="line-through text-muted-foreground">
                  Rs.{cartItem.price}
                </p>
                <p className="text-muted-foreground">-{cartItem.discount}%</p>
                <section className="flex items-center text-2xl text-muted-foreground gap-x-2 mt-2">
                  <CiHeart />
                  <MdDeleteOutline />
                </section>
              </TableCell>
              <TableCell className="text-center">
                {/* <QuantityInput stockQuantity={cartItem.quantity} /> */}
                {cartItem.stockQuantity}
              </TableCell>

              {/* <TableCell className="text-right"></TableCell> */}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
