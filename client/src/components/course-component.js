import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CourseService from "../services/course.service";

const CourseComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useHistory();
  const handleTakeToLogin = () => {
    history.push("/login");
  };
  let [courseData, setCourseData] = useState(null);
  useEffect(() => {
    console.log("Using effect.");
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
    } else {
      _id = "";
    }
    if (currentUser.user.role == "教師") {
      CourseService.get(_id)
        .then((data) => {
          console.log(data);
          setCourseData(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (currentUser.user.role == "學生") {
      CourseService.getEnrolledCrouses(_id)
        .then((data) => {
          console.log(data);
          setCourseData(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>你必須先登錄才能查看課程。</p>
          <button
            onClick={handleTakeToLogin}
            className="btn btn-primary btn-lg"
          >
            前往登入頁面
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role === "教師" && (
        <div>
          <h1>歡迎至教師課程頁面</h1>
        </div>
      )}
      {currentUser && currentUser.user.role === "學生" && (
        <div>
          <h1>歡迎至學員課程頁面</h1>
        </div>
      )}
      {currentUser && courseData && courseData.length != 0 && (
        <div>
          <p>這是我們從服務器返回的數據。</p>
          {courseData.map((course) => (
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <p>Student Count: {course.students.length}</p>
                <button className="btn btn-primary">{course.price}</button>
                <br />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseComponent;
