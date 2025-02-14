import { createContext, ReactNode, useContext, useState } from "react";
import Message from "../classes/message";


interface ListContextType {
    items: Message[];
    setItems: React.Dispatch<React.SetStateAction<Message[]>>;
}

// Initialize context with default value
const ListContext = createContext<ListContextType| undefined>(undefined);

export const ListPostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<Message[]>([]);

    return (
        <ListContext.Provider value={{ items, setItems }}>
            {children}
        </ListContext.Provider>
    );
};

export const usePostList = (): ListContextType => {
    const context = useContext(ListContext);
    if (!context) {
        throw new Error('usePostList must be used within a ListPostProvider');
    }
    return context;
};