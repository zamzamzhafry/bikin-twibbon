"use client";
import { useEffect, useState } from "react";
import RenderForm, { Props } from "./go/_components/render-form";

export default function Home({ searchParams }: Readonly<Props>) {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleLoadImage = async () => {
    const imageUrl = "/frame.png";
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;
      localStorage.setItem("customFrameUrl", result);
    };

    setFileName("frame.png");
    reader.readAsDataURL(blob);
  };
  useEffect(() => {
    handleLoadImage();
  }, []);

  return (
    <div className="w-screen flex items-center justify-center flex-col gap-12 p-6">
      <div className="w-full md:w-1/2">
        <h1 className="text-[22px] sm:text-[36px] font-bold leading-[130%] mb-[18px]">
          <span className="text-primary-500 text-[40px] sm:text-[50px]">
            Twibbon Maker
            <br />
          </span>{" "}
          Selamat Hari Raya Idul Fitri 1446H
        </h1>
        <p className="text-neutral-500 leading-[160%]">
          Buat twibbon untuk merayakan hari raya Idul Fitri 1446H. Upload foto kamu dan atur dengan zoom dan geser gambar.
        </p>
      </div>
      <RenderForm searchParams={searchParams} />
    </div>
  );
}
