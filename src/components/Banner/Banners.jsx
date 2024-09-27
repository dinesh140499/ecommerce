import styles from "./style.module.css";
import Image from "next/image";
import burger from "@/public/dummy/images/burger.webp";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
});

const Banners = () => {
  return (
    <>
      <header className={`h-[100vh]  ${styles.header}`}>
        <div className="container mx-auto">
          <div className={`flex items-center z-10`}>
            <div className="left flex-1">
              <h1
                className={`md:text-7xl tracking-[3px] text-white uppercase ${montserrat.className}`}
              >
                Bargain <br />
                Bucket Menu <br /> Campaign
              </h1>
              <p className="text-gray-100 font-[400] mt-3 max-w-[40rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                placeat autem delectus facere. Commodi, numquam!
              </p>
              <button className="uppercase border-[2px] border-white text-white rounded-3xl py-2 px-5 cursor-pointer mt-5 duration-75 hover:bg-white hover:text-black">
                Order Now
              </button>
            </div>
            <div className={`${styles.right} flex-1 `}>
              <div
                className={`${styles.img_box} mx-auto flex items-center justify-center text-white `}
              >
                <Image
                  src={burger}
                  width={"100%"}
                  height={"100%"}
                  className={styles.img}
                  priority
                  alt="burger"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.circle_1}></div>
        <div className={styles.circle_2}></div>
        <div className={styles.circle_3}></div>
        <div className={styles.circle_4}></div>
      </header>
    </>
  );
};

export default Banners;
