import React from 'react';
import * as Components from './index';

const ModuleArea = ({ blocks }) => {
  return (
    <>
      {blocks?.length > 0 &&
        blocks.map((block, index) => {
          if (!block || !block.__typename) return null;
          const Component =
            Components[block.__typename?.replace('DatoCms', '')];
          if (!Component) return null;

          return <Component key={block.id} index={index} {...block} />;
        })}
    </>
  );
};

export default ModuleArea;
