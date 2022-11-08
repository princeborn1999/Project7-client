import React from "react";
import { useNavigate } from "react-router-dom";
export default function CourseComponent(props) {
  let { currentUser, setCurrentUser } = props;
  const navigate = useNavigate();
  const handleTakeToLogin = () => {
    navigate("/login");
  };
  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>You must login before seeing your courses.</p>
          <button
            onClick={handleTakeToLogin}
            className="btn btn-primary btn-lg"
          >
            Take me to login page
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role === "instructor" && (
        <div>
          <h1>Welcome to instructor's Course page.</h1>
        </div>
      )}
      {currentUser && currentUser.user.role === "student" && (
        <div>
          <h1>Welcome to student's Course page.</h1>
        </div>
      )}
    </div>
  );
}
