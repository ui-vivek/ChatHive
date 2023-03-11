import React from "react";

export default function Search() {
  return (
    <div className="search">
      <div className="searchform">
        <input type="text" placeholder="seaech a user" />
      </div>
      <div className="userchat">
        <img src="https://files.codingninjas.com/profile236766498c77d6f39b7da1c4e0c22ffee73e0cf.png" alt=""/>
        <div className="userchatinfo">
          <span>Hola</span>
          <p>my name</p>
        </div>
      </div>
    </div>
  );
}
