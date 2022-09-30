import * as React from 'react';
import { MarkDown, IMarkDownContext } from '../models/markdown-context.model';

export const MarkDownContext = React.createContext<IMarkDownContext | null>(null);

interface Props {
  children: React.ReactNode;
}

const MarkDownContextProvider: React.FC<Props> = ({ children }) => {
  const [markDown, setMarkDown] = React.useState<MarkDown>({
    textContent: ''
  });

  const updateMarkDownContext = (textContent: string) => {
    setMarkDown({ ...markDown, textContent });
  };

  return (
    <MarkDownContext.Provider value={{ markDown, updateMarkDownContext }}>
      {children}
    </MarkDownContext.Provider>
  );
};

export default MarkDownContextProvider;
