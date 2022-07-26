import React from "react";
import "./Event.scss";

export default function Event({ event }) {
  return (
    <div className="event-container">
      <span className="timeline-dot"></span>
      <span className="event-content">Event</span>
    </div>
  );
}
