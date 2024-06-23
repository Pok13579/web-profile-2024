import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-cy1 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/profile.jpg"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center items-center">
        <h1 className="text-2xl font-bold">Taned Wongpoo</h1>
        <p className="text-base">Dream: Software Engineer</p>
        

        
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
