import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  return (
    <>
      {/*A little help for the Netlify post-processing bots */}
      <form
        name="contactForm"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <section
        id="contact"
        className="relative pb-8 bg-gradient-to-b from-black to-black via-purple-900"
      >
        <div
          className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap rounded-xl pb-6
        min-w-[300px]"
        >
          <div className="lg:w-2/3 md:w-3/4 rounded-lg overflow-hidden sm:mr-10 p-16 pr-24 flex items-end justify-start relative">
            <iframe
              className="absolute inset-0 hidden sm:block"
              width="100%"
              height="100%"
              title="map"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)", border: "0" }}
              src="https://www.google.com/maps/embed/v1/place?q=west+asheville+north+carolina&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
            <div className=" relative flex flex-wrap py-6 rounded shadow-md md:px-6 bg-gray-800">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  LOCATION
                </h2>
                <p className="mt-1">
                  West Asheville
                  <br />
                  North Carolina, 28806
                  <br />
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-400 leading-relaxed">
                  joshua.bell.828@gmail.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">828-222-8787</p>
              </div>
            </div>
          </div>
          {/*contact form*/}
          <form
            name="contactForm"
            method="POST"
            data-netlify="true"
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            {/*For netlify forms*/}
            <input
              type="hidden"
              name="form-name"
              value="contactForm"
              aria-hidden="true"
            />
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font text-center">
              Contact Me
            </h2>
            <p className="leading-relaxed mb-5 text-center pt-3">
              Feel free to shoot me an email or call. Please note, I may not be
              available immediately between 11am-7pm on weekdays.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="absolute bottom-0 right-1/3 md:right-1/2 md:right-1/2 lg:right-100">
          © 2022 Joshua Bell
        </div>
      </section>
    </>
  );
}
