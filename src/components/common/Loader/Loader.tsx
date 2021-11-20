import React from 'react';
import './Loader.scss';

export const Loader: React.FC<ILoader> = ({
  className,
  isLoadMore,
  colorLoader,
  height,
  width,
}) => {
  return (
    <div
      className={`loader loader-wrapper ${isLoadMore ? 'loader-wrapper__more' : ''} ${
        className ? className : ''
      }`}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
