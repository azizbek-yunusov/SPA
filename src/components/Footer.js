
export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container">
        <div className="pt-4 sm:flex sm:items-center sm:justify-between">
        <a href="1" className="flex items-center mb-4 sm:mb-0">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">React Shop</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="2" className="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
            <a href="3" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
            <a href="4" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
          </li>
          <li>
            <a href="5" className="hover:underline">Contact</a>
          </li>
        </ul>
        </div>
        <hr className="my-6 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}