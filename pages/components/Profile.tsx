import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <img src="profile.png" alt="Profile Image" className="profile-img" />
      <div className="contact-info">
        <p id="name">성명: {process.env.NEXT_PUBLIC_NAME}</p>
        <p id="dob">생년월일: {process.env.NEXT_PUBLIC_BIRTHDAY}</p>
        <p id="address">주소: {process.env.NEXT_PUBLIC_ADDRESS}</p>
        <p id="email">이메일: {process.env.NEXT_PUBLIC_EMAIL}</p>
        <div>
          <a href={process.env.NEXT_PUBLIC_GITHUB} target="_blank">
              <img src="github-logo.png" alt="github" />
          </a>
          <a href={process.env.NEXT_PUBLIC_TECH_BLOG} target="_blank">
            <img src="tistory-logo.svg" alt="tistory" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
