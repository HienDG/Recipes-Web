import { useState, useEffect } from "react";
import { ONE_THOUSAND_MILLISECOND } from "../components/utils";

const useLoading = (sec = 1, reset, reset1) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timeout = function () {
      return new Promise(function (res, _) {
        setTimeout(function () {
          res();
        }, sec * ONE_THOUSAND_MILLISECOND);
      });
    };

    timeout().finally(() => {
      setIsLoading(false);
    });
  }, [reset, reset1]);

  return isLoading;
};

export default useLoading;
