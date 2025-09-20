import Image from "next/image";
import React from "react";
import nextImg from "../../../assets/next.jpg";
function GalleryPage() {
  return (
    <div className="text-center">
      <h1>Regular Image Tag</h1>
      <img
        src="https://static.vecteezy.com/system/resources/previews/021/733/912/non_2x/next-logo-icon-illustration-vector.jpg"
        alt="next img"
        width={500}
        height={500}
        className="mx-auto"
      />
      <h1>Nextjs Image Component</h1>
      <Image
        src="https://static.vecteezy.com/system/resources/previews/021/733/912/non_2x/next-logo-icon-illustration-vector.jpg"
        alt="next img"
        width={500}
        height={500}
        className="mx-auto"
      ></Image>
      <h1> Local Nextjs Image Component</h1>
      <Image
        src={nextImg}
        alt="next img"
        width={500}
        height={500}
        className="mx-auto"
      ></Image>
    </div>
  );
}

export default GalleryPage;
