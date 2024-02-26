import React from "react";
const Pogination = ({ changePage, page, value }) => {
  return (
    <div className="pogin">
      <button className="custom-btn btn-9" onClick={() => changePage("minus")}>
        Prev
      </button>
      <span className="count">{value}</span>
      <button className="custom-btn btn-9" onClick={() => changePage("plus")}>
        Next
      </button>
    </div>
  );
};

export default Pogination;
