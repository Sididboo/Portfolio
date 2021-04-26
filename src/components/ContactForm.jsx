import React from "react"

export default function ContactForm() {
  return (
    <div className="bg-gray-900 container">
      <h2 className="flex justify-center mt-12 mb-6 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-white">
        Contact
      </h2>
      <div className="mt-5 md:mt-0 md:col-span-2">
        {" "}
        <div className="bg-white py-8 px-6 shadow-xl rounded-lg sm:px-10">
          <form method="POST" data-netlify="true">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium" htmlFor="">
                    Votre nom:{" "}
                    <input
                      className="mt-2 w-full border border-gray-500 px-3 py-2 rounded-lg shadow-xl"
                      type="text"
                    />
                  </label>
                  <label className="block text-sm font-medium" htmlFor="">
                    Votre prénom:{" "}
                    <input
                      className="mt-2 w-full border border-gray-500 px-3 py-2 rounded-lg shadow-xl"
                      type="text"
                    />
                  </label>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium" htmlFor="">
                    Votre email:{" "}
                    <input
                      className="mt-2 w-full border border-gray-500 px-3 py-2 rounded-lg shadow-xl"
                      type="email"
                      name=""
                      id=""
                    />
                  </label>
                  <label className="block text-sm font-medium" htmlFor="">
                    Votre entreprise:{" "}
                    <input
                      className="mt-2 w-full border border-gray-500 px-3 py-2 rounded-lg shadow-xl"
                      type="text"
                    />
                  </label>
                </div>
                <div className="col-span-12">
                  <label className="block text-sm font-medium" htmlFor="">
                    Votre message:{" "}
                    <textarea
                      className="mt-2 w-full border border-gray-500 px-3 py-2 rounded-lg shadow-xl"
                      name=""
                      id=""
                      cols="20"
                      rows="10"
                    ></textarea>
                  </label>
                  <button
                    className="border-gray-400 transition duration-300 hover:bg-blue-600 font-semibold py-2 px-4 border  rounded shadow-sm"
                    type="submit"
                  >
                    Envoie
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
