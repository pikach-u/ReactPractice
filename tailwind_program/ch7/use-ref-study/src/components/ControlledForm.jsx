import { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim()) {
      setGreeting(`안녕하세요, ${name}님!`);
    } else {
      setGreeting("이름을 입력해주세요.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름 입력"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">인사하기</button>
      </form>

      <p>{greeting}</p>
    </div>
  );
};

export default ControlledForm;
