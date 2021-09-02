import React from "react";

export default function Jumbotron() {
  return (
    <section className="jumbotron">
      <div className="container mx-auto h-full">
        <div className="flex flex-col h-full">
          <form className="py-5 lg:text-right">
            <input
              className="pl-5 py-2 rounded-full w-full lg:w-1/4"
              type="text"
              name="search"
              placeholder="Search"
            />
          </form>
          <div className="flex flex-col justify-center h-3/4 lg:w-1/2 text-white ">
            <h1 className="text-3xl">Start Your Day with</h1>
            <h1 className="text-3xl">Coffee and Good Meals</h1>
            <p className="text-lg lg:text-xl mt-10">
              We provide high quality beans, good taste, and healthy meals made
              by love just for you. Start your day with us for a bigger smile!
            </p>
            <button className="w-60 bg-yellow-500 hover:bg-yellow-300 text-xl mt-10 px-10 py-2 text-yellow-900 font-bold rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
