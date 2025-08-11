import { useRef, useState } from "react";

const UncontrolledForm = () => {
  const inputRef = useRef(null);

  const [greeting, setGreeting] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = inputRef.current.value;

    if (name.trim()) {
      setGreeting(`안녕하세요, ${name}님!`);
      inputRef.current.value = "";
    } else {
      setGreeting("이름을 입력해주세요.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="이름 입력" ref={inputRef} />
        <button type="submit">인사하기</button>
      </form>

      <p>{greeting}</p>
    </div>
  );
};

export default UncontrolledForm;
