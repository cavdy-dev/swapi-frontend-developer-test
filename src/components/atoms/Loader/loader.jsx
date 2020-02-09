import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

const Loader = ({ loading }) => (
  <div className="loading">
    <PropagateLoader size={30} color={'#494957'} loading={loading} />
  </div>
);

export default Loader;
