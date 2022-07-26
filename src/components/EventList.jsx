import React from "react";
import Event from "./Event";

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
    <div>
      {events.map((event) => (
        <Event event={event} />
      ))}
    </div>
  );
}
