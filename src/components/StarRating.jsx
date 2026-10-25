import { FaStar, FaRegStar } from "react-icons/fa";

export default function StarRating({ rating, max = 5 }) {
  return (
    <div className="stars" role="img" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) =>
        i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
      )}
    </div>
  );
}
