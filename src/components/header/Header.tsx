"use client";

import logo from "../../../public/logo.png";
import Image from "next/image";

import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Ray from "@/app/icons/Ray";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Header() {
  return (
    <header
      className={`flex items-center px-[160px] max-md:px-4 justify-between  border-b border-lightGrey  h-[72px] "
      }`}
    >
      <Link href="/">
        <Image
          src={logo}
          alt="Data PANP logotipo"
          width={140}
          className="cursor-pointer"
          priority
        />
      </Link>

      <Button
        variant="contained"
        aria-label="Tenha acesso ilimitado"
        disabled
        sx={{
          fontSize: "14px",
          fontWeigh: "500",
          boxShadow: "none",
          textTransform: "initial",
          height: {
            sm: "32px",
            lg: "44px",
          },
        }}
      >
        <Ray
          width="20px"
          fill="white"
          style={{ paddingRight: 6 }}
          aria-hidden="true"
        />
        <Typography
          variant="body1"
          fontWeight="700"
          textTransform="capitalize"
          color="white"
        >
          Tenha acesso ilimitado
        </Typography>
      </Button>
    </header>
  );
}
