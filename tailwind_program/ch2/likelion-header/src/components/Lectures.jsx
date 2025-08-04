import LectureCard from "./LectureCard";
import lectureData from "../lectureData.json";

const Lectures = () => {
  return (
    <ul className="bg-blue-100 grid grid-cols-4 max-w-7xl mx-auto justify-items-center mt-10">
      <LectureCard
        imageSrc="1.webp"
        title="일은 간편해지고 수익은 성장하는 자동화 스킬 : 파이썬부터 Chat GPT 까지"
        price={50000}
        tags={["python", "chatGPT"]}
      />
      <LectureCard
        imageSrc="2.webp"
        title="AI로 완성하는 재무 포트폴리오"
        price={89000}
        tags={["AI활용", "파이낸싱", "모델링"]}
      />
      <LectureCard
        imageSrc="3.webp"
        title="업무 시간 10배 단축하는 엑셀 자동화 치트키"
        price={120000}
        tags={["업무효율", "코파일럿", "데이터"]}
      />
      <LectureCard
        imageSrc="4.webp"
        title="10분 만에 끝내는 PPT 작성법"
        price={130000}
        tags={["AI활용", "업무효율", "생성AI"]}
      />
      {lectureData.map((lectureData, index) => (
        <LectureCard
          key={index}
          imageSrc={lectureData.imageSrc}
          title={lectureData.title}
          price={lectureData.price}
          tags={lectureData.tags}
        />
      ))}
    </ul>
  );
};

export default Lectures;
