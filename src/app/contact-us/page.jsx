import Link from "next/link";

export default function ContactUs() {
  return (
    <main className=" w-full min-h-screen">
      <div className=" bg-white">
        <div className="rounded-lg m-6 ">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            <div className="col-span-2 row-span-2 border border-blue-300  rounded-lg p-5">
              <p className="p-5 font-normal">
                <b> Address: </b>
                395 Paik Para, Mirpur, Dhaka- 1216, Bangladesh
              </p>
              <div className="h-2 w-full bg-blue-300 m-5"></div>

              <p className="font-bold p-5 ">
                Email:
                <Link
                  className="font-normal underline text-blue-300 ml-1 break-words"
                  href="mailto:northbengaltrainingcollege@gmail.com"
                >
                  northbengaltrainingcollege@gmail.com
                </Link>
              </p>
              <div className="h-2 w-full bg-blue-300 m-5"></div>

              <p className="font-bold p-5">
                Web:
                <Link
                  className="font-normal underline text-blue-300 ml-1"
                  href="www.nbtcbd.com"
                >
                  <>www.nbtcbd.com</>
                </Link>
              </p>
            </div>
            <div className="border border-blue-300 rounded-lg">
              <table className="min-w-full text-left border rounded-lg overflow-hidden ">
                <thead className="border border-black">
                  <tr>
                    <th className="bg-blue-200 px-2 py-2 text-white">
                      Quick Menu
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border   text-gray-800 hover:shadow-lg hover:text-blue-300 font-light">
                    <td>
                      <Link href="/">Latest News</Link>
                    </td>
                  </tr>
                  <tr className="border   text-gray-800 hover:shadow-lg hover:text-blue-300 font-light">
                    <td>
                      <Link href="#">All Courses</Link>
                    </td>
                  </tr>
                  <tr className="border   text-gray-800 hover:shadow-lg hover:text-blue-300 font-light">
                    <td>
                      <Link href="#">Class Routine </Link>
                    </td>
                  </tr>
                  <tr className="border   text-gray-800 hover:shadow-lg hover:text-blue-300 font-light">
                    <td>
                      <Link href="/contact-us">Contact</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border border-blue-300 rounded-lg">
              <table className="min-w-full text-left border rounded-lg overflow-hidden ">
                <thead className="border border-black">
                  <tr>
                    <th className="bg-blue-200 px-2 py-2 text-white">
                      Courses
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border   text-gray-800 hover:shadow-lg hover:text-blue-300 font-light">
                    <td>Electrical Training Course</td>
                  </tr>
                  <tr className="border   text-gray-800 hover:shadow-lg hover:text-blue-300 font-light">
                    <td>Electronics Training Course</td>
                  </tr>
                  <tr className="border   text-gray-800 hover:shadow-lg hover:text-blue-300 font-light">
                    <td>Welding Training Course</td>
                  </tr>
                  <tr className="border   text-gray-800 hover:shadow-lg hover:text-blue-300 font-light">
                    <td>Refrigeration & Air Conditioning</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="rounded m-6  bg-white border border-blue-300 ">
          <div className="bg-blue-300 h-15 uppercase text-white p-2">
            Contact Form
          </div>
          <div className="p-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Your name :
            </label>
            <input
              type="text"
              id="name"
              className="border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Your name"
              required
            />
          </div>

          <div className="p-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Your email :
            </label>
            <input
              type="email"
              id="email"
              className="border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Your email"
              required
            />
          </div>
          <div className="p-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Phone number :
            </label>
            <input
              type="tel"
              id="phone"
              className="border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Phone number"
              required
            />
          </div>
          <div className="p-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Your message :
            </label>

            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-blue-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div className="p-2.5">
            <button
              type="submit"
              className="text-white bg-blue-300 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </div>
        </div>
        <div className="rounded m-6  bg-white border border-blue-300  ">
          <div className="bg-blue-300 h-15 uppercase text-white p-2">
            For more Information
          </div>
          <p className="p-2 text-sm">
            Please Email us at
            <Link href="/contact-us" className="text-blue-300 underline space">
              here.
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
