import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <section className="profil pt-20">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-white py-10 text-shadow">
            User Profil
          </h3>
          <div className="data grid grid-cols-3 gap-x-8 gap-y-20">
            <div className="flex flex-col justify-between items-center py-10 h-96 w-full bg-white border-b-8 border-yellow-900 rounded-2xl">
              <div className="relative">
                <div className="overflow-hidden h-28 w-28 bg-blue-200 rounded-full">
                  <img src="img/profile/gejeel.jpg" alt="Gajeel Redfox" />
                </div>
                <div className="absolute flex justify-center items-center -mt-10 ml-20 h-10 w-10 bg-yellow-900 rounded-full">
                  <i className="fas fa-pencil-alt text-white"></i>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-center">
                  Gajeel Redfox
                </h4>
                <p className="text-sm">metaldragonslayer@fairytail.com</p>
              </div>

              <p>Has been ordered 20 product</p>
            </div>
            <div className="col-span-2">
              <div className="h-96 w-full bg-white border-b-8 border-yellow-900 rounded-2xl">
                <div className="flex flex-col justify-between h-full px-5 pt-5 pb-10">
                  <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-bold text-gray-600">
                      Contacts
                    </h3>
                    <div className="flex justify-center items-center h-12 w-12 bg-yellow-900 rounded-full">
                      <i className="fas fa-pencil-alt text-white"></i>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-10 gap-y-16">
                    <div>
                      <p className="text-xl text-gray-400">Email address :</p>
                      <input
                        className="py-2 w-full border-b border-black"
                        type="email"
                        name="email"
                        value="metaldragonslayer@fairytail.com"
                      />
                    </div>
                    <div>
                      <p className="text-xl text-gray-400">Mobile Number :</p>
                      <input
                        className="py-2 w-full border-b border-black"
                        type="text"
                        name="phone"
                        value="(+62)82132145421"
                      />
                    </div>
                    <div>
                      <p className="text-xl text-gray-400">Delivery Address:</p>
                      <textarea
                        className="w-full border-b border-black"
                        name="address"
                        id="address"
                        cols="30"
                        rows="2"
                      >
                        Iskandar Street no. 67 Block A Near Bus Stop
                      </textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="h-96 w-full bg-white border-b-8 border-yellow-900 rounded-2xl">
                <div className="flex flex-col justify-between h-full px-5 pt-5 pb-10">
                  <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-bold text-gray-600">
                      Details
                    </h3>
                    <div className="flex justify-center items-center h-12 w-12 bg-yellow-900 rounded-full">
                      <i className="fas fa-pencil-alt text-white"></i>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-x-5 gap-y-5">
                    <div className="col-span-2">
                      <p className="text-xl text-gray-400">Display Name</p>
                      <input
                        className="py-2 w-full border-b border-black"
                        type="email"
                        name="email"
                        value="metaldragonslayer@fairytail.com"
                      />
                    </div>
                    <div>
                      <p className="text-xl text-gray-400">DD/MM/YY</p>
                      <input
                        className="py-2 w-full border-b border-black"
                        type="text"
                        name="phone"
                        value="27/09/96"
                      />
                    </div>
                    <div className="col-span-2">
                      <p className="text-xl text-gray-400">First Name:</p>
                      <input
                        className="py-2 w-full border-b border-black"
                        type="email"
                        name="email"
                        value="Gajeel"
                      />
                    </div>
                    <div className="row-span-2 space-y-5">
                      <div>
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                        />
                        <label
                          className="text-xl text-yellow-700 hover:text-yellow-900"
                          for="male"
                        >
                          Male
                        </label>
                        <br />
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                        />
                        <label
                          className="text-xl text-yellow-700 hover:text-yellow-900"
                          for="female"
                        >
                          Female
                        </label>
                        <br />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xl text-gray-400">Last Name:</p>
                      <input
                        className="py-2 w-full border-b border-black"
                        type="email"
                        name="email"
                        value="Redfox"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col justify-between h-96 w-full">
                <h3 className="text-shadow text-xl text-center font-bold text-white">
                  Do you want to save the
                  <br />
                  change?
                </h3>

                <div className="space-y-5">
                  <button className="bg-yellow-900 py-3 w-full text-white rounded-2xl hover:bg-yellow-800">
                    Save Change
                  </button>
                  <button className="bg-yellow-400 py-3 w-full text-yellow-900 font-bold rounded-2xl hover:bg-yellow-500">
                    Cancel
                  </button>
                </div>
                <button className="flex justify-between bg-white px-5 py-3 w-full text-yellow-900 font-bold rounded-2xl hover:bg-gray-300">
                  <p>Edit Password</p>
                  <span>{`>`}</span>
                </button>
                <button className="flex justify-between bg-white px-5 py-3 w-full text-yellow-900 font-bold rounded-2xl hover:bg-gray-300">
                  <p>Log Out</p>
                  <span>{`>`}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
