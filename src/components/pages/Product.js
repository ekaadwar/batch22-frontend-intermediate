import React from "react";
import { connect } from "react-redux";
import { getItems } from "../../redux/action/items";
import { Link } from "react-router-dom";

class Product extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  loadMore = () => {
    const { nextPage } = this.props.items.pageInfo;
    this.props.getItems(nextPage);
  };

  render() {
    const { data } = this.props.items;
    return (
      <section className="product pt-20">
        <div className="border-t border-gray-300">
          <div className="container mx-auto">
            <div className="content flex h-auto divide-x divide-gray-300 divide-solid">
              {/* <!-- bagian kiri --> */}
              <div className="side flex flex-col justify-between py-10">
                {/* <!-- bagian promo --> */}
                <div className="space-y-5">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-yellow-900">
                      Promo for you
                    </h3>
                  </div>

                  <div className="text-center">
                    <p>Coupons will be updated every weeks.</p>
                    <p>check them out!</p>
                  </div>

                  {/* <!-- card --> */}
                  <div className="flex items-center pl-10">
                    <div className="card flex flex-col bg-yellow-300 w-72 rounded-3xl">
                      <div className="main flex flex-col justify-evenly items-center border-dashed border-b border-black text-center">
                        <div className="w-28 h-28 bg-blue-500 rounded-full"></div>
                        <div>
                          <h3 className="text-2xl font-bold">Beef Spaghetti</h3>
                          <h3 className="text-2xl font-bold">20% OFF</h3>
                        </div>
                        <p>
                          Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
                        </p>
                      </div>
                      <div className="side flex flex-col justify-evenly text-center">
                        <p>COUPON CODE</p>
                        <h3 className="text-3xl font-bold">FSDT56AS</h3>
                        <p>Valid until October 10th 2020</p>
                      </div>
                    </div>
                    <div className="card-acc-1 w-7 rounded-r-full bg-black"></div>
                    <div className="h-80 w-7 rounded-r-full bg-yellow-900"></div>
                  </div>

                  <button className="w-72 py-4 ml-10 bg-yellow-900 rounded-2xl text-white font-bold">
                    Apply Coupon
                  </button>
                </div>
                {/* <!-- bagian ketentuan --> */}
                <div>
                  <h5 className="font-bold">Term and Condition</h5>
                  <ol className="list-decimal">
                    <li>You can apply 1 coupon per day</li>
                    <li>It only for dine in</li>
                    <li>Buy 1 get 1 only for new user</li>
                    <li>Should make member card to apply coupon</li>
                  </ol>
                </div>
              </div>
              {/* <!-- bagian kanan --> */}
              <div className="main h-full">
                <div className="flex flex-col justify-between w-full h-full p-10">
                  <div className="mb-10">
                    <ul className="flex justify-evenly">
                      <li className="inline-block">Favorite Product</li>
                      <li className="inline-block">Coffee</li>
                      <li className="inline-block">Non Coffee</li>
                      <li className="inline-block">Foods</li>
                      <li className="inline-block">Add-on</li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-4 gap-y-16">
                    {data.map((items) => (
                      <Link
                        to={`/products/${items.id}`}
                        key={items.id.toString()}
                      >
                        <div className="w-36 h-44 border rounded-2xl text-center bg-white">
                          <div className="w-24 h-24 -mt-12 mb-5 bg-yellow-200 rounded-full mx-auto"></div>
                          <div className="flex flex-col justify-between h-20">
                            <h4 className="text-xl font-bold">{items.name}</h4>
                            <h6 className="font-bold text-yellow-900">
                              {items.price}
                            </h6>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="text-center">
                    <button
                      className="py-3 px-5 bg-yellow-500 text-white rounded-md"
                      onClick={this.loadMore}
                    >
                      Show More
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
}

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = { getItems };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
