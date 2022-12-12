import React from "react";

import * as Ui from "./index";

const Suspense = ({ children }) => {
  return <React.Suspense fallback={<Ui.LoadingSpinner />}>{children}</React.Suspense>;
};

export default Suspense;
