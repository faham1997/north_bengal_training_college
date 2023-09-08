import Link from "next/link";
import Carousal from "./components/Carousal";

export default function Home() {
  return (
    <main className=" w-full min-h-screen">
      <div className=" bg-white">
        <div className="rounded-lg m-6 ">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            <div className="col-span-2 row-span-2">
              <Carousal />
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
            Welcome to North Bengal Training College
          </div>
          <p className="p-2 text-sm">
            North Bengal Training College is a professional training institute
            in Bangladesh. It is situated in 395 Paik Para, Mirpur, Dhaka- 1216,
            Bangladesh. We offer various technical training courses. It is one
            of the best training centers in Bangladesh.
          </p>
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
