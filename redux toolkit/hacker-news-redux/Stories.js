import React, { useEffect } from "react";

const Stories = () => {
  const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";
  const hits = [];

  useEffect(() => {}, []);

  /* if (isLoading) {
    return <div className="loading"></div>;
  } */

  return (
    <section className="stories">
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span> {num_comments}{" "}
              comments
            </p>
            <div>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer">
                read more
              </a>
              <button className="remove-btn">remove</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
