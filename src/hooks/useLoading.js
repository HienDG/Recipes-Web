import { useState, useEffect } from "react";
import { ONE_THOUSAND_MILLISECOND } from "../components/utils";

const useLoading = (dependence, sec = 1) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeout = function () {
      setIsLoading(true);
      return new Promise(function (res, _) {
        setTimeout(function () {
          res();
        }, sec * ONE_THOUSAND_MILLISECOND);
      });
    };

    timeout().finally(() => {
      setIsLoading(false);
    });
  }, [dependence]);

  return isLoading;
};

export default useLoading;
