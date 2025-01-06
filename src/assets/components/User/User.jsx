import React from "react";
import { useParams } from "react-router";

export default function User() {
  const { id } = useParams();
  return <div className="text-center font-serif text-2xl p-3 text-amber-950 font-semibold ">User:{id}</div>;
}
