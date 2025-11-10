import React from "react";
import Nav from "../components/Nav";
function page() {
  return (
    <main>
      <Nav />
      <section className="min-h-screen w-screen flex ">
        <div className="w-1/2 bg-[#444444] text-white p-6">
          <div className="bg-[#2c2d2d] flex justify-center">
            <img 
            src="/Resume-Pic.JPG" 
            alt="resume picture" 
            className="w-100 max-h-min rounded-full border-white border-8 "  /> 
          </div>
        </div>
        <div className="w-1/2">
          <p>Hello</p>
        </div>
        

      </section>
    </main>
  );
}

export default page;
