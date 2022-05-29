import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="125" cy="125" r="125" />
    <rect x="0" y="298" rx="10" ry="10" width="280" height="26" />
    <rect x="0" y="336" rx="10" ry="10" width="274" height="65" />
    <rect x="4" y="427" rx="10" ry="10" width="95" height="30" />
    <rect x="124" y="415" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
);

export { Skeleton };
