import Avatar from "../images/Avatar.svg";

function App() {
  return (
    <div className="App max-w-[700px] m-auto">
      <header className="header m-[20px]">
        <div className="flex justify-between">
          <p className="text-black">Simply Do It</p>
          <img className="h-[42px] w-[42px]" src={Avatar}></img>
        </div>
      </header>
    </div>
  );
}

export default App;
