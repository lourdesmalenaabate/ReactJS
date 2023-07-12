import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatsFetch } from "../features/cats/catsSlice";
import CatCart from "./CatCart";
import Loader from "./Loader";
import Message from "./Message";

const CatsContainer = () => {
  const { cats, isLoading, err } = useSelector((store) => store.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>
        Images of differente species of cats. Lots of cats for your viewing
        pleasure
      </p>
      {isLoading && <Loader />}
      {err && <Message msg={err.statusText} bgColor="red" />}
      <br />
      {cats && cats.map((cat) => <CatCart key={cat.id} {...cat} />)}
    </div>
  );
};

export default CatsContainer;
