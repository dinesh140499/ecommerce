import { FaRegUser } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full z-10">
        <div className="container mx-auto">
          <main className="flex justify-between py-10">
            <Link href={"/"} className="text-white text-2xl">
              Logo
            </Link> 
            <ul className="flex items-center gap-8 text-white">
              <li>
                <Link href={"/"}>About Us</Link>
              </li>
              <li>
                <Link href={"/"}>Find Us</Link>
              </li>
              <li>
                <Link href={"/"}>All Campaign</Link>
              </li>
              <li className="ms-5">
                <Link href={"/"}>
                  <FaRegUser className="text-[1.7rem] text-white my-border-color border-white border-[2px] p-[3px] rounded-3xl cursor-pointer" />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <MdOutlineLocalGroceryStore className="text-[1.7rem] text-white my-border-color border-white border-[2px] p-[3px] rounded-3xl cursor-pointer" />
                </Link>
              </li>
            </ul>
          </main>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
