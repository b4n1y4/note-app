import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

import { BsPlusLg } from "react-icons/bs";

const Home = () => {
  const { notes } = useGlobalContext();
  return (
    <section className="section-center">
      <div className="section-header">
        <h1 className="section-title">Noted</h1>
        <div className="theme-toggle">
          <div className="circle" id="btn"></div>
        </div>
      </div>
      <section className="notes-container">
        {notes.map(({ id, title, text }) => {
          return (
            <article to={`/note/${id}`} className="note" key={id}>
              <h2 className="note-title">{title}</h2>
              <p className="note-text">{`${text.slice(0, 75)}...`}</p>
              <Link to={`/note/${id}`} className="view-note">
                View
              </Link>
            </article>
          );
        })}
      </section>
      <div className="new-btn">
        <BsPlusLg className="plus-icon" />
      </div>
    </section>
  );
};

export default Home;
