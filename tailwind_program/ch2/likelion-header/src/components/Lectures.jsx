const Lectures = () => {
  return (
    <ul className="bg-blue-100">
      <li className="w-[290px] text-[#222222] text-lg">
        <img
          className="w-[290px] h-[194px] object-cover rounded-xl"
          src="1.webp"
          alt="1"
        />
        <h3 className="mt-2.5">
          일은 간편해지고 수익은 성장하는 자동화 스킬 : 파이썬부터 Chat GPT 까지
        </h3>
        <ul className="mt-2.5 flex gap-1">
          <li className="text-xs rounded bg-gray-200 text-gray-400 p-0.5 inline-block">
            python
          </li>
          <li className="text-xs rounded bg-gray-200 text-gray-400 p-0.5 inline-block">
            chatGPT
          </li>
        </ul>
        <h5 className="mt-2.5 font-semibold">50,000원</h5>
      </li>
    </ul>
  );
};

export default Lectures;
