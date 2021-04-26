import React from "react"

export default function ContactForm() {
  return (
    <div>
      <h2 className="flex justify-center mt-12 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
        Contact
      </h2>
      <div className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
        {" "}
        <div className="bg-white py-8 px-6 shadow-xl rounded-lg sm:px-10">
          <form className="w-full max-w-lg" method="POST" data-netlify="true">
            <div className="flex flex-wrap -mx-3 mb-6">
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
                className="ml-12 border-gray-400 transition duration-300 hover:bg-blue-600 font-semibold py-2 px-4 border  rounded shadow-sm"
                type="submit"
              >
                Envoie
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
