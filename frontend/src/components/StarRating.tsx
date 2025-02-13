import { FC } from "react";

interface StarRatingProps {
  rating: number; // Accepts rating as a prop (e.g., 3.5)
}

const StarRating: FC<StarRatingProps> = ({ rating }) => {
  const maxStars = 5;
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex text-xl sm:text-3xl  text-yellow-500 mb-1">
      {[...Array(filledStars)].map((_, i) => (
        <span key={i} >★</span>
      ))}
      {halfStar && <span>☆</span>}
      {[...Array(maxStars - filledStars - (halfStar ? 1 : 0))].map((_, i) => (
        <span key={i + filledStars}>☆</span>
      ))}
    </div>
  );
};

export default StarRating;
