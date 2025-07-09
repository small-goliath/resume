import Image from "next/image";
import React, { useState } from "react";
import { AwardProp, EducationProp, InternationalProp, InternshipProp, PeerReviewProp, ResearchProp, SkillProp, VolunteerProp } from "../../dataProp";

interface TabContentProps {
  content: EducationProp[] | SkillProp[] | AwardProp[] | VolunteerProp[] | InternationalProp[] | InternshipProp[] | ResearchProp[] | PeerReviewProp[];
}

const TabContent = ({ content }: TabContentProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const isPeerReview = (content: any[]): content is PeerReviewProp[] => content?.every(item => typeof item.image === "string");
  const isEducation = (content: any[]): content is EducationProp[] => content?.every(item => item.institution && item.degree);
  const isInternship = (content: any[]): content is InternshipProp[] => content?.every(item => item.where && item.what && Array.isArray(item.skills));
  const isSkill = (content: any[]): content is SkillProp[] => content?.every(item => item.title && Array.isArray(item.values));
  const isAward = (content: any[]): content is AwardProp[] => content?.every(item => item.title && item.value);
  const isInternational = (content: any[]): content is InternationalProp[] => content?.every(item => item.title && item.description);
  const isVolunteer = (content: any[]): content is VolunteerProp[] => content?.every(item => item.where && item.what);
  const isResearch = (content: any[]): content is ResearchProp[] => content?.every(item => item.type && item.title);

  if (isEducation(content)) {
    return (
      <div>
        {content.map((item, index) => (
          <div key={index}>
            <p className="focus">{item.institution}</p>
            <p>{item.degree}</p>
            <p>({item.started} - {item.ended})</p>
          </div>
        ))}
      </div>
    );
  } else if (isInternship(content)) {
    return (
      <div>
        {content.map((item, index) => (
          <div key={index}>
            <p className="focus">{item.where}</p>
            <p>{item.what}</p>
            ({item.skills.map((skill: string, skillIndex: number) => (
              <p key={skillIndex}>{skill}</p>
            ))})
          </div>
        ))}
      </div>
    );
  } else if (isSkill(content)) {
    return (
      <div>
        {content.map((item, index) => (
          <div key={index}>
            <p className="focus">{item.title}</p>
            {item.values.map((item2: string, index2: number) => (
              <p key={index2}>{item2}</p>
            ))}
          </div>
        ))}
      </div>
    );
  } else if (isAward(content)) {
    return (
      <div>
        {content.map((item, index) => (
          <div key={index}>
            <p className="focus">{item.value}</p>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    );
  } else if (isResearch(content)) {
    const cdn = `${process.env.NEXT_PUBLIC_CDN_BASE_URL}`;
    return (
      <div>
        {content.map((item, index) => {
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
  } else if (isInternational(content)) {
    return (
      <div>
        {content.map((item, index) => (
          <div key={index}>
            <p className="focus">{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  } else if (isVolunteer(content)) {
    return (
      <div>
        {content.map((item, index) => (
          <div key={index}>
            <p className="focus">{item.where}</p>
            <p>{item.what}</p>
          </div>
        ))}
      </div>
    );
  } else if (isPeerReview(content)) {
    const cdn = `${process.env.NEXT_PUBLIC_CDN_BASE_URL}`;
    return (
      <div className={`peer-review-container ${selectedImage ? "expanded" : ""}`}>
        {content.map((item, index) => {
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
    return <div></div>;
  }
};

export default TabContent;