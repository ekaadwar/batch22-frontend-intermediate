import React from "react";
import { connect } from "react-redux";
import { getDetail } from "../../redux/action/items";

class DetailProduct extends React.Component {
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }

  render() {
    return (
      <section className="detailProduct pt-20 pb-40 bg-gray-200">
        <div className="relaive container mx-auto">
          <p className="font-bold">
            <a href="product.html">
              <span className="text-gray-500">Favorite & Promo</span>
            </a>{" "}
            <span className="text-yellow-900"> Cold Brew</span>
          </p>
          <div className="font-poppins grid grid-cols-9">
            <div className="col-span-4">
              <div className="pt-24 pr-24">
                <div className="flex flex-col items-center space-y-16">
                  <div className="overflow-hidden h-80 w-80 bg-gray-700 rounded-full">
                    <img
                      className="w-full"
                      src="img/produk/coldBrew.png"
                      alt="Cold Brew"
                    />
                  </div>
                  <div className="space-y-7">
                    <h2 className="text-6xl font-bold">COLD BREW</h2>
                    <p className="text-3xl text-center">IDR 30.000</p>
                  </div>
                  <div className="space-y-7">
                    <button className="py-3 w-full bg-yellow-900 hover:bg-yellow-800 rounded-xl text-white text-2xl font-bold">
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
                <div>
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
          <div className="absolute z-10 container h-40 mt-20 mx-auto font-poppins">
            <div className="px-24 h-full">
              <div className="grid grid-cols-3 gap-24 h-full">
                <div className="col-span-2 h-full px-10 bg-white rounded-2xl shadow-lg">
                  <div className="flex justify-between items-center h-full">
                    <div className="flex space-x-10">
                      <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-500">
                        <img
                          className="w-full"
                          src="img/produk/coldBrew.png"
                          alt="Cold Brew"
                        />
                      </div>
                      <div>
                        <h5 className="text-2xl font-bold">COLD BREW</h5>
                        <p className="text-xl">x1 (Large)</p>
                        <p className="text-xl">x1 (Regular)</p>
                      </div>
                    </div>
                    <div className="flex space-x-5">
                      <div className="flex justify-center items-center h-8 w-8 rounded-full bg-yellow-200 text-2xl font-bold text-yellow-900">
                        -
                      </div>
                      <p className="text-2xl font-bold">2</p>
                      <div className="flex justify-center items-center h-8 w-8 rounded-full bg-yellow-200 text-2xl font-bold text-yellow-900">
                        +
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center h-full bg-yellow-400 hover:bg-yellow-500 rounded-2xl shadow-lg text-2xl font-bold">
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
});

const mapDispatchToProps = { getDetail };

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
