import { useState } from "react";

export default function CatCard({ image, description }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="max-w-sm rounded-2xl shadow-lg overflow-hidden bg-white">
      <img src={image} alt="고양이" className="w-full h-64 object-cover" />
      <div className="p-4">
        <p className="text-gray-800 mb-2">{description}</p>
        <button
          onClick={() => setLikes(likes + 1)}
          className="bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded-lg transition"
        >
          ❤️ 좋아요 {likes}
        </button>
      </div>
    </div>
  );
}
