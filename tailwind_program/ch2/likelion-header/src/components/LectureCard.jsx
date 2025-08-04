const LectureCard = ({ imageSrc, title, price, tags }) => {
  return (
    <li className="w-[290px] text-[#222222] text-lg">
      <img
        className="w-[290px] h-[194px] object-cover rounded-xl"
        src={imageSrc}
        alt={title}
      />
      <h3 className="mt-2.5">{title}</h3>
      <ul className="mt-2.5 flex gap-1">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="text-xs rounded bg-gray-200 text-gray-400 px-1 py-0.5 inline-block"
          >
            {tag}
          </li>
        ))}
      </ul>
      <h5 className="mt-2.5 font-semibold">{price.toLocaleString()}원</h5>
    </li>
  );
};

export default LectureCard;
