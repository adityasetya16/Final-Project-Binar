import React, { useState } from "react";
import Button from "../Button/Button";
import { FiSearch, FiLogIn, FiList, FiBell, FiUser } from "react-icons/fi";
import Logo from "../../asset/logo.png";
import { Link } from "react-router-dom";

function NavbarDesktop() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="flex z-30 items-center fixed bg-white shadow-md h-20 w-full px-32 ">
      <div className="mr-3">
        <img src={Logo} alt="logo" />
      </div>

      <div className="relative w-full flex basis-1/3">
        <input
          type="text"
          className="w-full py-3 rounded-lg px-3 outline-none lg:bg-[#eee]"
          placeholder="Cari di sini ..."
        />
        <div className="absolute top-3 right-4">
          <FiSearch className="text-gray-400 text-2xl" />
        </div>
      </div>

      <div className="grow ">
        {isLogin ? (
          <div className="flex w-40 float-right justify-between">
            <FiList className="cursor-pointer hover:text-btnPrimary hover:bg-bgColorSecond rounded p-1 w-8 h-8" />
            <FiBell className="cursor-pointer hover:text-btnPrimary hover:bg-bgColorSecond rounded p-1 w-8 h-8" />
            <FiUser className="cursor-pointer hover:text-btnPrimary hover:bg-bgColorSecond rounded p-1 w-8 h-8" />
          </div>
        ) : (
          <Link to="login">
            <Button className="float-right px-4">
              <FiLogIn className="mr-3 text-xl" />
              Masuk
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavbarDesktop;
