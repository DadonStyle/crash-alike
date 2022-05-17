import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ThreeDotLoaderMoving = (props) => (
  <div
    className="rpcl-ellipsis"
    style={{
      '--rpcl-ellipsis-color': props.color || 'black',
    }}
  >
    <div />
    <div />
    <div />
    <div />
  </div>
);

ThreeDotLoaderMoving.propTypes = {
  color: PropTypes.string,
};

export default ThreeDotLoaderMoving;
