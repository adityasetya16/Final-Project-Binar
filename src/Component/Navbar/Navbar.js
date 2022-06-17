import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "./fi_menu.svg";
import { ReactComponent as SearchIcons } from "./fi_search.svg";
import { ReactComponent as XClose } from "./fi_x.svg";
import { ReactComponent as LoginIcon } from "./fi_log-in.svg";
import Button from "../Button/Button";

function Navbar() {
  const [isSideOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {/* Start of SideBar */}
      <div
        className={`w-1/2 absolute z-20 bg-white px-4 ease-in duration-300 h-screen top-0 ${
          isSideOpen ? "translate-x-0" : "-translate-x-full"
        } pt-8`}
      >
        <div className="flex justify-between">
          <h1 className="font-bold font-body">Second Hand </h1>
          <XClose
            className="cursor-pointer active:bg-bgColorSecond rounded"
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
          <Button className="mt-3 px-4">
            <LoginIcon className="mr-3" /> Masuk
          </Button>
        )}
      </div>
      {/* End Of SideBAr */}

      {/* Modal Sidebar */}
      <div
        className={`bg-black w-full bg-opacity-75 absolute z-10 h-screen ${
          isSideOpen ? "block" : "hidden"
        }`}
      ></div>
      {/* Modal Sidebar */}

      {/* Start of Navbar */}
      <div className="flex items-center absolute top-3 w-full px-4">
        <div
          className="w-12 h-12 cursor-pointer bg-white rounded-md p-3 mr-3"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <MenuIcon />
        </div>

        <div className="relative w-full flex">
          <input
            type="text"
            className="w-full py-3 rounded-lg px-3 outline-none lg:bg-[#eee]"
            placeholder="Cari di sini ..."
          />
          <div className="absolute top-3 right-4">
            <SearchIcons />
          </div>
        </div>
      </div>
      {/* End of Navbar */}
    </>
  );
}

export default Navbar;
