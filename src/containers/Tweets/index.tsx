import React from "react";
import { ITweet, Tweet } from "./component/Tweets";

const TweetsList: Array<ITweet> = [
  {
    profileImage:
      "https://pbs.twimg.com/profile_images/1012717264108318722/9lP-d2yM_400x400.jpg",
    name: "Steve Schoger",
    userName: "@Steve Schoger",
    creationDate: "Jun 27",
    tweetContent:
      "🔥 If you're tired of using outline styles for secondary buttons, asoft solid background based on the text color can be a grea alternative.",
  },
];

const Tweets = () => {
  return (
    <div>
      {TweetsList.map(
        (
          { profileImage, name, userName, creationDate, tweetContent }: ITweet,
          index: number
        ) => (
          <Tweet
            key={index}
            profileImage={profileImage}
            name={name}
            userName={userName}
            creationDate={creationDate}
            tweetContent={tweetContent}
          />
        )
      )}
    </div>
  );
};

export default Tweets;
