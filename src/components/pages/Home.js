import React from "react";
import { BsPersonFill } from "react-icons/bs";
import {
  MdLocationOn,
  MdFavoriteBorder,
  MdCheckCircle,
  MdCheck,
  MdStar,
} from "react-icons/md";
import teamWork from "../../assets/teamWork.png";
import hazelnutLatte from "../../assets/hazelnutLatte.png";
import pinkyPromise from "../../assets/pinkyPromise.png";
import chikenWing from "../../assets/chikenWing.png";
import logoSportify from "../../assets/logoSportify.png";
import logoAmazon from "../../assets/logoAmazon.png";
import logoDiscord from "../../assets/logoDiscord.png";
import logoNetflix from "../../assets/logoNetflix.png";
import logoReddit from "../../assets/logoReddit.png";
import asianBeauty from "../../assets/asianBeauty.png";

class Home extends React.Component {
  render() {
    return (
      <>
        {/* <!-- section jumbotron --> */}
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
                  We provide high quality beans, good taste, and healthy meals
                  made by love just for you. Start your day with us for a bigger
                  smile!
                </p>
                <button className="w-60 bg-yellow-500 hover:bg-yellow-300 text-xl mt-10 px-10 py-2 text-yellow-900 font-bold rounded-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- akhir section jumbotron --> */}

        {/* <!-- section advantages --> */}
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
                    You can explore the menu that we provide with fun and have
                    their own taste and make your day better.
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
                        Chat with our staff to get better experience for
                        ordering
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
        {/* <!-- akhir section advantages --> */}

        {/* <!-- section favorite --> */}
        <section id="fevorite" className="bg-gray-100 pb-10">
          <div className="container mx-auto">
            <div className="text-center">
              <h3 className="font-bold text-3xl pt-20 mb-1.5">
                Here is People's Favorite
              </h3>
              <p className="mb-20">
                Let's choose and have a bit taste of people's favoite. It might
                be your tool
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
                      <img
                        className="w-full"
                        src={chikenWing}
                        alt="Chicken Wing"
                      />
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
        {/* <!-- akhir section favorite --> */}

        {/* <!-- section spot --> */}
        <section id="spot" className="bg-gray-100 pb-10">
          <div className="container mx-auto text-center">
            <h3 className="font-bold text-3xl pt-20 mb-1.5 w-1/3 mx-auto mb-5">
              Visit Our Store in the Spot on the Map Below
            </h3>
            <p className="w-2/5 mx-auto mb-40">
              See our store in every city on the spot and spen your good day
              there. See you soon!
            </p>
            <img
              className="mx-auto"
              src="../../../img/general/jumbotron.png"
              alt="Spot Area Coffee Shop"
            />
          </div>
        </section>
        {/* <!-- akhir section spot --> */}

        {/* <!-- section partner --> */}
        <section id="partner" className="bg-gray-100 pb-10">
          <div className="container mx-auto text-center">
            <h3 className="font-bold text-3xl pt-20 w-1/3 mx-auto mb-16">
              Our Partner
            </h3>
            <div className="flex justify-around space-x-16 flex-wrap">
              <div className="flex-1">
                <img src={logoNetflix} alt="netflix" />
              </div>
              <div className="flex-1">
                <img src={logoReddit} alt="reddit" />
              </div>
              <div className="flex-1">
                <img src={logoAmazon} alt="amazon" />
              </div>
              <div className="flex-1">
                <img src={logoDiscord} alt="discord" />
              </div>
              <div className="flex-1">
                <img src={logoSportify} alt="Sportify" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- akhir section partner --> */}

        {/* <!-- section testimony --> */}
        <section id="testimony" className="testimony bg-gray-100 pb-52">
          <div className="container mx-auto space-y-7 text-center">
            <h3 className="font-bold text-3xl pt-20 mx-auto">
              Loved by Thousand of Happy Customer
            </h3>
            <p className="sub-judul mx-auto">
              These are the stories of our customer who have visited us with
              great pleasure.
            </p>
            <div className="h-72 overflow-x-auto">
              <div className="test-bar flex justify-between">
                <div className="test-card border-2 border-gray-200 hover:border-yellow-800 p-8 rounded-2xl bg-white">
                  <div className="head flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        className="h-9 w-9"
                        src={asianBeauty}
                        alt="Viezh Robert"
                      />
                      <div className="pl-5">
                        <h4 className="text-l font-bold">Yessica Christy</h4>
                        <h5>Shanxi, China</h5>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <span>4.5</span>
                      <MdStar color="#fbbf24" />
                    </div>
                  </div>
                  <div className="flex items-center h-full">
                    <p>
                      “Wow... I am very happy to spend my whole day here. the
                      Wi-fi is good, and the coffee and meals tho. I like it
                      here!! Very recommended!
                    </p>
                  </div>
                </div>
                <div className="test-card border-2 border-gray-200 hover:border-yellow-800 p-8 rounded-2xl bg-white">
                  <div className="head flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        className="h-9 w-9"
                        src={asianBeauty}
                        alt="Viezh Robert"
                      />
                      <div className="pl-5">
                        <h4 className="text-l font-bold">Yessica Christy</h4>
                        <h5>Shanxi, China</h5>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <span>4.5</span>
                      <MdStar color="#fbbf24" />
                    </div>
                  </div>
                  <div className="flex items-center h-full">
                    <p>
                      “Wow... I am very happy to spend my whole day here. the
                      Wi-fi is good, and the coffee and meals tho. I like it
                      here!! Very recommended!
                    </p>
                  </div>
                </div>
                <div className="test-card border-2 border-gray-200 hover:border-yellow-800 p-8 rounded-2xl bg-white">
                  <div className="head flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        className="h-9 w-9"
                        src={asianBeauty}
                        alt="Viezh Robert"
                      />
                      <div className="pl-5">
                        <h4 className="text-l font-bold">Yessica Christy</h4>
                        <h5>Shanxi, China</h5>
                      </div>
                    </div>
                    <div className="flex flex-row items-center">
                      <span>4.5</span>
                      <MdStar color="#fbbf24" />
                    </div>
                  </div>
                  <div className="flex items-center h-full">
                    <p>
                      “Wow... I am very happy to spend my whole day here. the
                      Wi-fi is good, and the coffee and meals tho. I like it
                      here!! Very recommended!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex">
                <div className="h-4 w-12 rounded-full bg-yellow-800 mr-3"></div>
                <div className="h-4 w-4 rounded-full bg-gray-300 mr-3"></div>
                <div className="h-4 w-4 rounded-full bg-gray-300 mr-3"></div>
                <div className="h-4 w-4 rounded-full bg-gray-300 mr-3"></div>
              </div>
              <div className="flex">
                <div className="arr-left flex justify-center items-center h-16 w-16 rounded-full border-4 border-yellow-800">
                  <i className="fas fa-arrow-left text-2xl text-yellow-800 ml-3"></i>
                </div>
                <div className="arr-left flex justify-center items-center h-16 w-16 rounded-full bg-yellow-800 ml-5">
                  <i className="fas fa-arrow-right text-2xl text-white ml-3"></i>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </section>
        {/* <!-- akhir section testimony --> */}
      </>
    );
  }
}

export default Home;
