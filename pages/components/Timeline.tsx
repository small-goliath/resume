import { TimelineProp } from "@/dataProp";
import React from "react";

interface TimelineComponentProps {
  timeline: TimelineProp[];
}

const Timeline = ({ timeline }: TimelineComponentProps) => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {
          timeline.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">{item.started}</div>
              <div className="timeline-content">
                <h3>{item.where}</h3>
                <p>{item.what}</p>
                {/* <p>{item.skills}</p> */}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Timeline;