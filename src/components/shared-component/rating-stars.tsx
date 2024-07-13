import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
type Props = {
  rating: number;
};
const TOTAL_STARS_COUNT = 5;
export default function RatingStars({ rating }: Props) {
  const fullStarLength = Math.floor(rating);
  const emptyStarLength = TOTAL_STARS_COUNT - Math.ceil(rating);
  const halfStarLength = TOTAL_STARS_COUNT - fullStarLength - emptyStarLength;

  return (
    <>
      {new Array(fullStarLength).fill("_").map((_, ind) => (
        <FaStar key={ind} className="text-yellow-400" />
      ))}
      {new Array(halfStarLength).fill("_").map((_, ind) => (
        <FaStarHalfAlt key={ind} className="text-yellow-400" />
      ))}
      {new Array(emptyStarLength).fill("_").map((_, ind) => (
        <FaRegStar key={ind} className="text-gray-300" />
      ))}
    </>
  );
}
