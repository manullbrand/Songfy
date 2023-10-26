import Footer from "./components/Footer";
import GlobalStyles from "./components/GlobalStyles";
import LastListened from "./components/LastListened";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import TopNavegation from "./components/TopNavegation";

function App() {
  return (
    <>
      <GlobalStyles />
      <SideBar />
      <TopNavegation />
      <LastListened />
      <Main />
      <Footer />
    </>
  );
}

export default App;
