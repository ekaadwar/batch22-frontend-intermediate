import React from "react";

import { MdCheck } from "react-icons/md";

import hazelnutLatte from "../../../assets/hazelnutLatte.png";
import pinkyPromise from "../../../assets/pinkyPromise.png";
import chikenWing from "../../../assets/chikenWing.png";

export default function Favorites() {
  return (
    <section id="fevorite" className="bg-gray-100 pb-10">
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="font-bold text-3xl pt-20 mb-1.5">
            Here is People's Favorite
          </h3>
          <p className="mb-20">
            Let's choose and have a bit taste of people's favoite. It might be
            your tool
          </p>
        </div>
        <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 items-center">
          <div className="flex-1 w-full flex justify-center">
            <div className="flex flex-col w-full max-w-xs favo-sect border border-gray-300 rounded-xl hover:border-yellow-500 bg-white">
              <div className="picture flex items-center">
                <div className="flex justify-center items-center favo-img bg-blue-200 rounded-full overflow-hidden">
                  <img
                    className="w-full"
                    src={hazelnutLatte}
                    alt="Hazelnut Latte"
                  />
                </div>
              </div>
              <div className="list">
                <div className="leading-10">
                  <h1 className="text-xl font-bold text-center mb-2">
                    Hazelnut Latte
                  </h1>
                  <ul>
                    <li className="flex flex-row items-center">
                      <MdCheck size={20} color="#2FAB73" />
                      <p className="ml-5">Hazelnut Syrup</p>
                    </li>
                    <li className="flex flex-row items-center">
                      <MdCheck size={20} color="#2FAB73" />
                      <p className="ml-5">Vanila Whipped Cream</p>
                    </li>
                    <li className="flex flex-row items-center">
                      <MdCheck size={20} color="#2FAB73" />
                      <p className="ml-5">Ice/Hot</p>
                    </li>
                    <li className="flex flex-row items-center">
                      <MdCheck size={20} color="#2FAB73" />
                      <p className="ml-5">Sliced Banana on Top</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cost">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3">IDR. 25.000</h3>
                  <button className="text-l font-bold border-2 border-yellow-500 px-10 py-2 rounded-full focus:outline-none hover:border-transparent hover:bg-yellow-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center">
            <div className="flex flex-col w-full max-w-xs favo-sect border border-gray-300 rounded-xl hover:border-yellow-500 bg-white">
              <div className="picture flex items-center">
                <div className="flex justify-center items-center favo-img bg-blue-200 rounded-full overflow-hidden">
                  <img
                    className="w-full"
                    src={pinkyPromise}
                    alt="Pinky Promise"
                  />
                </div>
              </div>
              <div className="list">
                <div className="leading-10">
                  <h1 className="text-xl font-bold text-center mb-2">
                    Pinky Promise
                  </h1>
                  <ul>
                    <li className="flex flex-row items-center">
                      <MdCheck size={20} color="#2FAB73" />
                      <p className="ml-5">1 Shot of Coffe</p>
                    </li>
                    <li className="flex flex-row items-center">
                      <MdCheck size={20} color="#2FAB73" />
                      <p className="ml-5">Vanila Whipped Cream</p>
                    </li>
                    <li className="flex flex-row items-center">
                      <MdCheck size={20} color="#2FAB73" />
                      <p className="ml-5">Chocolate Biscuit</p>
                    </li>
                    <li className="flex flex-row items-center">
                      <MdCheck size={20} color="#2FAB73" />
                      <p className="ml-5">Stawberry Syrup</p>
                    </li>
                    <li className="flex flex-row items-center">
                      <MdCheck size={20} color="#2FAB73" />
                      <p className="ml-5">Sliced Stawberry on Top</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cost">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3">IDR. 30.000</h3>
                  <button className="text-l font-bold border-2 border-yellow-500 px-10 py-2 rounded-full focus:outline-none hover:border-transparent hover:bg-yellow-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center">
            <div className="flex flex-col w-full max-w-xs favo-sect border border-gray-300 rounded-xl hover:border-yellow-500 bg-white">
              <div className="picture flex items-center">
                <div className="flex justify-center items-center favo-img bg-blue-200 rounded-full overflow-hidden">
                  <img className="w-full" src={chikenWing} alt="Chicken Wing" />
                </div>
              </div>
              <div className="list">
                <div className="leading-10">
                  <h1 className="text-xl font-bold text-center mb-2">
                    Chicken Wings
                  </h1>
                  <ul>
                    <li className="flex flex-row items-center">
                      <MdCheck size={20} color="#2FAB73" />
                      <p className="ml-5">Wings</p>
                    </li>
                    <li className="flex flex-row items-center">
                      <MdCheck size={20} color="#2FAB73" />
                      <p className="ml-5">Drum Sticks</p>
                    </li>
                    <li className="flex flex-row items-center">
                      <MdCheck size={20} color="#2FAB73" />
                      <p className="ml-5">Mayonaise and Lemon</p>
                    </li>
                    <li className="flex flex-row items-center">
                      <MdCheck size={20} color="#2FAB73" />
                      <p className="ml-5">Hot Fried</p>
                    </li>
                    <li className="flex flex-row items-center">
                      <MdCheck size={20} color="#2FAB73" />
                      <p className="ml-5">Secret Recipe</p>
                    </li>
                    <li className="flex flex-row items-center">
                      <MdCheck size={20} color="#2FAB73" />
                      <p className="ml-5">Buy 1 Get 1 only Dine in</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cost">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3">IDR. 40.000</h3>
                  <button className="text-l font-bold border-2 border-yellow-500 px-10 py-2 rounded-full focus:outline-none hover:border-transparent hover:bg-yellow-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
