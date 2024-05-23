import React from "react";
import { store } from "../../store/store";
import { Provider } from "react-redux";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
};

export default Wrapper;
