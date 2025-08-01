const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="flex justify-between max-w-7xl mx-auto font-semibold gap-6">
        <nav className="flex">
          <img src="logo.svg" alt="멋쟁이사자처럼" />
          <ul className="flex">
            <li>전체강의</li>
            <li className="flex">
              부트캠프<p>국비지원</p>
            </li>
            <li>이벤트</li>
            <li>기업문의</li>
          </ul>
        </nav>
        <div>
          <button className="text-sm">로그인/회원가입</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
