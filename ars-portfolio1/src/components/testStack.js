import React from "react";

const testStackData = [
  {
    id: 1,
    name: "HTML",
    icon: "BsFiletypeHtml",
    lib: "bs",
  },
  {
    id: 2,
    name: "CSS",
    icon: "BsFiletypeCss",
    lib: "bs",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "BiLogoJavascript",
    lib: "bi",
  },
];

export const generateImportStatementsAndIcons = () => {
  const importStatements = testStackData.map(
    (item) => `import { ${item.icon} } from "react-icons/${item.lib}";`
  );

  const icons = testStackData.map((item) => item.icon);

  return {
    importStatements,
    icons,
  };
};
