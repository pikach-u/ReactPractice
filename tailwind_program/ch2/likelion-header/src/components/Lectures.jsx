import LectureCard from "./LectureCard";
import lectureData from "../lectureData.json";

const Lectures = () => {
  return (
    <ul className="bg-blue-100 grid grid-cols-4 max-w-7xl mx-auto justify-items-center mt-10">
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
