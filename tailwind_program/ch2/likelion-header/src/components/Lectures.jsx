import LectureCard from "./LectureCard";
import lectureData from "../lectureData.json";

const Lectures = () => {
  return (
    <ul className="bg-blue-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto justify-items-center mt-10">
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
