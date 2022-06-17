import React, { useState } from "react";
import { FiSearch, FiMenu, FiX, FiLogIn } from "react-icons/fi";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Navbar() {
  const [isSideOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {/* Start of SideBar */}
      <div
        className={`w-1/2 absolute z-30 bg-white px-4 ease-in duration-300 h-screen top-0 ${
          isSideOpen ? "translate-x-0" : "-translate-x-full"
        } pt-8`}
      >
        <div className="flex justify-between">
          <h1 className="font-bold font-body">Second Hand </h1>
          <FiX
            className="cursor-pointer active:text-btnPrimary text-2xl"
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </div>

        {isLogin ? (
          <div className="mt-3 flex flex-col">
            <h3 className="font-body hover:bg-bgColorSecond cursor-pointer py-2 rounded pl-2">
              Notifikasi
            </h3>
            <h3 className="my-3 font-body hover:bg-bgColorSecond cursor-pointer py-2 rounded pl-2">
              Daftar Jual
            </h3>
            <h3 className="font-body hover:bg-bgColorSecond cursor-pointer py-2 rounded pl-2">
              Akun Saya
            </h3>
          </div>
        ) : (
          <Link to="login">
            <Button className="mt-3 px-4">
              <FiLogIn className="mr-3 text-xl" /> Masuk
            </Button>
          </Link>
        )}
      </div>
      {/* End Of SideBAr */}

      {/* Modal Sidebar */}
      <div
        className={`bg-black w-full bg-opacity-75 absolute z-20 h-screen ${
          isSideOpen ? "block" : "hidden"
        }`}
      ></div>
      {/* Modal Sidebar */}

      {/* Start of Navbar */}
      <div className="flex items-center absolute z-10 top-3 w-full px-4">
        <div
          className="w-12 h-12 cursor-pointer bg-white rounded-md p-3 mr-3"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <FiMenu className="text-2xl" />
        </div>

        <div className="relative w-full flex">
          <input
            type="text"
            className="w-full py-3 rounded-lg px-3 outline-none"
            placeholder="Cari di sini ..."
          />
          <div className="absolute top-3 right-4">
            <FiSearch className="text-gray-400 text-2xl" />
          </div>
        </div>
      </div>
      {/* End of Navbar */}
    </>
  );
}

export default Navbar;
