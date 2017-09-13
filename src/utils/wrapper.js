import React from 'react';

export const withJS = WrappedComponent => ({immutables, ...wrappedComponentProps}) => {
  const propsJS = immutables.toJS();

  return <WrappedComponent {...propsJS} {...wrappedComponentProps} />
}
