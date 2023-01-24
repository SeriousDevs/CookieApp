import { ProgressBar } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#fce671"
      />
    </LoaderWrapper>
  );
};
