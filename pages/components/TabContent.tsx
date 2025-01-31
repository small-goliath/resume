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
    typeof item.skills === "object"
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

  console.log(content)
  console.log("isEducation: " + isEducation)
  console.log("isInternship: " + isInternship)
  console.log("isSkill: " + isSkill)
  console.log("isAward: " + isAward)
  console.log("isInternational: " + isInternational)
  console.log("isVolunteer: " + isVolunteer)

  if (isEducation) {
    return (
      <div>
        {content.map((item, index) => (
          <div>
            <p className="focus">{item.institution}</p>
            <p>{item.degree}</p>
            <p>({item.started} - {item.ended})</p>
          </div>
        ))}
      </div>
    );
  } else if (isInternship) {
    return (
      <div>
        {content.map((item, index) => (
          <div>
            <p className="focus" key={index}>{item.where}</p>
            <p key={index}>{item.what}</p>
            ({item.skills.map((skill: string, skillIndex: string) => (
              <p key={skillIndex}>{skill}</p>
            ))})
          </div>
        ))}
      </div>
    );
  } else if (isSkill) {
    return (
      <div>
        {content.map((item, index) => (
          <div>
            <p className="focus" key={index}>{item.title}</p>
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
            <p className="focus" key={index}>{item.value}</p>
            <p key={index}>{item.title}</p>
          </div>
        ))}
      </div>
    );
  } else if (isInternational) {
    return (
      <div>
        {content.map((item, index) => (
          <div>
            <p className="focus" key={index}>{item.title}</p>
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
            <p className="focus" key={index}>{item.where}</p>
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
