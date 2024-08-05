"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { MdArrowDropDownCircle } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Cat = () => {
  const [position, setPosition] = React.useState("bottom");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="focus:ring-2 ring-4 gap-3 hover:scale-110   font-bold flex justify-between px-5 bg-blue-500/60 text-black focus:ring-green-200"
        >
          Select Produce
          <MdArrowDropDownCircle className="w-5 text-white  h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <a href="/all">
            <DropdownMenuRadioItem value="top">All</DropdownMenuRadioItem>
          </a>
          <a href="/Grapes">
            <DropdownMenuRadioItem value="top">Grapes</DropdownMenuRadioItem>
          </a>
          <a href="/Lemon">
            <DropdownMenuRadioItem value="top">Lemon</DropdownMenuRadioItem>
          </a>
          <a href="/Pineapple">
            <DropdownMenuRadioItem value="top">Pineapple</DropdownMenuRadioItem>
          </a>
          <a href="/Pomegranate">
            <DropdownMenuRadioItem value="top">
              Pomegranate
            </DropdownMenuRadioItem>
          </a>
          <a href="/Pears">
            <DropdownMenuRadioItem value="top">Pears</DropdownMenuRadioItem>
          </a>
          <a href="/Mango">
            <DropdownMenuRadioItem value="top">Mango</DropdownMenuRadioItem>
          </a>
          <a href="/Kiwi">
            <DropdownMenuRadioItem value="top">Kiwi</DropdownMenuRadioItem>
          </a>
          <a href="/Orange">
            <DropdownMenuRadioItem value="top">Orange</DropdownMenuRadioItem>
          </a>
          <a href="/Banana">
            <DropdownMenuRadioItem value="top">Banana</DropdownMenuRadioItem>
          </a>
          <a href="/Apple">
            <DropdownMenuRadioItem value="top">Apple</DropdownMenuRadioItem>
          </a>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Cat;
