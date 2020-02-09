import React from 'react';
import RotateLoader from 'react-spinners/RotateLoader';

const Circular = ({ loading }) => (
  <div className="circular">
    <RotateLoader size={30} color={'#494957'} loading={loading} />
  </div>
);

export default Circular;
