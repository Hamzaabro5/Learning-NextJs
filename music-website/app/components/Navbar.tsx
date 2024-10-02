"use client"

import React, { useState } from "react";
import { cn } from "../lib/utils";
import Link from "next/link";
import { HoveredLink, MenuItem } from "./ui/navbar-menu";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
    <div className={cn("fixed flex justify-center items-center my-5 text-2xl gap-5 underline top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <HoveredLink href={"/"}>
      <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
      </HoveredLink>
      <HoveredLink href={`about`}>
      <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
      </HoveredLink>
      <HoveredLink href={`contact`}>
      <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
      </HoveredLink>
    </div>
   </>
  )
}

export default Navbar