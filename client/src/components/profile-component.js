import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";

const ProfileComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && <div>你必須先登入才能進入Profile頁面!</div>}
      {currentUser && (
        <div>
          <h1>Profile Page.</h1>
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.user.username}</strong>
            </h3>
            <p>
              <strong>Token:{currentUser.token}</strong>
            </p>
            <p>
              <strong>ID:{currentUser.user._id}</strong>
            </p>
            <p>
              <strong>email:{currentUser.user.email}</strong>
            </p>
          </header>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
