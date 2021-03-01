import React from "react";

function CategoryBadge(props) {
  return (
    <div
      className={`inline-block p-1 px-3 text-xs font-semibold  rounded-full 
      ${props.category == "Beginner" ? "text-green-500 bg-green-50" : ""} 
      ${props.category == "Intermediate" ? "text-yellow-500 bg-yellow-50" : ""} 
      ${props.category == "Advanced" ? "text-red-500 bg-red-50" : ""}
      `}
    >
      {props.category}
    </div>
  );
}

export default CategoryBadge;
