import { ScaleLoader as Spinner } from 'react-spinners';

export const ScaleLoader = () => {
  return (
    <div className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
      <Spinner color="#1570EF" />
    </div>
  );
};
