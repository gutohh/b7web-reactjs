"use client"
import React from "react";
const Page = () => {
  const fullTime = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
    hour12: false,
  }).format();
  const date = new Date();
  const hour = date.getHours();

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="text-9xl">{fullTime}</div>
        <div className="text-5xl font-bold">
          {hour >= 0 && hour < 12 && "Bom dia 😃"}
          {hour >= 12 && hour < 19 && "Boa tarde 🤗"}
          {hour >= 19 && hour <= 23 && "Boa noite 🥱"}
        </div>
      </div>
    </>
  )
}
export default Page;