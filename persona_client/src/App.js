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

function App() {
  const [startBool, setStartBool] = useState([false, false]);
  const [name, setName] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [color, changeColor] = useState("#ffffff");
  const location = useLocation();
  const [popup, setPopup] = useState(true);

  const data = {
    name: "Celtics",
    children: [
      {
        name: "Guards",
        children: [
          {
            category: "Guards",
            name: "Kemba Walker",
            value: 20.4,
          },
          {
            category: "Guards",
            name: "Marcus Smart",
            value: 12.9,
          },
          {
            category: "Guards",
            name: "Brad Wanamaker",
            value: 6.9,
          },
          {
            category: "Guards",
            name: "Tremont Waters",
            value: 3.6,
          },
          {
            category: "Guards",
            name: "Carsen Edwards",
            value: 3.3,
          },
          {
            category: "Guards",
            name: "Romeo Langford",
            value: 2.5,
          },
        ],
      },
      {
        name: "Forwards",
        children: [
          {
            category: "Forwards",
            name: "Jayson Tatum",
            value: 23.4,
          },
          {
            category: "Forwards",
            name: "Jaylen Brown",
            value: 20.3,
          },
          {
            category: "Forwards",
            name: "Gordon Hayward",
            value: 17.5,
          },
          {
            category: "Forwards",
            name: "Grant Williams",
            value: 3.4,
          },
          {
            category: "Forwards",
            name: "Javonte Green",
            value: 3.4,
          },
          {
            category: "Forwards",
            name: "Semi Ojeleye",
            value: 3.4,
          },
          {
            category: "Forwards",
            name: "Vincent Poirier",
            value: 1.9,
          },
        ],
      },
      {
        name: "Centers",
        children: [
          {
            category: "Centers",
            name: "Daniel Theis",
            value: 9.2,
          },
          {
            category: "Centers",
            name: "Enes Kanter",
            value: 8.1,
          },
          {
            category: "Centers",
            name: "Robert Williams III",
            value: 5.2,
          },
          {
            category: "Centers",
            name: "Tacko Fall",
            value: 3.3,
          },
        ],
      },
    ],
  };
  useEffect(() => {
    let host = window.location.hostname;
    if (host !== "localhost") {
      ReactGA.initialize("UA-190746001-1");
      const path = location.pathname + location.search;
      ReactGA.set({ page: path });
      ReactGA.pageview(path);
    }
    //to report page view
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
        <Route
          path="/treemap"
          render={(props) => <Treemap data={data} height={400} width={600} />}
        />
      </Switch>
    </div>
  );
}

export default App;
