"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"; // Make sure to import the necessary components
import { Button } from "@/components/ui/button"; // Import Button component if it's not already imported
import { MdArrowDropDownCircle } from "react-icons/md"; // Import the icon

const DropdownMenuComponent = () => {
  const [position, setPosition] = useState("top");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="focus:ring-2 ring-4 gap-3 hover:scale-110 font-bold flex justify-between px-5 bg-blue-500/60 text-black focus:ring-green-200"
        >
          Select Produce
          <MdArrowDropDownCircle className="w-5 text-white h-5" />
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
          <a href="/Lettuce">
            <DropdownMenuRadioItem value="top">Lettuce</DropdownMenuRadioItem>
          </a>
          <a href="/Beetroot">
            <DropdownMenuRadioItem value="top">Beetroot</DropdownMenuRadioItem>
          </a>
          <a href="/Squash">
            <DropdownMenuRadioItem value="top">Squash</DropdownMenuRadioItem>
          </a>
          <a href="/Radish">
            <DropdownMenuRadioItem value="top">Radish</DropdownMenuRadioItem>
          </a>
          <a href="/Dates">
            <DropdownMenuRadioItem value="top">Dates</DropdownMenuRadioItem>
          </a>
          <a href="/Cauliflower">
            <DropdownMenuRadioItem value="top">
              Cauliflower
            </DropdownMenuRadioItem>
          </a>
          <a href="/Gourd">
            <DropdownMenuRadioItem value="top">Gourd</DropdownMenuRadioItem>
          </a>
          <a href="/Celery">
            <DropdownMenuRadioItem value="top">Celery</DropdownMenuRadioItem>
          </a>
          <a href="/Courgette">
            <DropdownMenuRadioItem value="top">Courgette</DropdownMenuRadioItem>
          </a>
          <a href="/Watercress">
            <DropdownMenuRadioItem value="top">
              Watercress
            </DropdownMenuRadioItem>
          </a>
          <a href="/Dill">
            <DropdownMenuRadioItem value="top">Dill</DropdownMenuRadioItem>
          </a>
          <a href="/Basil">
            <DropdownMenuRadioItem value="top">Basil</DropdownMenuRadioItem>
          </a>
          <a href="/Parsley">
            <DropdownMenuRadioItem value="top">Parsley</DropdownMenuRadioItem>
          </a>
          <a href="/Coriander">
            <DropdownMenuRadioItem value="top">Coriander</DropdownMenuRadioItem>
          </a>
          <a href="/Mint">
            <DropdownMenuRadioItem value="top">Mint</DropdownMenuRadioItem>
          </a>
          <a href="/Carrot">
            <DropdownMenuRadioItem value="top">Carrot</DropdownMenuRadioItem>
          </a>
          <a href="/Cucumber">
            <DropdownMenuRadioItem value="top">Cucumber</DropdownMenuRadioItem>
          </a>
          <a href="/Eggplant">
            <DropdownMenuRadioItem value="top">Eggplant</DropdownMenuRadioItem>
          </a>
          <a href="/Chili">
            <DropdownMenuRadioItem value="top">Chili</DropdownMenuRadioItem>
          </a>
          <a href="/Garlic">
            <DropdownMenuRadioItem value="top">Garlic</DropdownMenuRadioItem>
          </a>
          <a href="/Capsicum">
            <DropdownMenuRadioItem value="top">Capsicum</DropdownMenuRadioItem>
          </a>
          <a href="/Ginger">
            <DropdownMenuRadioItem value="top">Ginger</DropdownMenuRadioItem>
          </a>
          <a href="/Potato">
            <DropdownMenuRadioItem value="top">Potato</DropdownMenuRadioItem>
          </a>
          <a href="/Onion">
            <DropdownMenuRadioItem value="top">Onion</DropdownMenuRadioItem>
          </a>
          <a href="/Tomato">
            <DropdownMenuRadioItem value="top">Tomato</DropdownMenuRadioItem>
          </a>
          <a href="/Strawberry">
            <DropdownMenuRadioItem value="top">
              Strawberry
            </DropdownMenuRadioItem>
          </a>
          <a href="/Avocado">
            <DropdownMenuRadioItem value="top">Avocado</DropdownMenuRadioItem>
          </a>
          <a href="/Sweet-Melon">
            <DropdownMenuRadioItem value="top">
              Sweet-Melon
            </DropdownMenuRadioItem>
          </a>
          <a href="/Watermelon">
            <DropdownMenuRadioItem value="top">
              Watermelon
            </DropdownMenuRadioItem>
          </a>
          <a href="/Grapefruit">
            <DropdownMenuRadioItem value="top">
              Grapefruit
            </DropdownMenuRadioItem>
          </a>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuComponent;
