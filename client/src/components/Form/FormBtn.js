import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="primary button expanded search-button">
    {props.children}
  </button>;
