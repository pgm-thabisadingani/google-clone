import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

export default function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

     if (!term) return;

     router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="data:image/jpeg;base64,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"
          height={50}
          width={130}
          onClick={() => router.push("/")}
          className="cursor-pointer"
          alt="search image"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef} 
            text="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon className="h-7 sm:mr-3  text-gray-500 cursor-pointer 
            transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>
          <button hidden type="submit" onClick={search}>Search</button>
        </form>
        <Avatar className="ml-auto" url="data:image/jpeg;base64,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"/>
      </div>

      <HeaderOptions/>
    </header>
  )
}
