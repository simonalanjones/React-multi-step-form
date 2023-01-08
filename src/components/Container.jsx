import React from 'react';
import AbstractFormElement from './forms/elements/abstractFormElement';

const Container = ({ element, index }) => {
  //
  const SingleColumn = ({ item }, key) => {
    return (
      <div className="w-full pb-6" key={key}>
        <AbstractFormElement item={item} />
      </div>
    );
  };
  //
  const MultiColumn = ({ items }) => {
    return (
      <div className="gap-6 md:flex" key={index}>
        {items.map((item, index) => (
          <SingleColumn item={item} key={index} />
        ))}
      </div>
    );
  };

  if (Array.isArray(element)) {
    return element.length === 1 ? (
      <SingleColumn item={element[0]} key="1" />
    ) : (
      <MultiColumn items={element} />
    );
  } else {
    return <SingleColumn item={element} key="1" />;
  }
};

export const MemoizedContainer = React.memo(Container);
