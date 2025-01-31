import Image from 'next/image';
import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <Image src="/profile.png" alt="Profile Image" className="profile-img" width={130} height={150}/>
      <div className="contact-info">
        <p id="name">성명: {process.env.NEXT_PUBLIC_NAME}</p>
        <p id="dob">생년월일: {process.env.NEXT_PUBLIC_BIRTHDAY}</p>
        <p id="address">주소: {process.env.NEXT_PUBLIC_ADDRESS}</p>
        <p id="email">이메일: {process.env.NEXT_PUBLIC_EMAIL}</p>
        <div>
          <a href={process.env.NEXT_PUBLIC_GITHUB} target="_blank">
              <Image src="/github-logo.png" alt="github"  width={150} height={48.66}/>
          </a>
          <a href={process.env.NEXT_PUBLIC_TECH_BLOG} target="_blank">
            <Image src="/tistory-logo.svg" alt="tistory"  width={150} height={48.66}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
