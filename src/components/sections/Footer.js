import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="bg-gray-200 py-10">
          <div className="container mx-auto">
            <div className="flex">
              <div className="flex-1 space-y-7">
                <div className="flex items-center">
                  <img src={this.props.image} alt="Coffee Shop" />
                  <h4 className="text-l font-bold ml-3">Coffee Shop</h4>
                </div>
                <p className="w-72 leading-8">
                  Coffee Shop is a store that sells some good meals, and
                  especially coffee. We provide high quality beans
                </p>
                <div className="flex space-x-3">
                  <div className="flex justify-center items-center h-8 w-8 bg-yellow-500 rounded-full">
                    <i className="text-yellow-800 fab fa-facebook-f"></i>
                  </div>
                  <div className="flex justify-center items-center h-8 w-8 bg-yellow-500 rounded-full">
                    <i className="text-yellow-800 fab fa-twitter"></i>
                  </div>
                  <div className="flex justify-center items-center h-8 w-8 bg-yellow-500 rounded-full">
                    <i className="text-yellow-800 fab fa-instagram"></i>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-end">
                <div className="w-2/3">
                  <div className="foot-info grid grid-cols-2">
                    <div className="text-xl font-bold">Product</div>
                    <div className="text-xl font-bold">Engage</div>
                    <div>Download</div>
                    <div>Coffe Shop?</div>
                    <div>Pricing</div>
                    <div>FAQ</div>
                    <div>Location</div>
                    <div>About Us</div>
                    <div>Countries</div>
                    <div>Privacy Policy</div>
                    <div>Blog</div>
                    <div>Term of Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
