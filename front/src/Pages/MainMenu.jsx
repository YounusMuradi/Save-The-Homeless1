import React, { useState } from "react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Doantate from "../components/Doantate";
import { useTranslation } from "react-i18next";
import Accordion from "../components/Accordion";
import Bloglist from "../components/Bloglist";

function MainMenu() {
  const [readMore, setreadMore] = useState();
  const { t } = useTranslation();

  return (
    <div className="relative bg-backgorund ">
      <Header />

      <div className="border  border-b-black">
        <section className=" mb-36 flex relative  ">
          <div className=" flex   flex-col mr-32    ">
            <img
              className="  ml-72 mt-20 w-80 "
              src="Telegram/Hand-with-coin.svg"
              alt=""
            />
            r
            <img className=" w-80 mt-32" src="Telegram/Hand.svg" alt="" />
          </div>
          <div className="">
            <img
              src="Telegram/Can.svg"
              className="w-80 ml-80 mb- mt-20 absolute top-24 right-10 "
              alt=""
            />
          </div>
          <div className="absolute w-full flex pt-40 font-semibold   flex-col text-center justify-center ">
            <br />
            <h1 className=" lg:text-8xl   lg:font-bold lg:pl-10    lg:mr-20">
              {t("Fundraising_For_The_People")}
            </h1>
            <h1 className=" pl- mt-8  text-secondary outline-offset-1 font-semibold">
              <img className="mx-auto mt-10" src="Telegram/You.svg" alt="" />
            </h1>
            <div className="mt-8  text-1xl ">
              <p className="w-96 mx-auto">{t("des1")}</p>

              <button className=" lg:mt-4 flex mx-auto pl-6 pt-1 lg:w-36 lg:rounded-sm lg:h-10 lg:text-white lg:hover:bg-sky-700  lg:bg-teal-950">
                {t("donate")}
              </button>
            </div>
          </div>
        </section>
      </div>
      <h1 className="lg:flex lg:justify-center lg:text-2xl lg:mt-6 lg:font-bold">
        Trust Get Noticed
      </h1>
      <div className=" lg:flex lg:flex-row lg:mx-16 my-10 gap-16 mb-3 overflow-hidden  ">
        <img className="lg:h-52  lg:w-48" src="Telegram/UN.png" alt="" />
        <img className="lg:h-52 lg:w-48" src=" Telegram/savethe.jpg" alt="" />
        <img className="lg:h-52 lg:w-48" src="Telegram/wfp.png" alt="" />
        <img className="lg:h-52 lg:w-48" src="Telegram/uniced.png" alt="" />
        <img className="lg:h-52 lg:w-48" src="Telegram/voice.png" alt="" />
      </div>
      <div className="flex w-full h-[450px] relative bg-accent-1 mb-12">
        <div>
          <h1 className=" lg:text-3xl lg:w-64 lg:font-semibold lg:text-white lg:mt-8 lg:ml-[60px]">
            {t("des3")}{" "}
          </h1>
          <p className="lg:text-white lg:font-semibold lg:opacity-95 w-[700px] lg:my-4 lg:pl-[60px]">
            {t("home")}
          </p>
          <Link to="/bank">
            <button className=" lg:mt-2  lg:w-28  lg:h-8 lg:text-black lg:hover:bg-sky-700  lg:ml-[60px] bg-accent-2">
              {t("donate")}
            </button>
          </Link>
        </div>
        <div className=" lg:absolute lg:right-[60px]  lg:top-2">
          <div className="w-72 mb-4  h-48 bg-backgorund ">
            {" "}
            <img
              src="Telegram/coin-heart.svg"
              className=" lg:ml-16 lg:pt-4 "
              alt=""
            />
            <h1 className="lg:text-center lg:text-3xl font-bold">Donation</h1>
          </div>
          <div className="lg:w-72 lg:mb-4  lg:h-48 bg-backgorund">
            {" "}
            <img
              src="Telegram/6305ba88a364e26cae98f432_Organization_Details_Image3_Traced.svg"
              className=" lg:ml-10 pt-4"
              alt=""
            />
            <h1 className="lg:text-center lg:text-3xl lg:font-bold">
              Eduacation
            </h1>
          </div>
          <img src="" alt="" />
        </div>
      </div>
      <div>
        {" "}
        <h1 className=" lg:justify-center  lg:flex text-3xl mb-5 lg:font-semibold">
          {t("des5")}{" "}
        </h1>
        <p className="lg:flex lg:justify-center font-semibold mx-auto w-[770px] lg:mb-12">
          {t("des4")}
        </p>
      </div>
      <div
        className=" lg:flex lg:space-x-6 lg:justify-center lg:ml-0 lg:mr-16 lg:relative  lg:first-letter: lg:mb-2 "
        id="here"
      >
        <Doantate
          buttonText={t("donate")}
          img="Telegram/orphan.jpeg"
          title={t("des7")}
          ptext={t("des6")}
        />
        <Doantate
          buttonText={t("donate")}
          img="Telegram/orphan.jpeg"
          title={t("des7")}
          ptext={t("des6")}
        />
        <Doantate
          buttonText={t("donate")}
          img="Telegram/orphan.jpeg"
          title={t("des7")}
          ptext={t("des6")}
        />
      </div>
      <div className="w-6/7  mx-16 bg-accent-1 h-60 relative mb-16 mt-60 ">
        <h1 className="text-2xl font-semibold absolute text-white left-[410px]   top-24">
          {t("des8")}
        </h1>
        <Link
          to="/signup?donate=true"
          className="absolute left-96 ml-28 pt-1  top-12 mt-24 w-32 rounded-sm bg-accent-2 h-9 border border-collapse pl-3 hover:bg-white"
        >
          {t("donate")}
        </Link>

        <img src="Telegram/Group.svg" className="pb-0" alt="" />
        <img
          src="Telegram/Hand-with-coin.svg"
          className="pb-0 absolute top-0 right-0 w-80"
          alt=""
        />
      </div>
      <div className="flex relative  mb-14">
        <h1 className="mx-auto font-bold text-2xl  ">{t("article")}</h1>
      </div>
      <Bloglist />
      {/* <div className="flex flex-row  px-[60px] w-full space-x-2 mb-10 ">
        <div className="flex-1  ">
          <Accordion className="space-y-2">
            <AccordionItem
              style={{
                backgroundColor: "#e3f7f7",
                border: "1px solid black",
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton style={{ backgroundColor: "#e3f7f7" }}>
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              style={{
                backgroundColor: "#e3f7f7",
                border: "1px solid black",
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton style={{ backgroundColor: "#e3f7f7" }}>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              style={{
                backgroundColor: "#e3f7f7",
                border: "1px solid black",
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton style={{ backgroundColor: "#e3f7f7" }}>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              style={{
                backgroundColor: "#e3f7f7",
                border: "1px solid black",
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton style={{ backgroundColor: "#e3f7f7" }}>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex-1">
          <Accordion className="space-y-2">
            <AccordionItem
              style={{
                backgroundColor: "#e3f7f7",
                border: "1px solid black",
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton style={{ backgroundColor: "#e3f7f7" }}>
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              style={{
                backgroundColor: "#e3f7f7",
                border: "1px solid black",
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton style={{ backgroundColor: "#e3f7f7" }}>
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              style={{
                backgroundColor: "#e3f7f7",
                border: "1px solid black",
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton style={{ backgroundColor: "#e3f7f7" }}>
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem
              style={{
                backgroundColor: "#e3f7f7",
                border: "1px solid black",
              }}
            >
              <AccordionItemHeading>
                <AccordionItemButton style={{ backgroundColor: "#e3f7f7" }}>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div> */}
      <Accordion />
      <div className="lg:w-full lg:h-44 lg:relative lg:bg-accent-2">
        <h1 className="text-2xl lg:absolute lg:top-10 left-[60px]  lg:font-bold">
          Get Every Week Update
        </h1>

        <p className="lg:w-72 lg:absolute lg:top-20 lg:left-[60px] lg:font-semibold ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        </p>
        <div className="lg:absolute lg:ml-[430px] lg:top-16  lg:left-96">
          <input
            placeholder="Email"
            type="email"
            className="lg:h-12 lg:pl-4 rounded-sm border border-black w-80 bg-white"
          />
          <button className="bg-accent-3 md:w-24 sm:w-16 lg:w-36 lg:rounded-sm hover:bg-accent-2 hover:text-black hover:border-spacing-2 h-12 ml-2 text-white">
            Subscribe Me
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainMenu;
