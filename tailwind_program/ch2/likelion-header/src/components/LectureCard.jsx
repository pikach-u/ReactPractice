const LectureCard = ({ imageSrc, title }) => {
  return (
    <li className="w-[290px] text-[#222222] text-lg">
      <img
        className="w-[290px] h-[194px] object-cover rounded-xl"
        src={imageSrc}
        alt={title}
      />
      <h3 className="mt-2.5">{title}</h3>
      <ul className="mt-2.5 flex gap-1">
        <li className="text-xs rounded bg-gray-200 text-gray-400 px-1 py-0.5 inline-block">
          python
        </li>
        <li className="text-xs rounded bg-gray-200 text-gray-400 px-1 py-0.5 inline-block">
          chatGPT
        </li>
      </ul>
      <h5 className="mt-2.5 font-semibold">50,000원</h5>
    </li>
  );
};

export default LectureCard;
