import { useState } from "react";
import Button from "./components/Button";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="flex justify-center items-center h-screen bg-gray-300">
        <div class="h-1/2 w-2/5 bg-slate-600 rounded-xl flex justify-center items-center flex-col p-6 gap-6">
          <div class="text-white text-center ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            asperiores similique adipisci vero, cumque quasi maiores magni neque
            dolorem earum!
          </div>
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;
