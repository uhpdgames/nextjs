import React, { useEffect, useState } from "react";
import Post from "./Post";

const RightHandSide = () => {
  const [posts, setPosts] = useState([]);
  const [isShow, setIsShow] = useState(false);
 

  useEffect(() => {
    setTimeout(() => {
      if (posts) {
        setIsShow(true);
      } else return;
    }, 3000);
  }, [posts]);

  return (
    <div className="right mt-4">
      {isShow ? (
        <>
          {posts.map((post) => (
            <Post
              key={post.id}
              caption={post.data().caption}
              company={post.data().company}
              video={post.data().image}
              profileImage={post.data().profileImage}
              topic={post.data().topic}
              timestamp={post.data().timestamp}
              username={post.data().username}
              userId={post.data().userId}
              songName={post.data().songName}
              id={post.id}
            />
          ))}
        </>
      ) : (
        <Post />
      )}
    </div>
  );
};

export default RightHandSide;