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
            학력사항
          </a>
        </li>
        <li>
          <a href="#" id="skills-tab" onClick={() => onTabClick("skills")}>
            핵심역량
          </a>
        </li>
        <li>
          <a href="#" id="other-tab" onClick={() => onTabClick("other")}>
            기타사항
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
