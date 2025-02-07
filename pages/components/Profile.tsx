import Image from 'next/image';
import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <video autoPlay loop muted playsInline>
        <source src={`${process.env.NEXT_PUBLIC_CDN_BASE_URL}${process.env.NEXT_PUBLIC_PROFILE_BACKGROUND_OBJECT_PATH}`} type={`${process.env.NEXT_PUBLIC_PROFILE_BACKGROUND_MEDIA_TYPE}`} />브라우저가 미디어를 지원하지 않습니다.
      </video>
      
      <Image src="/profile.png" alt="Profile Image" className="profile-img" width={130} height={150}/>
      <div className="contact-info">
        <p id="name">성명: {process.env.NEXT_PUBLIC_PROFILE_NAME}</p>
        <p id="dob">생년월일: {process.env.NEXT_PUBLIC_PROFILE_BIRTHDAY}</p>
        <p id="address">주소: {process.env.NEXT_PUBLIC_PROFILE_ADDRESS}</p>
        <p id="email">이메일: {process.env.NEXT_PUBLIC_PROFILE_EMAIL}</p>
        <div className="social-links">
          <a href={process.env.NEXT_PUBLIC_PROFILE_GITHUB} target="_blank">
              <Image src="/github-logo.png" alt="github" width={150} height={48.66}/>
          </a>
          <a href={process.env.NEXT_PUBLIC_PROFILE_TECH_BLOG} target="_blank">
            <Image src="/tistory-logo.svg" alt="tistory" width={150} height={48.66}/>
          </a>
        </div>

        <div className="resume-buttons">
          <a href={`${process.env.NEXT_PUBLIC_CDN_BASE_URL}${process.env.NEXT_PUBLIC_PROFILE_RESUME_OBJECT_PATH}`} className="preview-btn">
            📄 자기소개서 열람
          </a>
          <a href={`${process.env.NEXT_PUBLIC_CDN_BASE_URL}${process.env.NEXT_PUBLIC_PROFILE_CAREER_OBJECT_PATH}`} className="preview-btn">
            🏆 경력기술서 열람
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
