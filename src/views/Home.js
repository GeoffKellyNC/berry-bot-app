import React, { useEffect } from "react";
import styled from "styled-components";

import ConfigPanel from "../components/configuration/ConfigPanel";
import Panel from "../components/control-panel/Panel";
import Hero from "../components/Hero";
import StatusBar from "../components/statusBar/StatusBar";

function Home() {
  return (
    <HomeStyled>
      <Hero />
      <div className="home-body">
        <StatusBar />
        <Panel />
      </div>
    </HomeStyled>
  );
}

export default Home;

const HomeStyled = styled.div`
  .home-body {
    background: rgb(13 13 15 / 75%);
  }
`;
