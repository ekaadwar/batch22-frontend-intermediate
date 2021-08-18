import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaCamera } from "react-icons/fa";
import jason from "../../img/profile/jason.png";
import cheryn from "../../img/profile/cheryn.png";
import lou from "../../img/profile/lou.png";
import gajeel from "../../assets/gajeel.jpg";

class Chat extends React.Component {
  render() {
    const senderList = [
      {
        image: cheryn,
        name: "Ayang Beb",
        message: "Pagi Beb, Udah makan? :)",
      },
      {
        image: jason,
        name: "Jason",
        message:
          "Hey, I’m Jason, Let’s talk and share what’s on your thoughts!",
      },
      {
        image: lou,
        name: "Lou",
        message:
          "Hey, I’m Lou, I’ll here to help you, just talk to me and we solve the problme. Have a good day!",
      },
      {
        image: lou,
        name: "Boss Ndut",
        message: "Hey you!!!",
      },
      {
        image: lou,
        name: "Pak De",
        message: "Hey you!!!",
      },

      {
        image: lou,
        name: "Luna Maya",
        message: "Hello :)",
      },
    ];
    // console.log(senderList[1].name);

    const chatRoom = [
      {
        sender: 2,
        recipient: 1,
        message: "hello",
      },
      {
        sender: 1,
        recipient: 2,
        message: "?",
      },
      {
        sender: 2,
        recipient: 1,
        message: "Pagi Beb :)",
      },
      {
        sender: 1,
        recipient: 2,
        message: "Kamu siapa?",
      },
      {
        sender: 2,
        recipient: 1,
        message: "Kamu udah sarapan?",
      },
      {
        sender: 1,
        recipient: 2,
        message: "Jiiirrrr...",
      },
    ];

    return (
      <section className="chat pt-20 h-screen">
        <div className="font-poppins container grid grid-cols-3 gap-x-5 mx-auto h-full py-5 text-sm">
          <div className="col-span-1">
            <div className="h-full rounded-2xl p-10 bg-yellow-900">
              <div className="h-full flex flex-col justify-between text-white">
                <div className="relative">
                  <input
                    className="w-full h-10 px-5 pl-12 rounded-full placeholder-gray-600 text-black"
                    placeholder="Search Chat"
                  />
                  <FiSearch
                    className="absolute -mt-8 ml-5"
                    color="#4b5563"
                    size={20}
                  />
                </div>
                <p>Choose a staff you want to talk with</p>
                <div className="hide-scroll h-96 overflow-y-auto">
                  {senderList.map((element, idx) => {
                    return (
                      <>
                        <button
                          className={
                            idx < senderList.length - 1
                              ? "grid grid-cols-4 w-full border-b border-white pb-4 mb-4"
                              : "grid grid-cols-4 w-full"
                          }
                        >
                          <div className="overflow-hidden h-12 w-12 rounded-full bg-white">
                            <img src={element.image} alt={element.name} />
                          </div>
                          <div className="col-span-3 space-y-2">
                            <h3 className="text-left text-md font-bold">
                              {element.name}
                            </h3>
                            <p className="text-left">{element.message}</p>
                          </div>
                        </button>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between col-span-2 text-gray-700">
            <div className="bg-white px-10 py-5 font-bold text-xl rounded-2xl">
              Unknow
            </div>
            <div className="hide-scroll h-96 my-5 overflow-x-auto space-y-3">
              {chatRoom.map((element) => {
                return (
                  <div
                    className={
                      element.sender === 1
                        ? "flex flex-row-reverse w-full bg-white px-10 py-5 rounded-2xl"
                        : "flex flex-row w-full bg-white px-10 py-5 rounded-2xl"
                    }
                  >
                    <div>
                      <div className="overflow-hidden h-12 w-12 rounded-full bg-white">
                        <img src={gajeel} alt="Eka Fajhari Adwar" />
                      </div>
                    </div>
                    <div
                      className={
                        element.sender === 1
                          ? "flex-1 text-right"
                          : "flex-1 text-left"
                      }
                    >
                      <div className="space-y-2 mx-5">
                        <h3 className="text-md font-bold">
                          {element.sender === 1
                            ? "Eka Fajhari Adwar"
                            : "Unkown"}
                        </h3>
                        <p>{element.message}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <div className="flex flex-row w-full bg-white px-10 py-5 space-x-10 rounded-2xl">
                <div>
                  <div className="overflow-hidden h-12 w-12 rounded-full bg-white">
                    <img src={cheryn} alt="Ayang Beb" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="space-y-2">
                    <h3 className="text-left text-md font-bold">Ayang Beb</h3>
                    <p className="text-left">Hallo Beb :)</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row-reverse w-full bg-white px-10 py-5 rounded-2xl">
                <div>
                  <div className="overflow-hidden h-12 w-12 rounded-full bg-white">
                    <img src={gajeel} alt="Eka Fajhari Adwar" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="space-y-2 mr-10">
                    <h3 className="text-right text-md font-bold">Gue</h3>
                    <p className="text-right">?</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row w-full bg-white px-10 py-5 space-x-10 rounded-2xl">
                <div>
                  <div className="overflow-hidden h-12 w-12 rounded-full bg-white">
                    <img src={cheryn} alt="Ayang Beb" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="space-y-2">
                    <h3 className="text-left text-md font-bold">Ayang Beb</h3>
                    <p className="text-left">Pagi Beb, udah makan? :)</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row-reverse w-full bg-white px-10 py-5 space-x-10 rounded-2xl">
                <div>
                  <div className="overflow-hidden h-12 w-12 rounded-full bg-white">
                    <img src={gajeel} alt="Eka Fajhari Adwar" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="space-y-2 mr-10">
                    <h3 className="text-right text-md font-bold">Gue</h3>
                    <p className="text-right">Blom</p>
                  </div>
                </div>
              </div> */}

              {/* <div className="flex flex-row w-full bg-white px-10 py-5 space-x-10 rounded-2xl">
                <div>
                  <div className="overflow-hidden h-12 w-12 rounded-full bg-white">
                    <img src={cheryn} alt="Ayang Beb" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="space-y-2">
                    <h3 className="text-left text-md font-bold">Ayang Beb</h3>
                    <p className="text-left">Makan dong Beb, ntar atit :(</p>
                  </div>
                </div>
              </div> */}

              {/* <div className="flex flex-row w-full bg-white px-10 py-5 space-x-10 rounded-2xl">
                <div>
                  <div className="overflow-hidden h-12 w-12 rounded-full bg-white">
                    <img src={gajeel} alt="Eka Fajhari Adwar" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="space-y-2">
                    <h3 className="text-left text-md font-bold">Gue</h3>
                    <p className="text-left">Ntar</p>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="relative">
              <input
                className="w-full bg-white h-12 pl-10 pr-20  py-5 space-x-10 rounded-2xl"
                placeholder="Your text ..."
              />
              <div className="flex justify-end absolute -mt-9 w-full px-10">
                <button>
                  <FaCamera className="" size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Chat;

// 19:45
