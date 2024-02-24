import React from "react";

type TextProps = {
  children: React.ReactNode;
};
const Text = ({ children }: TextProps) => {
  return <p>{children}</p>;
};

export default Text;
