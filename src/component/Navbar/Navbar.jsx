import React,{useState} from "react";
import  AddTask from "../Task/AddTask";
import Model from "../../common/model/Model";

function Navbar() {

  const [showModel, setShowModel] = useState(false);

  const addAction = () => {
    setShowModel(true);
  };

  return (
    <>
      <div className=" flex items-center justify-between h-20 w-full bg-red-400 pr-[5%]">
        <h1 className="ml-[50%]">Task Manager</h1>
        <button 
          onClick={() => addAction()}
          type="button"
          className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          AddTask
        </button>
      </div>
      {showModel && (
        <Model show={showModel} setShowModel={setShowModel}>
          <AddTask setShowModel={setShowModel} />
        </Model>
      )}
    </>
  );
}

export default Navbar;
