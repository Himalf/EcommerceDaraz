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

type Props = {};

export default function CartItemTable({}: Props) {
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
        {(cartItemsData as TCartItem[]).map((cartItem, ind) => {
          return (
            <TableRow key={ind} className="cursor-pointer">
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex gap-3">
                  <figure className="max-h-96 max-w-96">
                    <Image
                      src={cartItem.product.images[0]}
                      alt={cartItem.product.name}
                      height={150}
                      width={150}
                      className="object-cover w-full h-full"
                    />
                  </figure>
                  <p className="line-clamp-3 text-lg leading-6">
                    {cartItem.product.name}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-primaryColor">
                Rs.
                {getDiscountedPrice(
                  cartItem.product.price,
                  cartItem.product.discount
                )}
                <p className="line-through text-muted-foreground">
                  Rs.{cartItem.product.price}
                </p>
                <p className="text-muted-foreground">
                  -{cartItem.product.discount}%
                </p>
                <section className="flex items-center text-2xl text-muted-foreground gap-x-2 mt-2">
                  <CiHeart />
                  <MdDeleteOutline />
                </section>
              </TableCell>
              <TableCell className="text-center">
                {/* <QuantityInput stockQuantity={cartItem.quantity} /> */}
                {cartItem.quantity}
              </TableCell>

              {/* <TableCell className="text-right"></TableCell> */}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
