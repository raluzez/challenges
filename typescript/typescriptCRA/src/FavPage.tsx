import React, { useContext, lazy, Suspense } from "react";
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import { toggleFavAction } from "./Actions";

const EpisodeList = lazy<any>(() => import("./EpisodesList"));

const FavPage = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    favourites: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
  };

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </Suspense>
  );
};

export default FavPage;
