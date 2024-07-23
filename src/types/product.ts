import { Category } from "./category";
import { TReview } from "./review";

export type TProduct = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: Category;
  categoryId: number;
  stockQuantity: number;
  discount: number;
  images: string[];
  reviews: TReview[];
  avgRating: number;
};
