import React from "react";

interface TabContentProps {
  content: any[];
}

const TabContent: React.FC<TabContentProps> = ({ content }) => {
  const isEducation = content && typeof content === 'object' && content.every(item =>
    typeof item === "object" &&
    typeof item.institution === "string" &&
    typeof item.degree === "string" &&
    typeof item.started === "string" &&
    typeof item.ended === "string"
  );
  const isInternship = content && typeof content === 'object' && content.every(item =>
    typeof item === "object" &&
    typeof item.where === "string" &&
    typeof item.what === "string" &&
    typeof item.skills === "string"
  );
  const isSkill = content && typeof content === 'object' && content.every(item =>
    typeof item === "object" &&
    typeof item.title === "string" &&
    typeof item.values === "object"
  );
  const isAward = content && typeof content === 'object' && content.every(item =>
    typeof item === "object" &&
    typeof item.title === "string" &&
    typeof item.value === "string"
  );
  const isInternational = content && typeof content === 'object' && content.every(item =>
    typeof item === "object" &&
    typeof item.title === "string" &&
    typeof item.description === "string"
  );
  const isVolunteer = content && typeof content === 'object' && content.every(item =>
    typeof item === "object" &&
    typeof item.where === "string" &&
    typeof item.what === "string"
  );

  if (isEducation) {
    return (
<ul>
  {content.map((item, index) => (
    <li key={index}>
      <strong>{item.institution}</strong>: {item.degree} ({item.started} - {item.ended})
    </li>
  ))}
</ul>

    );
  } else if (isInternship) {
    return (
      <div>
        {content.map((item, index) => (
          <div>
            <p key={index}>{item.where}</p>
            <p key={index}>{item.what}</p>
            <p key={index}>{item.skills}</p>
          </div>
        ))}
      </div>
    );
  } else if (isSkill) {
    
    return (
      <div>
        {content.map((item, index) => (
          <div>
            <p key={index}>{item.title}</p>
            {item.values.map((item2: string, index2: number) => (
              <p key={index2}>{item2}</p>
            ))}
          </div>
        ))}
      </div>
    );
  } else if (isAward) {
    return (
      <div>
        {content.map((item, index) => (
          <div>
            <p key={index}>{item.title}: {item.value}</p>
          </div>
        ))}
      </div>
    );
  } else if (isInternational) {
    return (
      <div>
        {content.map((item, index) => (
          <div>
            <p key={index}>{item.title}</p>
            <p key={index}>{item.description}</p>
          </div>
        ))}
      </div>
    );
  } else if (isVolunteer) {
    return (
      <div>
        {content.map((item, index) => (
          <div>
            <p key={index}>{item.where}</p>
            <p key={index}>{item.what}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    );
  }
};

export default TabContent;
