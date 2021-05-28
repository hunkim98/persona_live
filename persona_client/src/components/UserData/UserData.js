import axios from "axios";
import React, { useEffect, useState } from "react";
import "./UserData.css";
import { password_data } from "../../password";

function UserData() {
  const [userData, setUserData] = useState([]);
  const [arrangedData, setArrangedData] = useState([]);
  useEffect(() => {
    axios.get("/gatherData").then((res) => {
      console.log(res.data);
      setUserData(res.data);
    });
  }, []);
  useEffect(() => {
    setArrangedData(
      userData.sort((a, b) => {
        return a.timestamp - b.timestamp; //align according to timestamp
      })
    );
    console.log(userData);
  }, [userData]);

  const changeToDate = (item) => {
    const date = new Date(item).toLocaleString();
    return date;
  };
  const expandData = () => {
    if (arrangedData.length !== 0) {
      return arrangedData.map((item) => (
        <div className="userData" key={item.timestamp}>
          <div className="name">{item.name}</div>
          <div className="personality">{item.personality}</div>
          <div className="date">{changeToDate(item.timestamp)}</div>
        </div>
      ));
    } else {
      return "Wait a minute..";
    }
  };

  const resetAllData = () => {
    let password = prompt("Please enter your password", "");
    if (password === password_data) {
      axios.get("/removeData").then((res) => {
        console.log(res);
      });
    } else {
      alert("wrong password!");
    }
  };

  return (
    <>
      <div className="total_users">
        <div className="title">Total Users: </div>
        <div className="amount">{userData.length}</div>
      </div>
      <div>{expandData()}</div>
    </>
  );
}

export default UserData;
