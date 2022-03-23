import React from "react";

const Description = ({ data }) => {
  return <p dangerouslySetInnerHTML={{ __html: data }} />;
};

export default Description;
