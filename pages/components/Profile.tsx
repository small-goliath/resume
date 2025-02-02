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
        <div className="social-links">
          <a href={process.env.NEXT_PUBLIC_GITHUB} target="_blank">
              <Image src="/github-logo.png" alt="github" width={150} height={48.66}/>
          </a>
          <a href={process.env.NEXT_PUBLIC_TECH_BLOG} target="_blank">
            <Image src="/tistory-logo.svg" alt="tistory" width={150} height={48.66}/>
          </a>
        </div>

        {/* 다운로드 버튼 추가 */}
        <div className="resume-buttons">
          <a href="/api/py/download-latest/resume?object_name=resume.pdf" download="자기소개서.pdf" className="download-btn">
            📄 자기소개서 다운로드
          </a>
          <a href="/api/py/download-latest/resume?object_name=career.pdf" download="경력기술서.pdf" className="download-btn">
            🏆 경력기술서 다운로드
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
