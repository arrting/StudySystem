import React from "react";
import { Link, useHistory } from "react-router-dom";
import AuthService from "../services/auth.service";

const NavComponent = (props) => {
  //console.log("props=" + props);
  let { currentUser, setCurrentUser } = props;
  const history = useHistory();
  const handleLogout = () => {
    AuthService.logout();
    window.alert("登出成功，轉移至主頁。");
    setCurrentUser(null);
    history.push("/");
  };
  return (
    <div>
      <nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                {!currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                )}
                {!currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li className="nav-item">
                    <Link onClick={handleLogout} className="nav-link" to="#">
                      Logout
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/course">
                      Courses
                    </Link>
                  </li>
                )}
                {currentUser && currentUser.user.role == "教師" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/postCourse">
                      Post Courses
                    </Link>
                  </li>
                )}
                {currentUser && currentUser.user.role == "學生" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/enroll">
                      Enroll
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default NavComponent;
