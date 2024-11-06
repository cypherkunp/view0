import { type ReactNode } from 'react';

type RenderIfProps = {
  condition: boolean;
  children: ReactNode;
};

export const RenderIf = ({ condition, children }: RenderIfProps) => {
  return condition ? <>{children}</> : null;
};
