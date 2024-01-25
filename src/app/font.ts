import localFont from "next/font/local";


export const RG_Spacious = localFont({
  src: [
    {
      path: "../../public/fonts/RG-SpaciousBook.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Montserrat-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Montserrat-ExtraBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
