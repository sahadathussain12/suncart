'use client'

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();

  const user = data?.user
  console.log(user,'data');
  return  <div className="p-10 flex border max-w-5xl mx-auto flex-col items-center justify-center mt-5 space-y-5 shadow">
      <Image
        src={user?.image || "/user.png"}
        alt="User"
        width={300}
        height={200}
        className="rounded-full "
      />

      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
     
    </div>
};

export default ProfilePage;
