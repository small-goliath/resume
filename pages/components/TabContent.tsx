import Image from "next/image";
import React, { useState } from "react";
import { AwardProp, EducationProp, InternationalProp, InternshipProp, PeerReviewProp, ResearchProp, SkillProp, VolunteerProp } from "../../dataProp";

interface TabContentProps {
  content: EducationProp[] | SkillProp[] | AwardProp[] | VolunteerProp[] | InternationalProp[] | InternshipProp[] | ResearchProp[] | PeerReviewProp[];
}

const TabContent: React.FC<TabContentProps> = ({ content }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const isPeerReview = content && typeof content === 'object' && (content as PeerReviewProp[]).every(item =>
    typeof item === "object" &&
    typeof item.image === "string"
  );
  const isEducation = content && typeof content === 'object' && (content as EducationProp[]).every(item =>
    typeof item === "object" &&
    typeof item.institution === "string" &&
    typeof item.degree === "string" &&
    typeof item.started === "string" &&
    typeof item.ended === "string"
  );
  const isInternship = content && typeof content === 'object' && (content as InternshipProp[]).every(item =>
    typeof item === "object" &&
    typeof item.where === "string" &&
    typeof item.what === "string" &&
    typeof item.skills === "object"
  );
  const isSkill = content && typeof content === 'object' && (content as SkillProp[]).every(item =>
    typeof item === "object" &&
    typeof item.title === "string" &&
    typeof item.values === "object"
  );
  const isAward = content && typeof content === 'object' && (content as AwardProp[]).every(item =>
    typeof item === "object" &&
    typeof item.title === "string" &&
    typeof item.value === "string"
  );
  const isInternational = content && typeof content === 'object' && (content as InternationalProp[]).every(item =>
    typeof item === "object" &&
    typeof item.title === "string" &&
    typeof item.description === "string"
  );
  const isVolunteer = content && typeof content === 'object' && (content as VolunteerProp[]).every(item =>
    typeof item === "object" &&
    typeof item.where === "string" &&
    typeof item.what === "string"
  );
  const isResearch = content && typeof content === 'object' && (content as ResearchProp[]).every(item =>
    typeof item === "object" &&
    typeof item.type === "string" &&
    typeof item.title === "string" &&
    typeof item.url === "string" &&
    typeof item.description === "string"
  );

  if (isEducation) {
    const contents = content as EducationProp[];
    return (
      <div>
        {contents.map((item, index) => (
          <div key={index}>
            <p className="focus">{item.institution}</p>
            <p>{item.degree}</p>
            <p>({item.started} - {item.ended})</p>
          </div>
        ))}
      </div>
    );
  } else if (isInternship) {
    const contents = content as InternshipProp[];
    return (
      <div>
        {contents.map((item, index) => (
          <div key={index}>
            <p className="focus">{item.where}</p>
            <p key={index}>{item.what}</p>
            ({item.skills.map((skill: string, skillIndex: number) => (
              <p key={skillIndex}>{skill}</p>
            ))})
          </div>
        ))}
      </div>
    );
  } else if (isSkill) {
    const contents = content as SkillProp[];

    return (
      <div>
        {contents.map((item, index) => (
          <div key={index}>
            <p className="focus">{item.title}</p>
            {item.values.map((item2: string, index2: number) => (
              <p key={index2}>{item2}</p>
            ))}
          </div>
        ))}
      </div>
    );
  } else if (isAward) {
    const contents = content as AwardProp[];

    return (
      <div>
        {contents.map((item, index) => (
          <div key={index}>
            <p className="focus">{item.value}</p>
            <p key={index}>{item.title}</p>
          </div>
        ))}
      </div>
    );
  } else if (isResearch) {
    const contents = content as ResearchProp[];
    const cdn = `${process.env.NEXT_PUBLIC_CDN_BASE_URL}`;

    return (
      <div>
        {contents.map((item, index) => {
          const originalUrl = `${cdn}${item.original}`;

          return (
            <div key={index}>
              <p className="focus">{item.type} <a className="research-href" href={originalUrl} target='_blank'>(원문 열람)</a></p>
              <a className="research-href" href={item.url} target='_blank'>{item.title}</a>
              <p className="research-desc">{item.description}</p>
            </div>
        )})}
      </div>
    );
  } else if (isInternational) {
    const contents = content as InternationalProp[];

    return (
      <div>
        {contents.map((item, index) => (
          <div key={index}>
            <p className="focus">{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  } else if (isVolunteer) {
    const contents = content as VolunteerProp[];

    return (
      <div>
        {contents.map((item, index) => (
          <div key={index}>
            <p className="focus">{item.where}</p>
            <p>{item.what}</p>
          </div>
        ))}
      </div>
    );
  } else if (isPeerReview) {
    const contents = content as PeerReviewProp[];
    const cdn = `${process.env.NEXT_PUBLIC_CDN_BASE_URL}`;
    
    return (
      <div className={`peer-review-container ${selectedImage ? "expanded" : ""}`}>
        {contents.map((item, index) => {
          const imageUrl = `${cdn}${item.image}`;
    
          return (
            <div className="peer-review-card" key={index} onClick={() => setSelectedImage(imageUrl)}>
              <Image src={imageUrl} alt={`Peer Review ${index + 1}`} width={300} height={200} className="peer-review-img" />
            </div>
          );
        })}
    
        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content">
              <Image src={selectedImage} alt="Selected Peer Review" width={800} height={600} />
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
      </div>
    );
  }
};

export default TabContent;
