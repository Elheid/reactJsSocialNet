import { createContext, ReactNode, useContext, useState } from "react";


interface ClickerContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const ClickerContext = createContext<ClickerContextType | null>(null);

const ClickerContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
      <ClickerContext.Provider value={{ count, setCount }}>
          {children}
      </ClickerContext.Provider>
  );
};


const useClicker = () => {
  const context = useContext(ClickerContext);
  if (!context) {
      throw new Error('useClickerContext must be used within a ClickerProvider');
  }
  return context;
};



export {ClickerContextProvider, ClickerContext, useClicker};