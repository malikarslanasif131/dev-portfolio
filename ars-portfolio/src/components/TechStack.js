import React from "react";
// Import statements for 'react-icons/bs'
import { BsFiletypeHtml, BsGit, BsFiletypeCss } from "react-icons/bs";

// Import statements for 'react-icons/fa'
import {
  FaPython,
  FaReact,
  FaLaravel,
  FaWordpressSimple,
  FaJava,
} from "react-icons/fa";

// Import statements for 'react-icons/di'
import { DiJqueryLogo, DiMongodb, DiDrupal } from "react-icons/di";

// Import statements for 'react-icons/si'
import { SiBootstrap, SiMysql, SiTailwindcss, SiExpress } from "react-icons/si";

// Import statements for 'react-icons/bi'
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoRedux,
  BiLogoDjango,
  BiLogoPhp,
} from "react-icons/bi";

// Import statements for 'react-icons/ai'
import { AiFillGithub } from "react-icons/ai";

// Import statements for 'react-icons/tb'
import { TbFileTypeSql } from "react-icons/tb";

import stackData from "./stackData.json";
// Map the icon names to their corresponding React icon components
const iconComponents = {
  BsFiletypeHtml: BsFiletypeHtml,
  BsGit: BsGit,
  BsFiletypeCss: BsFiletypeCss,
  FaPython: FaPython,
  FaReact: FaReact,
  FaLaravel: FaLaravel,
  FaWordpressSimple: FaWordpressSimple,
  DiJqueryLogo: DiJqueryLogo,
  DiMongodb: DiMongodb,
  DiDrupal: DiDrupal,
  FaJava: FaJava,
  SiBootstrap: SiBootstrap,
  BiLogoPhp: BiLogoPhp,
  SiMysql: SiMysql,
  SiTailwindcss: SiTailwindcss,
  SiExpress: SiExpress,
  BiLogoJavascript: BiLogoJavascript,
  BiLogoTypescript: BiLogoTypescript,
  BiLogoNodejs: BiLogoNodejs,
  BiLogoRedux: BiLogoRedux,
  BiLogoDjango: BiLogoDjango,
  AiFillGithub: AiFillGithub,
  TbFileTypeSql: TbFileTypeSql,
};

const TechStack = () => {
  return (
    <>
      <div className="card">
        <div className="">
          <div className="card-body">
            {stackData.map((item) => (
              <div className="stack__card card border_pink" key={item.id}>
                <h2 className="display-6">
                  {" "}
                  {iconComponents[item.icon] &&
                    React.createElement(iconComponents[item.icon])}{" "}
                  {item.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
