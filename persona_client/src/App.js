import React, { useEffect, useState } from "react";
import { useLocation, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ReactGA from "react-ga";
import RouteChangeTracker from "./RouteChangeTracker";
import Popup from "./components/Start/Popup";
import Basic from "./components/Start/Basic";
import Result from "./components/Result/Result";
import UserData from "./components/UserData/UserData";
import Share from "./components/Share/Share";
import Home from "./components/Start/Home";
import About from "./components/about/About";
import Masks from "./components/masks/Masks";
import Explanation from "./components/masks/Explanation";
import Infographic from "./components/Infographic/Infographic";
import Treemap from "./components/treemap/treemap";
import AdfitWebComponent from "react-adfit-web-component";

function App() {
  const [startBool, setStartBool] = useState([false, false]);
  const [name, setName] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [color, changeColor] = useState("#ffffff");
  const location = useLocation();
  const [popup, setPopup] = useState(true);

  useEffect(() => {
    let host = window.location.hostname;
    if (host !== "localhost") {
      ReactGA.initialize("UA-190746001-1");
      const path = location.pathname + location.search;
      ReactGA.set({ page: path });
      ReactGA.pageview(path);
    }
    //to report page view
    let ins = document.createElement("ins");
    let scr = document.createElement("script");

    ins.className = "kakao_ad_area";
    ins.style = "display:none;";
    scr.async = "true";
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    ins.setAttribute("data-ad-width", "320");
    ins.setAttribute("data-ad-height", "100");
    ins.setAttribute("data-ad-unit", "DAN-coqLHA66wpwf9Pob");

    document.querySelector(".adfit").appendChild(ins);
    document.querySelector(".adfit").appendChild(scr);
  }, []);

  return (
    <div
      style={{
        backgroundColor: color,
        transition: "all .5s ease",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
      id="main"
    >
      <RouteChangeTracker />
      {popup && location.pathname === "/" ? (
        <Popup setPopup={setPopup} />
      ) : null}
      <Navbar
        setStartBool={setStartBool}
        setName={setName}
        setQuestionNumber={setQuestionNumber}
        changeColor={changeColor}
      />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <Basic
              {...props}
              setStartBool={setStartBool}
              startBool={startBool}
              name={name}
              setName={setName}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              changeColor={changeColor}
            />
          )}
        />
        <Route path="/home" render={(props) => <Home />} />
        <Route
          path="/about"
          render={(props) => <About {...props} changeColor={changeColor} />}
        />
        <Route
          path="/masks"
          exact
          render={(props) => <Masks {...props} changeColor={changeColor} />}
        />
        <Route
          path="/masks/:id"
          render={(props) => (
            <Explanation {...props} changeColor={changeColor} />
          )}
        />
        <Route
          path="/result/:id"
          render={(props) => <Result {...props} changeColor={changeColor} />}
        />
        <Route path="/data" render={(props) => <UserData />} />
        <Route
          path="/share/:id"
          render={(props) => <Share {...props} changeColor={changeColor} />}
        />
        <Route
          path="/infographic/:id"
          render={(props) => (
            <Infographic {...props} changeColor={changeColor} />
          )}
        />
      </Switch>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div class="adfit"></div>
      </div>
    </div>
  );
}

export default App;
