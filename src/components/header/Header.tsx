"use client";

import logo from "../../../public/logo.png";
import Image from "next/image";

import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Ray from "@/app/icons/Ray";
import Link from "next/link";
import DynamicFormOutlinedIcon from "@mui/icons-material/DynamicFormOutlined";
import HideOnMobile from "../hideOnMobile/HideOnMobile";
import Space from "../space/Space";
import HideOnDesktop from "../hideOnDesktop/HideOnDesktop";

export default function Header() {
  return (
    <header
      className={`flex items-center px-[160px] max-md:px-4 justify-between  border-b border-lightGrey  h-[72px] "
      }`}
    >
      <div className="flex items-center justify-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Data PANP logotipo"
            width={140}
            className="cursor-pointer"
          />
        </Link>
        <Space right={10} />
        <Link href="https://data-panp-tests.vercel.app/">
          <HideOnMobile>
            <Typography
              mt={1}
              sx={{ cursor: "pointer" }}
              variant="body1"
              fontWeight="700"
              textTransform="capitalize"
              fontSize="12px"
              className="flex items-center "
            >
              <DynamicFormOutlinedIcon
                style={{ fontSize: "20px" }}
                className="mr-1"
              />
              Data Hub
            </Typography>
          </HideOnMobile>
          <HideOnDesktop>
            <Typography
              mt={1}
              sx={{ cursor: "pointer" }}
              variant="body1"
              fontWeight="700"
              textTransform="capitalize"
              fontSize="14px"
              className="flex items-center flex-col justify-center"
            >
              <DynamicFormOutlinedIcon style={{ fontSize: "24px" }} />
              {"  "}
              Hub
            </Typography>
          </HideOnDesktop>
        </Link>
        <Space right={4} />
      </div>

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
          fontWeight="700"
          textTransform="capitalize"
          color="white"
          fontSize="14px"
        >
          Tenha acesso ilimitado
        </Typography>
      </Button>
    </header>
  );
}
