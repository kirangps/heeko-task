import React from "react";

const CreateShape = ({ allShapes, shape, setHover }) => {
  return (
    <>
      {allShapes.map((ele, index) => (
        <div
          key={index}
          style={{
            height: Number(ele.height),
            width: Number(ele.width),
            position: "absolute",
            top: Number(ele.ypos),
            left: Number(ele.xpos),
            backgroundColor: "blueviolet",
            opacity: "0.5"
          }}
          onMouseOver={() => setHover(ele)}
        />
      ))}
    </>
  );
};

export default CreateShape;