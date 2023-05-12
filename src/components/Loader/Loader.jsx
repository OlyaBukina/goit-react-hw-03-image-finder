import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{ margin: '0 auto' }}
      wrapperClass="blocks-wrapper"
      colors={['#2d559a', '#2d559a', '#2d559a', '#2d559a', '#2d559a']}
    />
  );
};
