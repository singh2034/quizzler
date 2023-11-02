import Link from "next/link";
import React from "react";
import AboutPage from "./about/page";

const page = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl font-medium text-center p-6 shadow-md bg-slate-200 text-emerald-800">
          Quizzler - Enhance Your Intelligence
        </h1>
        <div className=" text-center mt-10">
          <Link href="/quiz">
            <button className="text-2xl bg-sky-500 p-2 rounded-md text-white">
              Start Quiz
            </button>
          </Link>
        </div>
        <AboutPage />
      </div>
    </>
  );
};

export default page;
