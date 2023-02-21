import { seriousNumbers } from "common/ConvertFunc/convertFunc";
import { useEffect, useState } from "react";
import { ClickedComponent } from "./ClickEffect.styled";

export const ClickEffect = ({ obj, value }) => {
 
  const [unmountMe, setUnmountMe] = useState(true);

 useEffect(() => {
    const timeoutId = setTimeout(() => {
      setUnmountMe(false);
    }, 1000);
    return () => clearTimeout(timeoutId);
 }, []);
  
  return (
    <>
      {unmountMe && (
        <ClickedComponent
          onmousedown="return false"
          onselectstart="return false"
          {...obj}
        >
          +{seriousNumbers(value)}
        </ClickedComponent>
      )}
    </>
  );
};
