function Footer() {
  return (
    <div className="bg-blue-300 rounded-lg shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="self-center md:text-2xl font-semibold whitespace-nowrap dark:text-white sm:text-xl">
            North Bengal Training College
          </span>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-800 sm:mb-0">
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Sitemap
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-black sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-800 sm:text-center ">
          All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
