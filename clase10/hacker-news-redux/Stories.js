import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadingAction,
  removeStoryAction,
  setStoriesAction,
} from "./actions/newsActions";

const Stories = () => {
  const { hits, isLoading, query, page } = useSelector((store) => store.news);
  const dispatch = useDispatch();
  const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

  useEffect(() => {
    const fetchStories = async (url) => {
      dispatch(loadingAction(true));
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch(setStoriesAction({ hits: data.hits, nbPages: data.nbPages }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchStories(`${API_ENDPOINT}query=${query}&page=${page}`);
  }, [query, page, dispatch]);

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
                onClick={() => dispatch(removeStoryAction(objectID))}>
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
