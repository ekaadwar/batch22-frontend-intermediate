import React from "react";
import { historyData as data } from "../../dummy/dummyData";

class History extends React.Component {
  render() {
    return (
      <section className="history min-h-screen pt-20 pb-40 bg-gray-200">
        <div className="container mx-auto px-5">
          <div className="my-12 space-y-5">
            <h2 className="text-5xl font-bold text-white text-shadow text-center">
              Let’s see what you have bought!
            </h2>
            <p className="text-xl text-white text-shadow text-center">
              Select item to delete
            </p>
          </div>

          <p className="text-xl text-white text-shadow text-right mb-5">
            Delete
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-3 gap-y-5">
            {data.map((data) => {
              return (
                <div className="flex flex-row justify-center w-full">
                  <div className="w-full max-w-md flex justify-between p-5 bg-white rounded-2xl">
                    <div className="h-20 w-20 overflow-hidden rounded-full bg-gray-300">
                      <img
                        className="w-full"
                        src={data.image}
                        alt={data.name}
                      />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">{data.name}</h4>
                      <div className="flex justify-between items-end text-yellow-900">
                        <div>
                          <p>IDR {data.price}</p>
                          <p>delivered</p>
                        </div>
                        <input type="checkbox" name="vergie" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default History;
