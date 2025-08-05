const Article = () => {
  return (
    <article className="prose prose-neutral max-w-2xl mx-auto p-6">
      <h2>타이포그래피 플러그인으로 정갈한 문서 만들기</h2>
      <p>
        Tailwind의 타이포그래피 플러그인은 마크다운 스타일을 빠르게 정리할 수
        있도록 도와줍니다.
      </p>
      <ul>
        <li>자동 마진 및 패딩</li>
        <li>제목, 본문, 인용구 스타일</li>
        <li>반응형 폰트 크기</li>
      </ul>
    </article>
  );
};

export default Article;
