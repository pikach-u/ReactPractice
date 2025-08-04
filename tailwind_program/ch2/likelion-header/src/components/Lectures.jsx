import LectureCard from "./LectureCard";

const Lectures = () => {
  return (
    <ul className="bg-blue-100">
      <LectureCard
        imageSrc="1.webp"
        title="일은 간편해지고 수익은 성장하는 자동화 스킬 : 파이썬부터 Chat GPT 까지"
      />
      <LectureCard imageSrc="2.webp" title="AI로 완성하는 재무 포트폴리오" />
      <LectureCard
        imageSrc="3.webp"
        title="업무 시간 10배 단축하는 엑셀 자동화 치트키"
      />
      <LectureCard imageSrc="4.webp" title="10분 만에 끝내는 PPT 작성법" />
    </ul>
  );
};

export default Lectures;
