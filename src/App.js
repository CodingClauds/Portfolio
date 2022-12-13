import "./App.scss";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

import { useRef } from "react";

function App() {
  const myRefAbout = useRef(null);
  const myRefProjects = useRef(null);
  const myRefRoadmap = useRef(null);
  const myRefContact = useRef(null);

  const executeScroll = (scrollToSection) =>
    scrollToSection.current.scrollIntoView();

  return (
    <>
      <Header
        myRefAbout={myRefAbout}
        myRefProjects={myRefProjects}
        myRefRoadmap={myRefRoadmap}
        myRefContact={myRefContact}
        executeScroll={executeScroll}
      />
      <Body
        myRefAbout={myRefAbout}
        myRefProjects={myRefProjects}
        myRefRoadmap={myRefRoadmap}
        executeScroll={executeScroll}
      />
      <Footer myRefContact={myRefContact} />
    </>
  );
}

export default App;
