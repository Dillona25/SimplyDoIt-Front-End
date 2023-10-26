import ToDoLogo from "../images/ToDoLogo.svg";

const Main = () => {
  return (
    <main>
      <section className="content flex flex-col justify-center content-center inset-x-0 inset-y-0 m-[20px]">
        <div className="content-none block">
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
    </main>
  );
};

export default Main;
