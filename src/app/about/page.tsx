import React from "react";
import Image from "next/image";
import PicAbout from "../../../public/pics/about.jpg";
import IconTelegram from "../../../public/icons/icon_telegram.svg";
import IconGithub from "../../../public/icons/icon_github.svg";
import IconLinkedin from "../../../public/icons/icon_linkedin.svg";

import { montserrat } from "@/app/font";
import Link from "next/link";

const social = [
  { src: IconTelegram, link: "https://t.me/vastolya" },
  { src: IconGithub, link: "https://github.com/vastolya" },
  { src: IconLinkedin, link: "https://www.linkedin.com/in/vastolya/" },
];

const experience = [
  {
    title: "Bamboo Story LTD (Бангкок)",
    subtitle:
      "Frontend/Fullstack-разработчик с сентября 2023. Создал адаптивный сайт, настроил взаимодействие с внешними сервисами,  провел SEO-оптимизацию.",
    stack: "Next.js, TypeScript, Tailwind, Node.js, Resend, Firebase, Stripe",
    link: "https://bamboo-story.vercel.app/",
  },
  {
    title: "Fixifoot (Бангкок)",
    subtitle:
      "Frontend/Fullstack-разработчик с ноября 2022 по август 2023. Руководил командой из трех человек, разработал адаптивный дизайн, интегрировал внешние сервисы, провел SEO-оптимизацию.",
    stack:
      "Next.js, TypeScript, Tailwind, Shopify API, Node.js, Google Maps API, Nodemailer",
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
    <main className="min-h-[91vh]">
      <div className="h-[9.62vh] "></div>
      <h1 className="mx-[12.5vw] text-[5.18vh] leading-[5.55vh] py-[1.85vh]">
        ОБО МНЕ
      </h1>
      <div className="mx-[12.5vw] grid grid-cols-6 gap-x-[1.04vw] gap-y-[3.7vh]">
        <div className="col-span-2 h-[18.70vh] bg-gray-200 rounded-lg relative overflow-hidden mr-[2vw]">
          <Image src={PicAbout} alt="" fill className=" object-cover" />
          {/* <div className="absolute bottom-[1.85vh] right-[1.04vw] flex gap-[0.52vw]">
            {social.map((item, index) => (
              <Link href={item.link} key={index} target="_blank" className="">
                <Image src={item.src} alt="" width={24} className="w-[2.1vw] h-[4.07vh] object-cover rounded-lg " />
              </Link>
            ))}
          </div> */}
        </div>
        <div className="col-span-4 flex flex-col gap-[1.85vh] font-medium">
          <h2 className="text-[2.22vh] leading-[2.22vh]">АНАТОЛИЙ ВАСИЛЬЕВ</h2>
          <p
            className={`text-[1.48vh] leading-[2.2vh] ${montserrat.className}`}
          >
            Я профессионал с более чем 2-мя годами коммерческого опыта во
            фронтенд-разработке. <br /> В данный момент удаленно управляю двумя
            проектами. <br /> Кроме того, я режиссер-монтажа с 8-ю годами опыта,
            создавал документальные фильмы, <br />
            имиджевые видео и рекламу для социальных сетей и телевидения.
          </p>
          <p
            className={`text-[1.48vh] leading-[2.2vh] ${montserrat.className}`}
          >
            Владею английским языком, могу вести деловую переписку и переговоры.
          </p>
        </div>
        <div className="col-span-2 flex flex-col gap-[1.85vh] pb-[1.85vh]">
          <h2 className="text-[2.22vh] leading-[2.22vh] ">ОБРАЗОВАНИЕ</h2>
          <div
            className={`pb-[1.85vh] flex flex-col gap-[1.85vh] text-[1.48vh] leading-[2.2vh] font-medium ${montserrat.className}`}
          >
            {education.map((item, index) => (
              <div key={index} className="flex flex-col gap-[0.74vh]">
                <p className="font-semibold">{item.title}</p>
                <p>{item.subtitle}</p>

                <p className="text-gray-500 text-[1.31vh]">{item.location}</p>
              </div>
            ))}
          </div>
          <h2 className="text-[2.22vh] leading-[2.22vh]">ВЫСТАВКИ</h2>
          <div
            className={`flex flex-col gap-[1.85vh] text-[1.48vh] leading-[2.2vh] font-medium ${montserrat.className}`}
          >
            {exhibition.map((item, index) => (
              <div key={index} className="flex flex-col gap-[0.74vh] ">
                <Link
                  href={item.link}
                  className="font-semibold hover:underline w-fit"
                >
                  {item.title}
                </Link>
                <p className="text-gray-500  text-[1.31vh]">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-4">
          <h2 className="text-[2.22vh] leading-[2.22vh] pb-[1.85vh]">
            ОПЫТ РАБОТЫ
          </h2>
          <div
            className={`flex flex-col gap-[1.85vh] text-[1.48vh] leading-[2.2vh] font-medium ${montserrat.className}`}
          >
            {experience.map((item, index) => (
              <div key={index} className="flex flex-col gap-[0.74vh]">
                <Link
                  href={item.link}
                  className="font-semibold hover:underline w-fit"
                >
                  {item.title}
                </Link>
                <p>{item.subtitle}</p>
                {item.stack ? (
                  <p className="text-[1.31vh] text-gray-500">
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
      </div>
    </main>
  );
};

export default About;
