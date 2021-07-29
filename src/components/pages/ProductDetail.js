import React from "react";
import { connect } from "react-redux";
import { getDetails } from "../../redux/action/items";
import { addItems, countAmount } from "../../redux/action/carts";

class DetailProduct extends React.Component {
  subData = () => {
    const { countAmount } = this.props.carts;
    const counter = countAmount - 1;
    if (counter >= 1) {
      this.props.countAmount(counter);
    }
  };

  sumData = () => {
    const { countAmount } = this.props.carts;
    const counter = countAmount + 1;
    if (counter <= 20) {
      this.props.countAmount(counter);
    }
  };

  // subTotal = (items = [], amount = []) => {
  //   if (items !== []) {
  //     return items
  //       .map((item, index) => item.price * amount[index])
  //       .reduce((acc, curr) => acc + curr);
  //   }
  // };

  tax = (cb) => {
    const value = (cb * 10) / 100;
    return value;
  };

  componentDidMount() {
    this.props.getDetails(this.props.match.params.id);
  }

  render() {
    const { details } = this.props.items;
    const { countAmount } = this.props.carts;
    // const { items, amount } = this.props.carts;
    // const subTotal = this.subTotal(items, amount);
    // const tax = this.tax(subTotal);
    // const shipping = 10000;
    // const total = subTotal + tax + shipping;
    return (
      <section className="detailProduct pt-20 pb-40 bg-gray-200">
        <div className="container mx-auto">
          <p className="font-bold">
            <span className="text-gray-500 pr-2">Favorite & Promo</span>
            <span className="text-yellow-900">{details?.name}</span>
          </p>
          <div className="font-poppins grid grid-cols-1 lg:grid-cols-9">
            <div className="col-span-4">
              <div className="py-24 lg:pr-24">
                <div className="flex flex-col items-center space-y-16">
                  <div className="overflow-hidden h-80 w-80 bg-gray-700 rounded-full"></div>
                  <div className="space-y-7 text-center">
                    <h2 className="text-6xl font-bold">{details?.name}</h2>
                    <p className="text-3xl">IDR {details?.price}</p>
                  </div>
                  <div className="space-y-7">
                    <button
                      onClick={() =>
                        this.props.addItems({
                          details,
                          countAmount,
                          // subTotal,
                          // tax,
                          // shipping,
                          // total,
                        })
                      }
                      className="py-3 w-full bg-yellow-900 hover:bg-yellow-800 rounded-xl text-white text-2xl font-bold"
                    >
                      Add to Cart
                    </button>
                    <button className="py-3 w-full bg-yellow-400 hover:bg-yellow-600 rounded-xl text-yellow-900 text-2xl font-bold">
                      Ask a Staff
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-5">
              <div className="w-full bg-white px-24 pt-24 pb-16 rounded-xl space-y-12">
                <p className="text-xl text-yellow-900">
                  Delivery only on{" "}
                  <span className="font-bold">
                    Monday to
                    <br />
                    Friday
                  </span>{" "}
                  at <span className="font-bold">1-7 pm</span>
                </p>
                <p className="text-xl text-yellow-900">
                  Cold brewing is a method of brewing that combines ground
                  coffee and cool water and uses time instead of heat to extract
                  the flavor. It is brewed in small batches and steeped for as
                  long as 48 hours.
                </p>
                <div className="text-xl font-bold space-y-5">
                  <p className="text-center">Choose a size</p>
                  <div className="flex justify-evenly">
                    <div>
                      <div className="flex justify-center items-center h-16 w-16 bg-yellow-400 rounded-full">
                        R
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-center items-center h-16 w-16 bg-yellow-400 rounded-full">
                        L
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-center items-center h-16 w-16 bg-yellow-400 rounded-full">
                        XL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-24 pt-16 space-y-10">
                <p className="text-xl font-bold text-center">
                  Choose Delivery Methods
                </p>
                <div className="flex justify-center space-x-5">
                  <button className="px-5 py-2 bg-yellow-900 hover:bg-yellow-800 rounded-xl text-l font-bold text-white">
                    Dine in
                  </button>
                  <button className="px-5 py-2 bg-white hover:bg-gray-200 border border-gray-400 rounded-xl text-l font-bold text-gray-600">
                    Door Delivery
                  </button>
                  <button className="px-5 py-2 bg-white hover:bg-gray-200 border border-gray-400 rounded-xl text-l font-bold text-gray-600">
                    Pich Up
                  </button>
                </div>
                <div className="flex">
                  <p>Set time :</p>
                  <input
                    className="text-xs bg-transparent border-b border-gray-400"
                    type="text"
                    name="time"
                    placeholder="Enter the time you'll arrived"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container lg:h-40 mt-20 mx-auto font-poppins">
            <div className="lg:px-24 h-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-24 h-full">
                <div className="lg:col-span-2 h-full px-10 bg-white rounded-2xl shadow-lg">
                  <div className="flex flex-row justify-between items-center h-full py-20">
                    <div className="flex space-x-10">
                      <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-500"></div>
                      <div>
                        <h5 className="text-2xl font-bold">{details?.name}</h5>
                        <p className="text-xl">(Regular)</p>
                      </div>
                    </div>
                    <div className="flex space-x-5">
                      <button
                        className="flex justify-center items-center h-8 w-8 rounded-full bg-yellow-200 text-2xl font-bold text-yellow-900"
                        onClick={this.subData}
                      >
                        -
                      </button>
                      <span className="text-2xl font-bold">{countAmount}</span>
                      <button
                        className="flex justify-center items-center h-8 w-8 rounded-full bg-yellow-200 text-2xl font-bold text-yellow-900"
                        onClick={this.sumData}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="py-5 flex justify-center items-center h-full bg-yellow-400 hover:bg-yellow-500 rounded-2xl shadow-lg text-2xl font-bold">
                  CHEKOUT
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  carts: state.carts,
});

const mapDispatchToProps = { getDetails, addItems, countAmount };

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
