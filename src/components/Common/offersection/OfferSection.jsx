"use client";
import { offers } from "@/public/dummy/offer";
import Image from "next/image";
import { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
});

const OfferSection = () => {
  const [offerData] = useState(offers);

  return (
    <div className="container" style={{ margin: "auto 0 0 0" }}>
      <div className="flex items-center gap-0">
        <div className="container">
          <div className="grid grid-cols-3 justify-center">
            {offerData?.map((item) => {
              const wordArr = item.title.split(" ");
              const titleMain = wordArr.slice(0, 3).join(" ");
              const remainingWords = wordArr.slice(3).join(" ");

              return (
                <div className="flex items-center" key={item.id}>
                  <div className="flex items-center border-b-green-50">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={80}
                      height={80}
                      priority
                    />
                  </div>
                  <h3 className={`${montserrat.className}`}>
                    {wordArr.length > 3 ? (
                      <>
                        {titleMain} <p className="tag">{remainingWords}</p>
                      </>
                    ) : (
                      item.title
                    )}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
