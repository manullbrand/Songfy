import Footer from "./components/Footer";
import GlobalStyles from "./components/GlobalStyles";
import LastListened from "./components/LastListened";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import TopNavegation from "./components/TopNavegation";
import styled from "styled-components";
import { CSSVariables } from "./components/CSSVariables";
import NavigationContainer from "./components/NavigationContainer";

const MainContainer = styled.div`
  background-color: ${CSSVariables.colors.background};
  display: flex;
  gap: 6px;
  margin: 0;
  padding: 6px;
`;

function App() {
  return (
    <>
      <MainContainer>
        <GlobalStyles />
        <SideBar />
        <NavigationContainer>
          <TopNavegation />
          <LastListened />
          <Main />
        </NavigationContainer>
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
