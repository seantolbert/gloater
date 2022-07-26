import React from "react";
import Event from "./Event";

import './EventList.scss'

const events = [
  { name: "stuff" },
  { name: "stuff" },
  { name: "stuff" },
  { name: "stuff" },
  { name: "stuff" },
  { name: "stuff" },
  { name: "stuff" },
  { name: "stuff" },
  { name: "stuff" },
];

export default function EventList() {
  return (
    <div className="eventList-container">
      {events.map((event) => (
        <Event event={event} />
      ))}
    </div>
  );
}
