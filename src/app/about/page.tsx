import React from "react";
import Image from "next/image";
import PicAbout from "../../../public/pics/about.jpg";
import IconTelegram from "../../../public/icons/icon_telegram.svg";
import IconLinkedin from "../../../public/icons/icon_linkedin.svg";

import { montserrat } from "@/app/font";
import Link from "next/link";

const social = [
  { src: IconTelegram, link: "https://t.me/vastolya" },
  { src: IconLinkedin, link: "https://www.linkedin.com/in/vastolya/" },
];

const experience = [
  {
    title: "Gaijin Entertainment",
    subtitle:
      "Работал над созданием внутренних сервисов для одного из крупнейших разработчиков игр в Европе, известного такими играми, как War Thunder",
    stack: "TypeScript, React, ChakraUI, OpenAPI, TanStack Query, Gerrit",
    link: "https://gaijin.net/en",
  },
  {
    title: "LS Group Thailand",
    subtitle:
      "Выпустил два SPA-приложения на Next.js, TypeScript, Tailwind, для проектов в ритейле и онлайн-продажах",
    stack:
      "TypeScript, Next.js, Tailwind, Node.js, Shopify API, Stripe, Google Maps API, Resend",
    link: "https://www.fixifoot.com/",
  },
  {
    title: "Экологический фонд «МФОНД» (Москва)",
    subtitle:
      "Сотрудничал с 2021 по 2022 год. Осуществлял съемку, монтаж и создание моушен-дизайна для YouTube-канала.",
    link: "https://ecosphere.press/",
  },
  {
    title: "Hearst Shkulev Media (Красноярск)",
    subtitle:
      "Работал с 2019 по 2020 год на новостном веб-сайте. Осуществлял съемку документальных фильмов для YouTube и создание моушн-дизайна для социальных медиа.",
    stack: "",
    link: "https://en.wikipedia.org/wiki/Hearst_Shkulev_Media",
  },
  {
    title: "XXIX Всемирная зимняя универсиада (Красноярск)",
    subtitle:
      "С 2018 по 2019 год организовывал работу команд видеооператоров и монтажеров, а также вел документацию, занимался техническими заданиями и анализом результатов.",
    stack: "",
    link: "https://en.wikipedia.org/wiki/2019_Winter_Universiade",
  },
];

const education = [
  {
    title:
      "Сибирский государственный аэрокосмический университетимени академика М.Ф. Решетнева",
    subtitle: "Информационная безопасность",
    location: "Красноярск, 2010 — 2014",
  },
  {
    title: "Онлайн-школа современного искусства «Концепция»",
    subtitle: "Видеоарт и коммуникационные стратегии",
    location: "Москва, 2021 — 2022",
  },
];

const exhibition = [
  {
    title: "«Антрополэнд»",
    subtitle: "Севкабель Порт, Санкт-Петербург, 2022",
    link: "https://anthropoland.art/",
  },
  {
    title: "«Посмотреть результаты»",
    subtitle: "Kunsthalle nummer sieben, Санкт-Петербург, 2021",
    link: "https://www.facebook.com/conceptionschool/posts/pfbid02EQdGziJodpsE1CtjMtKZw5HEJLZq1df8Rek5PrZdTwSDxq1KGEmHUxMKi9ajDmfil",
  },
  {
    title: "«Арт закладки» — Beat Weekend 2020",
    subtitle: "Дом Кино, Красноярск, 2020",
    link: "https://www.krasdomkino.ru/events/mediaproekt-art-zakladki-v-ramkah-festivalya-beat-weekend-2020",
  },
];

const About = () => {
  return (
    <main className="md:min-h-[91vh]">
      <div className="h-[68px] md:h-[9.62vh] "></div>
      <h1 className="mx-5 py-2 text-2xl md:mx-[12.5vw]  md:text-[5.18vh] md:leading-[5.55vh] md:py-[1.85vh]">
        ОБО МНЕ
      </h1>
      <div className="mx-5 grid gap-y-5 md:mx-[12.5vw] md:grid-cols-6 md:gap-x-[1.04vw] md:gap-y-[3.7vh]">
        <div className="md:col-span-2 h-[256px] first-letter:md:h-[18.70vh] bg-gray-200 rounded-lg relative overflow-hidden md:mr-[2vw]">
          <Image src={PicAbout} alt="" fill className=" object-cover" />
          {/* <div className="absolute bottom-[1.85vh] right-[1.04vw] flex gap-[0.52vw]">
            {social.map((item, index) => (
              <Link href={item.link} key={index} target="_blank" className="">
                <Image src={item.src} alt="" width={24} className="w-[2.1vw] h-[4.07vh] object-cover rounded-lg " />
              </Link>
            ))}
          </div> */}
        </div>
        <div className="flex flex-col gap-3 md:col-span-4  md:gap-[1.85vh] md:font-medium">
          <h2 className="text-2xl md:text-[2.22vh] md:leading-[2.22vh]">АНАТОЛИЙ ВАСИЛЬЕВ</h2>
          <p
            className={` text-base md:text-[1.48vh] md:leading-[2.2vh] ${montserrat.className}`}
          >
            Я  фронтенд-разработчик с 3-мя годами коммерческого опыта <br className="hidden md:block"/><br className="hidden md:block"/> А еще, режиссер-монтажа и моушен-дизайнер с 7-ю годами практики,
            я создавал документальные фильмы и рекламу для социальных сетей и телевидения
          </p>
          <p
            className={`md:text-[1.48vh] md:leading-[2.2vh] ${montserrat.className}`}
          >
            Владею английским языком, могу вести деловую переписку и переговоры
          </p>
        </div>
        <div className="hidden md:flex md:col-span-2 flex-col md:gap-[1.85vh] md:pb-[1.85vh]">
          <h2 className="md:text-[2.22vh] md:leading-[2.22vh] ">ОБРАЗОВАНИЕ</h2>
          <div
            className={`md:pb-[1.85vh] flex flex-col md:gap-[1.85vh] md:text-[1.48vh] md:leading-[2.2vh] font-medium ${montserrat.className}`}
          >
            {education.map((item, index) => (
              <div key={index} className="flex flex-col md:gap-[0.74vh]">
                <p className="font-semibold">{item.title}</p>
                <p>{item.subtitle}</p>

                <p className="text-gray-500 md:text-[1.31vh]">{item.location}</p>
              </div>
            ))}
          </div>
          <h2 className="md:text-[2.22vh] md:leading-[2.22vh]">ВЫСТАВКИ</h2>
          <div
            className={`flex flex-col md:gap-[1.85vh] md:text-[1.48vh] md:leading-[2.2vh] font-medium ${montserrat.className}`}
          >
            {exhibition.map((item, index) => (
              <div key={index} className="flex flex-col md:gap-[0.74vh] ">
                <Link
                  href={item.link}
                  className="font-semibold hover:underline w-fit"
                >
                  {item.title}
                </Link>
                <p className="text-gray-500  md:text-[1.31vh]">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-4">
          <h2 className="text-2xl pb-3 md:text-[2.22vh] md:leading-[2.22vh] md:pb-[1.85vh] ">
            ОПЫТ РАБОТЫ
          </h2>
          <div
            className={`flex flex-col gap-5 text-base md:gap-[1.85vh] md:text-[1.48vh] md:leading-[2.2vh] md:font-medium ${montserrat.className}`}
          >
            {experience.map((item, index) => (
              <div key={index} className="flex flex-col md:gap-[0.74vh] gap-3">
                <Link
                  href={item.link}
                  className=" font-medium md:font-semibold hover:underline w-fit"
                >
                  {item.title}
                </Link>
                <p>{item.subtitle}</p>
                {item.stack ? (
                  <p className="text-base md:text-[1.31vh] md:text-gray-500">
                    <span className="font-medium ">Стэк: </span>
                    {item.stack}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-5 md:hidden md:col-span-2 flex-col md:gap-[1.85vh] md:pb-[1.85vh]">
       
          <h2 className="text-2xl md:text-[2.22vh] md:leading-[2.22vh]">ВЫСТАВКИ</h2>
          <div
            className={`flex flex-col gap-3 md:gap-[1.85vh] md:text-[1.48vh] md:leading-[2.2vh] md:font-medium ${montserrat.className}`}
          >
            {exhibition.map((item, index) => (
              <div key={index} className="flex flex-col gap-3 md:gap-[0.74vh] ">
                <Link
                  href={item.link}
                  replace
                  className="font-medium md:font-semibold hover:underline w-fit"
                >
                  {item.title}
                </Link>
                <p className="text-gray-500 text-base md:text-[1.31vh]">{item.subtitle}</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl md:text-[2.22vh] md:leading-[2.22vh] ">ОБРАЗОВАНИЕ</h2>
          <div
            className={`flex flex-col text-base gap-5 md:pb-[1.85vh]  md:gap-[1.85vh] md:text-[1.48vh] md:leading-[2.2vh] md:font-medium ${montserrat.className}`}
          >
            {education.map((item, index) => (
              <div key={index} className="flex flex-col gap-3 md:gap-[0.74vh]">
                <p className="font-medium md:font-semibold">{item.title}</p>
                <p>{item.subtitle}</p>

                <p className="text-gray-500 text-base md:text-[1.31vh]">{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
