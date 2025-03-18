import React from "react";

interface Props {
  params: {
    userID: number;
    photoID: number;
  };
}

const page = ({ params: {userID,photoID} }: Props) => {
  return <div>
    <h1>Users/{userID}/photos/{photoID}</h1>
    <p>userID: {userID}</p>
    <p>photoID: {photoID}</p>
  </div>;
};

export default page;
