import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import Avatar from "./Avatar";

export default function HomeHeader() {
  return (
    <header className="flex w-full justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <Link href="" className="link">
          About
        </Link>
        <Link href="" className="link">
          Store
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com" className="link">
          Gmail
        </Link>
        <Link href="https://image.google.com" className="link">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-100 cursor-pointer rounded-full h-10 w-10 p-2" />
        {/* <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button> */}
        <Avatar url="https://lh3.googleusercontent.com/a/AGNmyxaSM_-lNMHaWbBx9hmGlzQIgUHssiWhWpdzKxfqTA=s576" />
      </div>
    </header>
  );
}
