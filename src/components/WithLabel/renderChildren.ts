/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, cloneElement, isValidElement, JSXElementConstructor, ReactNode } from 'react';

const formElements: Array<string | JSXElementConstructor<any>> = ['input', 'select', 'textarea'];

export const renderChildren = (children: ReactNode, props: Record<string, unknown>): ReactNode =>
  Children.map(children, (child) => {
    if (isValidElement(child)) {
      if (formElements.includes(child.type)) {
        return cloneElement(child, {
          ...props,
          ...child.props,
        });
      }

      if (child.props?.children) {
        return cloneElement(child, {
          children: renderChildren(child.props.children, props),
        } as any);
      }
    }

    return child;
  });
