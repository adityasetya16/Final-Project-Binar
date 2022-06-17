import React, { useState } from "react";
import Button from "../Button/Button";
import { ReactComponent as SearchIcons } from "./fi_search.svg";
import { ReactComponent as LoginIcon } from "./fi_log-in.svg";
import { ReactComponent as BellIcon } from "./fi_bell.svg";
import { ReactComponent as ListIcon } from "./fi_list.svg";
import { ReactComponent as UserIcon } from "./fi_user.svg";

function NavbarDesktop() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="flex items-center fixed bg-white shadow-md h-20 w-full px-32 ">
      <div className="mr-3">
        <img src="/image/logo.png" alt="logo" />
      </div>

      <div className="relative w-full flex basis-1/3">
        <input
          type="text"
          className="w-full py-3 rounded-lg px-3 outline-none lg:bg-[#eee]"
          placeholder="Cari di sini ..."
        />
        <div className="absolute top-3 right-4">
          <SearchIcons />
        </div>
      </div>

      <div className="grow ">
        {isLogin ? (
          <div className="flex w-40 float-right justify-between">
            <ListIcon className="cursor-pointer hover:bg-bgColorSecond rounded p-1 w-8 h-8" />
            <BellIcon className="cursor-pointer hover:bg-bgColorSecond rounded p-1 w-8 h-8" />
            <UserIcon className="cursor-pointer hover:bg-bgColorSecond rounded p-1 w-8 h-8" />
          </div>
        ) : (
          <Button className="float-right px-4">
            <LoginIcon className="mr-3" />
            Masuk
          </Button>
        )}
      </div>
    </div>
  );
}

export default NavbarDesktop;
