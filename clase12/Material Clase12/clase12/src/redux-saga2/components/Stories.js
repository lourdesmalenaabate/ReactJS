import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews, removeStory } from "../features/news/newsSlice";

const Stories = () => {
  const { hits, isLoading, query, page } = useSelector((store) => store.news);
  const dispatch = useDispatch();
  const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

  useEffect(() => {
    dispatch(getNews(`${API_ENDPOINT}query=${query}&page=${page}`));
  }, [dispatch, query, page]);

  if (isLoading) {
    return <div className="loading"></div>;
  }

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
              <button
                className="remove-btn"
                onClick={() => dispatch(removeStory(objectID))}>
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
