import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import { ShoppingItem } from "../types";

type ShoppingContextType = {
  items: ShoppingItem[];
  addItem: (
    item: Omit<ShoppingItem, "completed">
  ) => void;
  toggleItem: (id: string) => void;
  removeItem: (id: string) => void;
};

const ShoppingContext =
  createContext<ShoppingContextType | undefined>(
    undefined
  );

export function ShoppingProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<ShoppingItem[]>([]);

  const addItem = (
    item: Omit<ShoppingItem, "completed">
  ) => {
    setItems((current) => {
      const existing = current.find(
        (x) => x.productId === item.productId
      );

      if (existing) {
        return current.map((x) =>
          x.productId === item.productId
            ? {
                ...x,
                quantity: x.quantity + item.quantity,
              }
            : x
        );
      }

      return [
        ...current,
        {
          ...item,
          completed: false,
        },
      ];
    });
  };

  const toggleItem = (id: string) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  return (
    <ShoppingContext.Provider
      value={{
        items,
        addItem,
        toggleItem,
        removeItem,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}

export function useShopping() {
  const context = useContext(ShoppingContext);

  if (!context) {
    throw new Error(
      "useShopping ShoppingProvider içinde kullanılmalı."
    );
  }

  return context;
}
