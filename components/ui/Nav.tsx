"use client";

import Link from "next/link";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Nav = () => {
  return (
    <Menubar className="fixed top-0 flex w-full text-white border-none rounded-none bg-white/20 backdrop-blur-3xl">
      <div className="flex items-center w-full max-w-2xl mx-auto">
        <Link href="/" className="mr-auto">
          <p>❄️</p>
        </Link>
        <MenubarMenu>
          <MenubarTrigger>Practices</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/hex">What the Hex?</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
    </Menubar>
  );
};
export default Nav;
