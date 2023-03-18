import React from "react";

function Avatar({ url }) {
  return (
    <div >
      <img
        className="h-10 rounded-full cursor-pointer transition duration-100 transform hover:scale-110"
        loading="lazy"
        src={url}
        alt="avatar"
      />
    </div>
    // <img
    //   loading="lazy"
    //   src={url}
    //   alt="profile pic"
    //   className="h-10 rounded-full cursor-pointer transition duration-100 transform hover:scale-110"
    // />
  );
}

export default Avatar;
