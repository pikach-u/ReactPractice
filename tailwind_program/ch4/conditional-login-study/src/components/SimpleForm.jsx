import { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    alert(`${name}님 안녕하세요!`);
    setName("");
  };

  return (
    <div>
      <h2>간단한 인사 폼</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">인사하기</button>
      </form>
    </div>
  );
};

export default SimpleForm;
