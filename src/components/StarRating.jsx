import { FaStar, FaRegStar } from "react-icons/fa";

export default function StarRating({ rating, max = 5 }) {
  return (
    // flex gap-1 puts the stars in a row, text-warning makes them yellow
    // the empty stars copy the same color since icons use the text color
    <div className="flex gap-1 text-warning" role="img" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) =>
        i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
      )}
    </div>
  );
}
