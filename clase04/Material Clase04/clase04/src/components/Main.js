import React, { useContext } from "react";
import Section from "./Section";
import { Element } from "react-scroll";
import SectionContext from "../context/SectionContext";

const Main = () => {
  const { temas } = useContext(SectionContext);
  return temas.length === 1 ? (
    <Element key={`${temas[0].id}`} name={temas[0].id}>
      <Section id={`${temas[0].id}`} />
    </Element>
  ) : (
    temas.map((el, i) => (
      <Element key={`${el.id}-${i}`} name={el.id}>
        <Section id={`${el.id}`} i={i} />
      </Element>
    ))
  );
};

export default Main;
