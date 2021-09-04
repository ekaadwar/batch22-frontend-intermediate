import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="bg-gray-200 py-10 border-t-2 border-gray-300">
          <div className="md:container mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between items-center space-y-10">
              <div className="space-y-7">
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
                    <FaFacebookF color="#783501" />
                  </div>
                  <div className="flex justify-center items-center h-8 w-8 bg-yellow-500 rounded-full">
                    <FaTwitter color="#783501" />
                  </div>
                  <div className="flex justify-center items-center h-8 w-8 bg-yellow-500 rounded-full">
                    <FaInstagram color="#783501" />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <div className="grid grid-cols-2 gap-y-5">
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
