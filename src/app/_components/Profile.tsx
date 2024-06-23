import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-cy1 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/profile.jpg "
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center items-center">
        <h1 className="text-2xl font-bold">Taned Wongpoo</h1>
        <p className="text-base">Dream: Software Engineer</p>
        <div id="triangle">
            <svg id="Layer_1" data-name="Layer 1" version="1.1" viewBox="0 0 2000 2000">
       <polygon
          className="cls-1"
          points="928 781 1021 951 784.5 1371.97 1618 1371.97 1530.32 1544 509 1539 928 781"
          ></polygon>
        <polygon
          className="cls-3"
          points="1618 1371.97 784.5 1371.97 874.93 1211 1346 1211 923.1 456 1110.06 456 1618 1371.97"
        >   </polygon>
    <g id="Layer_2" data-name="Layer 2">
      <polygon
        className="cls-2"
        points="418 1372.74 509 1539 928 781 1162.32 1211 1346 1211 923.1 456 418 1372.74"
      ></polygon>
    </g>
  </svg>
</div>

        
      </div>

      <div className="py-10 text-center text-cy3 ">" Embrace My Dream And Anywhat Happend Protect My Hornor As My Mind "</div>
      <div className="p-6 mx-1 xl:mx-6 bg-cy2 rounded-md text-cy1">
        <p>
          <b>Age:</b> 20
        </p>
        <p>
          <b>Status:</b> have girlfreind
        </p>
        <p>
          <b>Location:</b> Suratthani
        </p>
      </div>


    </div>
  );
};

export default Profile;
