import React from "react";
import Divider from "../components/Divider";
import EventList from "../components/EventList";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <div className="home-hero">Gloatinator</div>
      <div className="timeline">
        <EventList />
      </div>
    </>
  );
}
