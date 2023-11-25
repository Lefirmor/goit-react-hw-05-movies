import { LineWave } from 'react-loader-spinner';
import { LoaderIcon } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderIcon>
      <LineWave
        height="150"
        width="150"
        color="black"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </LoaderIcon>
  );
};
