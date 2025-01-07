import React from "react";
import Sidebar from "../components/Sidebar";
import { useContext } from "react";
import { VideoContext } from "../context/videoContext";
import Loader from "../components/Loader";
import Card from "../components/Card";
import Error from "../components/Error";

const Feed = () => {
  const { videos, error, isLoading } = useContext(VideoContext);

  return (
    <div className="flex ">
      <Sidebar />

      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          videos?.map(
            (item) =>
              item.type === "video" && <Card video={item} key={item.videoId} />
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
