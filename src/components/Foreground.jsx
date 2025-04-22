import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {

  const ref = useRef(null)

  const data = [
    {
      desc: "React Cheat Sheet PDF",
      filesize: "1.2mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        color: "green",
      },
    },
    {
      desc: "TailwindCSS Utility Guide",
      filesize: "0.9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Free Resource",
        color: "blue",
      },
    },
    {
      desc: "JavaScript ES6 Snippets",
      filesize: "0.6mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Archived",
        color: "blue",
      },
    },
    {
      desc: "System Logs File",
      filesize: "2.4mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Open",
        color: "green",
      },
    },
    {
      desc: "MongoDB Notes Summary",
      filesize: "1.1mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download",
        color: "green",
      },
    }
  ];
  
  return (
    <>
      <div ref={ref} className="w-full h-full fixed z-[3] top-0 left-0 flex gap-5 flex-wrap p-5">
        {data.map((item, idx) => (
          <Card data={item} reference={ref}/>
        ))}
      </div>
    </>
  );
};

export default Foreground;
