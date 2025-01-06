import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

export default function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/KARANDER")
  //       .then((Response) => Response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <>
      <div className="text-center p-3 text-2xl font-mono font-semibold place-items-center text-rose-800 bg-slate-500 h-max  w-full ">
        {data.bio}
        <img src={data.avatar_url} alt="Heloo" className="h-64 w-64  m-5" />
      </div>
    </>
  );
}
export const githubinfoLoader = async () => {
  const Response = await fetch("https://api.github.com/users/KARANDER");
  return Response.json();
};
