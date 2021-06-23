import React from "react";
import { connect } from "react-redux";

class Cart extends React.Component {
  render() {
    const { items } = this.props.carts;
    return (
      <section className="cart pt-20 h-screen">
        <div className="container flex justify-center mx-auto h-full">
          <div className="inline-block space-y-10">
            <h2 className="text-3xl font-bold text-white text-shadow w-auto">
              Chekout your
              <br />
              item now!
            </h2>
            <div className="cart-body flex space-x-20">
              <div>
                <div className="order flex flex-col justify-between h-full w-72 px-5 py-16 bg-white rounded-2xl text-sm">
                  <h3 className="text-xl font-bold text-center text-yellow-900">
                    Order Summary
                  </h3>
                  <div>
                    {items.map((item) => (
                      <div className="grid grid-cols-3">
                        <div className="item h-12 w-12 bg-blue-200 rounded-xl overflow-hidden justify-center items-center"></div>
                        <p className="item">{item.name}</p>
                        <p className="item justify-self-end">{item.price}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2">
                    <p>SUBTOTAL</p>
                    <p className="justify-self-end">IDR 120.000</p>
                    <p>TAX & FEES</p>
                    <p className="justify-self-end">IDR 20.000</p>
                    <p>SHIPPING</p>
                    <p className="justify-self-end">IDR 10.000</p>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold text-yellow-900">TOTAL</h3>
                    <h3 className="text-xl font-bold text-yellow-900">
                      IDR 150.000
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <form className="flex flex-col justify-between h-full w-72">
                  <div>
                    <div className="flex justify-between items-center text-white font-bold">
                      <h4 className="text-shadow">Address details</h4>
                      <p className="text-shadow text-xs hover:text-yellow-500">
                        edit
                      </p>
                    </div>
                    <div className="px-5 py-5 bg-white rounded-2xl">
                      <p>
                        <span className="font-bold">Delivery</span> to Iskandar
                        Street Km 5 refinery road oppsite re public road,
                        effurun, Jakarta
                      </p>
                      <hr />
                      <p>+62 81348287878</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-shadow flex justify-between items-center text-white font-bold">
                      Payment method
                    </h4>
                    <div className="px-5 py-5 bg-white rounded-2xl space-y-5">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="card"
                          name="payment"
                          value="card"
                        />
                        <label
                          className="flex items-center space-x-3"
                          htmlFor="card"
                        >
                          <div className="flex justify-center items-center h-10 w-10 bg-yellow-600 rounded-md text-white">
                            <i className="far fa-credit-card"></i>
                          </div>
                          <p>Card</p>
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="bank"
                          name="payment"
                          value="bank"
                        />
                        <label
                          className="flex items-center space-x-3"
                          htmlFor="bank"
                        >
                          <div className="flex justify-center items-center h-10 w-10 bg-yellow-900 rounded-md text-white">
                            <i className="fas fa-university"></i>
                          </div>
                          <p>Bank Account</p>
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="cash"
                          name="payment"
                          value="cash"
                        />
                        <label
                          className="flex items-center space-x-3"
                          htmlFor="cash"
                        >
                          <div className="flex justify-center items-center h-10 w-10 bg-yellow-400 rounded-md text-white">
                            <i className="fas fa-truck"></i>
                          </div>
                          <p>Cash and delivery</p>
                        </label>
                      </div>
                    </div>
                  </div>
                  <input
                    className="w-72 bg-yellow-900 text-white hover:bg-yellow-800 py-3 rounded-xl"
                    type="submit"
                    value="Confirm and Pay"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  carts: state.carts,
});

export default connect(mapStateToProps)(Cart);
