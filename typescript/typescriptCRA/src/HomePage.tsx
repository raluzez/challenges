import React, { useEffect, useContext, Suspense, lazy } from "react";
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import { fetchAction, toggleFavAction } from "./Actions";

const EpisodeList = lazy<any>(() => import("./EpisodesList"));

const HomePage = () => {
  const { state, dispatch } = useContext(Store);
  useEffect(() => {
    state.episodes.length === 0 && fetchAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    favourites: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
  };
  return (
    <Suspense fallback={<div>loading...</div>}>
      <section className="episode-layout">
        <EpisodeList {...props} />
      </section>
    </Suspense>
  );
};

export default HomePage;
