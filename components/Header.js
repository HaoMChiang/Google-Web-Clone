import { useRouter } from "next/router";
import Image from "next/image";
import { useRef } from "react";
import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Search from "../pages/search";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full items-center p-6">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          //   objectFit="contain"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none "
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 text-gray-500 cursor-pointer transition transform duration-100 hover:scale-125 sm:mr-3"
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 hidden text-blue-500 sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://scontent-lax3-2.xx.fbcdn.net/v/t31.18172-8/12370751_940531216039602_5552297529218543396_o.jpg?_nc_cat=103&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=XZ6oNO1OZEoAX-oEEjF&_nc_ht=scontent-lax3-2.xx&oh=40594951deeebd473244191de0a454fb&oe=61361676"
        />
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
