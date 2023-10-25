import Avatar from "../images/Avatar.svg";
import ToDoLogo from "../images/ToDoLogo.svg";
import Add from "../images/Add.svg";

function App() {
  return (
    <div className="App max-w-[700px] m-auto">
      <header className="header m-[20px]">
        <div className="flex justify-between">
          <p className="text-black  font-[Poppins] text-[25px] font-semibold">
            Simply Do It
          </p>
          <div className="flex flex-col content-center">
            <img className="h-[42px] w-[42px] self-center" src={Avatar}></img>
            <p className="font-[Poppins] mt-[5px]">Hey, Max</p>
          </div>
        </div>
      </header>

      <main>
        <section className="content flex flex-col justify-center content-center position: absolute inset-x-0 inset-y-0">
          <div>
            <img className="h-[350px] w-[350px] m-auto" src={ToDoLogo}></img>
            <p className="font-[Poppins] text-[20px] text-center mb-[5px]">
              Lets get going for the day!
            </p>
            <p className="font-[Poppins] text-[20px] text-center">
              Press + to add a task
            </p>
          </div>
          <div>
            <ul className="flex flex-col gap-[20px] list-none p-0 m-0 mt-[20px]"></ul>
          </div>
        </section>

        <section className="nav position: fixed w-[100%] bottom-0">
          <div>
            <ul className="flex gap-[20px] list-none p-[20px] justify-center">
              <li>
                <div className="bg-[#8687E7]  w-[64px] h-[64px] rounded-[50%] flex justify-center">
                  <img
                    className="h-[32px] w-[32px] self-center"
                    src={Add}
                    alt="Add icon"
                  ></img>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
