import CartItemTable from "@/components/cart/cart-item-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

type Props = {};

export default function CartPage({}: Props) {
  return (
    <main className="container mx-auto py-10">
      <header className="flex flex-col items-center justify-center  gap-1">
        <h2 className="text-\43xl font-semibold">Cart</h2>
        <p className="text-muted-foreground">A list of your cart items</p>
      </header>
      <section className="grid grid-cols-3 gap-5 mt-10">
        <section className="col-span-2">
          <CartItemTable />
        </section>
        <section>
          <OrderSummary />
        </section>
      </section>
      <section>
        <Button asChild>
          <Link href={"/api/auth/signout"}>Logout</Link>
        </Button>
      </section>
    </main>
  );
}
function OrderSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-medium">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <section className="flex items-center justify-between">
          <h4>Sub total</h4>
          <span>Rs:500</span>
        </section>
        <section className="flex items-center justify-between">
          <h4>Shipping fee</h4>
          <span>Rs.100</span>
        </section>
        <section className="flex items-center gap-2">
          <div>
            <Input className="py-2" placeholder="Enter Voucher Code" />
          </div>
          <div>
            <Button className="px-5 bg-[#26ABD4]   text-white rounded-none w-40 hover:opacity-85 hover:bg-[#26ABD4]">
              Apply
            </Button>
          </div>
        </section>
        <section className="flex justify-between items-center">
          <p>Total</p>
          <span className="text-lg text-primaryColor font-medium">Rs.600</span>
        </section>
        <section>
          <Button className="w-full bg-primaryColor text-white rounded-none hover:bg-primaryColor hover:opacity-85">
            Proceed to Checkout
          </Button>
        </section>
      </CardContent>
    </Card>
  );
}
