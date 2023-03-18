"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
// import Image from "next/image";
export default function HomeSearch() {
  const searchInputRef = useRef(null); //add
  const router = useRouter();

  const search = (e) => { //add
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    console.log(term);
    router.push(`/search?term=${term}`);
  };
  // const [input, setInput] = useState("");
  // const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (!input.trim()) return;
  //   router.push(`/search/web?searchTerm=${input}`);
  // }
  // async function randomSearch() {
  //   setRandomSearchLoading(true);
  //   const response = await fetch("https://random-word-api.herokuapp.com/word")
  //     .then((res) => res.json())
  //     .then((data) => data[0]);
  //   if (!response) return;
  //   router.push(`/search/web?searchTerm=${response}`);
  //   setRandomSearchLoading(false);
  // }
  return (
    <>
      <form
        // onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[75%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-[70%] lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3 h-5" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          ref={searchInputRef} //add
          // onChange={(e) => setInput(e.target.value)}
          // value={input}
        />
        <BsFillMicFill className="text-lg h-5" />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8 ">
        <button
          onClick={search} //add
          //  onClick={handleSubmit}
          className="btn"
        >
          Google Search
        </button>
        <button
          onClick={search} //add
          // disabled={randomSearchLoading}
          // onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          I am Feeling Lucky
          {/* {randomSearchLoading ? (
            <img
              src="spinner.svg"
              alt="loading..."
              className="h-6 text-center"
            />
          ) : (
            "I am Feeling Lucky"
          )} */}
        </button>
      </div>
    </>
  );
}

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { AiOutlineSearch } from "react-icons/ai";
// import { BsFillMicFill } from "react-icons/bs";

// export default function HomeSearch() {
//   const router = useRouter();
//   const [input, setInput] = useState("");
//   const [randomSearchLoading, setRandomSearchLoading] = useState(false);

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!input.trim()) return;
//     router.push(`/search/web?searchTerm=${input}`);
//   }
//     async function randomSearch() {
//       setRandomSearchLoading(true);
//       const response = await fetch("https://random-word-api.herokuapp.com/word")
//         .then((res) => res.json())
//         .then((data) => data[0]);
//       if (!response) return;
//       router.push(`/search/web?searchTerm=${response}`);
//       setRandomSearchLoading(false);
//     }
//   return (
//     <>
//       <form
//         onSubmit={handleSubmit}
//         className="flex w-full mt-5 mx-auto max-w-[70%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-l lg:max-w-2xl"
//       >
//         <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
//         <input
//           type="text"
//           className="flex-grow focus:outline-none"
//           onChange={(e) => setInput(e.target.value)}
//           value={input}
//         />
//         <BsFillMicFill className="text-lg" />
//       </form>
//       <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8 ">
//         <button onClick={handleSubmit} className="btn">
//           Google Search
//         </button>
//         <button
//           //  disabled={randomSearchLoading}
//           //  onClick={randomSearch}
//           className="btn flex items-center justify-center disabled:opacity-80"
//         >

//           {randomSearchLoading ? (
//             <img
//               src="spinner.svg"
//               alt="loading..."
//               className="h-6 text-center"
//             />
//           ) : (
//             "I am Feeling Lucky"
//           )}
//         </button>
//       </div>
//     </>
//   );
// }
