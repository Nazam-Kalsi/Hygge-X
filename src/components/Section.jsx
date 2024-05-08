import React from "react";

const nav = [
  { title: "Study" },
  { title: "Quiz" },
  { title: "Test" },
  { title: "Game" },
  { title: "Other" },
];


function Section() {
  return (
    <>
      <h2 className="text-bg font-bold text-2xl">
        Relations and Functions ( Mathematics )
      </h2>
      <div className="flex min-w-full justify-center">
        <section className="flex flex-col justify-center items-center  w-1/2">
          <div className="flex gap-16 my-8">
            {nav.map((item) => {
              return <button className="text-[#696671]">{item.title}</button>;
            })}
          </div>
          <div className="w-full">
            <div className="bg rounded-3xl border-red-950 px-8 py-3">
              <div className="flex justify-between pt-3">
                <img src="/Hint.svg" alt="err" />
                <img src="/Audio.svg" alt="err" />
              </div>
              <p className="text-white font-bold text-center p-24 sm:text-xl md:text-md lg-text-xl">
                9 + 6 + 7x - 2x - 3
              </p>
            </div>
            <div className="flex my-8 justify-between mx-8">
              <img src="/Replay.svg" alt="" title='Replay'/>
              <div className="flex justify-center items-center gap-4 ">
                <button className=" bg py-1 px-3 rounded-full text-2xl text-white" title='Backward'>
                  {"<"}
                </button>
                <p>01/10</p>
                <button className=" bg py-1 px-3 rounded-full text-2xl text-white" title='Forward'>
                  {">"}
                </button>
              </div>
              <img src="/FullScreen.svg" alt="" title='Full-Screen'/>
            </div>
          </div>
          <div></div>
        </section>
      </div>
      <section className="flex justify-between my-16">
        <div className="flex gap-2">
          <img
            className="shadow-[0px_0px_9px_3px_rgba(65,106,255,0.3)] rounded-full py-3 px-1 size-14"
            src="/Logo.svg"
            alt="Logo"
          />
          <p className="flex flex-col">
            <span className="text-[#696671]">Published by</span>
            <span className="text-[#06286E] font-semibold text-xl">
              Hygge<span className="font-bold">X</span>
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className='bg p-0.5 px-2.5 font-bold text-5xl rounded-full text-white'>+</button>
          <p className="text-2xl text-bg font-bold">Create Flashcard</p>
        </div>
      </section>
    </>
  );
}

export default Section;
