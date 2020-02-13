import React from "react";

export interface IProject {
  name: string;
  image: string;
  description: string;
  url: string;
}

const Project = (props: IProject) => {
  return (
    <>
      <div>
        <img src={props.image}></img>
        <h2>{props.name}</h2>
      </div>
      <p>{props.description}</p>
      <div>
        <span>Live Version</span>
        <p>{props.url}</p>
      </div>
    </>
  );
};

export default Project;
