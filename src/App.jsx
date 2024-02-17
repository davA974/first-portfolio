import "./App.css";
import AboutMe from "./components/AboutMe";
// import AsideComponents from "./components/AsideComponents";
import HeaderComp from "./components/HeaderComp";

function App() {
  return (
    <>
      <div className="main">
        <HeaderComp />
        <AboutMe />
        {/* <AsideComponents /> */}
      </div>
    </>
  );
}

export default App;
