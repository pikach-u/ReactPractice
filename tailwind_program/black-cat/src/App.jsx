import Header from "./components/header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
        <CatCard image="" 
        description="햇살 좋아하는 고양이 😽" />
      </div>
    </div>
  );
};

export default App;
