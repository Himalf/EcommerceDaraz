import { TProduct } from "@/types/product";
import React from "react";
import RatingStars from "../shared-component/rating-stars";

type Props = {
  product: Pick<TProduct, "reviews">;
};

export default function ProductReviews({ product }: Props) {
  return (
    <section className="mt-12 mb-5 container">
      <h3 className="font-medium text-2xl mb-5">
        {/* what customers think about us */}
      </h3>
      <div>
        {product.reviews?.length > 0 ? (
          <ReviewsList product={product} />
        ) : (
          <p className="text-center text-muted-foreground py-2 bg-slate-100">
            This product has no reviews
          </p>
        )}
      </div>
    </section>
  );
}

function ReviewsList({ product }: Props) {
  return (
    <section className="mt-12 mb-5 container">
      <h3 className="font-medium text-2xl mb-5">
        what customers think about us
      </h3>
      <div>
        {product.reviews.map((review, ind) => {
          return (
            <section key={ind}>
              <h4>{review.username}</h4>
              <h4 className="flex">
                {" "}
                <RatingStars rating={review.rating} />
                <span>({review.rating})</span>
              </h4>
              <p className="mb-5">{review.message}</p>
              <hr />
            </section>
          );
        })}
      </div>
    </section>
  );
}
