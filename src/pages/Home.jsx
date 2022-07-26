import React from "react";
import Divider from "../components/Divider";
import EventList from "../components/EventList";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <div className="home-hero">
        <span className="hero-content">Gloatinator</span>
      </div>
      <div className="timeline">
        <EventList />
      </div>
    </>
  );
}
