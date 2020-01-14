import React from 'react';
import { string } from 'prop-types';

const Loading = ({ title }) => (
  <p
    className="title-loading"
  >
    {title}
  </p>
);

Loading.propTypes = {
  title: string,
};

Loading.defaultProps = {
  title: 'Loading...',
};

export default Loading;
