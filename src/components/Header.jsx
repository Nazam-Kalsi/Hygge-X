import React from "react";
const nav=[
  {title:'Home',link:"/"},
  {title:'Flashcard',link:"#Flashcard"},
  {title:'Contacts',link:"#Contacts"},
  {title:'FAQ',link:"#FAQ"},
 
]
function Header() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
        <img src="/Logo.svg" alt="Logo Here" />
        <p className=" text-2xl text-[#06286E] ml-2 font-semibold">Hygge<span className=" font-bold">X</span></p>
        </div>
        <div className="flex items-center gap-8">
           {
            nav.map((item)=>{
              return(
                <button className=" font-sans  text-[#3A3740] link link-underline link-underline-black">{item.title}</button>
              )
            })
           }
           <button className="bg button hover:bg-gradient-to-b from-blue-600 to-blue-800 transition-all ease-in-out">Login</button>
        </div>
      </div>
    </>

  );
}

export default Header;
