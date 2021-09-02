import React from "react";

import { BsPersonFill } from "react-icons/bs";
import { MdLocationOn, MdFavoriteBorder, MdCheckCircle } from "react-icons/md";

import teamWork from "../../../assets/teamWork.png";

export default function Advantages() {
  return (
    <section id="advantages">
      <div className="container mx-auto grid h-full w-full">
        <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 justify-center lg:justify-around px-10 -mt-40 lg:-mt-20 h-80 lg:h-40 w-60 lg:w-full bg-white rounded-xl mx-auto shadow-xl">
          <div className="flex flex-row items-center space-x-5">
            <div className="flex justify-center items-center h-12 w-12 rounded-full bg-yellow-500">
              <BsPersonFill size={30} color="#78350f" />
            </div>
            <div>
              <h1>90+</h1>
              <p>Staff</p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-5">
            <div className="flex justify-center items-center h-12 w-12 rounded-full bg-yellow-500">
              <MdLocationOn size={30} color="#78350f" />
            </div>
            <div>
              <h1>30+</h1>
              <p>Store</p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-5">
            <div className="flex justify-center items-center h-12 w-12 rounded-full bg-yellow-500">
              <MdFavoriteBorder size={30} color="#78350f" />
            </div>
            <div>
              <h1>800+</h1>
              <p>Customers</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center my-20 ">
          <div className="hidden lg:inline-block flex-1 h-full">
            <img
              className="w-full self-center"
              src={teamWork}
              alt="Team Work"
            />
          </div>
          <div className="flex-1 px-10">
            <div className="self-center">
              <h1 className="text-4xl font-bold mb-5">
                We Provide Good Coffe
                <br />
                and Healthy Meals
              </h1>
              <p className="mb-5">
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
              <ul>
                <li className="flex flex-row items-center">
                  <MdCheckCircle size={20} color="#2FAB73" />
                  <p>High quality beans</p>
                </li>
                <li className="flex flex-row items-center">
                  <MdCheckCircle size={20} color="#2FAB73" />
                  <p>Healthy meals, you can request the ingredients</p>
                </li>
                <li className="flex flex-row items-center">
                  <MdCheckCircle size={20} color="#2FAB73" />
                  <p>
                    Chat with our staff to get better experience for ordering
                  </p>
                </li>
                <li className="flex flex-row items-center">
                  <MdCheckCircle size={20} color="#2FAB73" />
                  <p>Free member card a minimum purchase of IDR 200.000</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
