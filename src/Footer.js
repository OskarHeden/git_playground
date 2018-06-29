import React from "react";
export default ({ onClick, title }) => (
  <div
    className="FooterWrapper"
    style={{
      flex: true,
      alignItems: "center"
    }}
  >
    <div
      className="FooterTitleWrapper"
      onClick={onClick}
      style={{
        color: "#FFF",
        backgroundColor: "#C33",
        width: 150,
        margin: "auto"
      }}
    >
      <p>{title}</p>
    </div>
    <div>
      <p>
        Such interesting footer text this is. It is almost like it would have
        some trandescent meaning upon my life which I cannot quite explain
        without loosing my mind in the process.
      </p>
    </div>
  </div>
);
