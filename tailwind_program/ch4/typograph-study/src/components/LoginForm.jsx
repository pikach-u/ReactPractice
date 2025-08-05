const LoginForm = () => {
  return (
    <form className="max-w-sm mx-auto p-6 bg-white shadow rounded space-y-4">
      <h2 className="text-2xl font-bold text-center">로그인</h2>

      <input
        type="email"
        placeholder="이메일"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        placeholder="비밀번호"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-colors"
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
