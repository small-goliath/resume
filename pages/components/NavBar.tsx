// src/components/NavBar.tsx
import React from 'react';

interface NavBarProps {
  onTabClick: (tab: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onTabClick }) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#" id="education-tab" onClick={() => onTabClick("education")}>
            교육사항
          </a>
        </li>
        <li>
          <a href="#" id="skills-tab" onClick={() => onTabClick("skills")}>
            핵심역량
          </a>
        </li>
        <li>
          <a href="#" id="award-tab" onClick={() => onTabClick("award")}>
            수상
          </a>
        </li>
        <li>
          <a href="#" id="volunteer-tab" onClick={() => onTabClick("volunteer")}>
            봉사활동
          </a>
        </li>
        <li>
          <a href="#" id="international-tab" onClick={() => onTabClick("international")}>
            대/외활동
          </a>
        </li>
        <li>
          <a href="#" id="internship-tab" onClick={() => onTabClick("internship")}>
            인턴십
          </a>
        </li>
        <li>
          <a href="#" id="research-tab" onClick={() => onTabClick("research")}>
            연구활동
          </a>
        </li>
        <li>
          <a href="#" id="peer-review-tab" onClick={() => onTabClick("peer-review")}>
            동료평가
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
