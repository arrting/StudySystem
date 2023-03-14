import React from "react";
import { useHistory } from "react-router-dom";

const HomeComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useHistory();
  const toCourse = () => {
    if (currentUser) {
      history.push("/course");
    } else {
      alert("請先登入會員");
      history.push("/login");
    }
  };
  const toLogin = () => {
    history.push("/login");
  };
  return (
    <main>
      <div class="container py-4">
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">課程學習系統</h1>
            <p class="col-md-8 fs-4">
              本系統使用 React.js 作為前端框架，以及 Node.js， MongoDB
              作為後端服務器。 這種項目叫做MERN
              項目，這是創建現代常使用的網站方式之一。
            </p>
            <button
              onClick={toCourse}
              class="btn btn-primary btn-lg"
              type="button"
            >
              See how it works.
            </button>
          </div>
        </div>

        <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
              <h2>作為學生</h2>
              <p>
                學生可以註冊他們喜歡的課程。 本網站是為
                僅供練習，請勿提供任何個人信息 信息，例如信用卡號碼。
              </p>
              <button
                onClick={toLogin}
                class="btn btn-outline-light"
                type="button"
              >
                Login Now
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 bg-light border rounded-3">
              <h2>作為教師</h2>
              <p>
                您可以通過註冊成為一名講師，然後開始 製作在線課程。
                本網站僅供練習 只是，所以請不要提供任何個人信息，例如
                信用卡號碼。
              </p>
              <button
                onClick={toLogin}
                class="btn btn-outline-secondary"
                type="button"
              >
                Login Now
              </button>
            </div>
          </div>
        </div>

        <footer class="pt-3 mt-4 text-muted border-top">
          &copy; 2023 Ting
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
