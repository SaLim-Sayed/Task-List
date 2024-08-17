import { Button } from "@nextui-org/react";
import React, { useState, useMemo, useCallback, useEffect } from "react";
import Title from "../../components/Global/Title";
import Center from "../../components/Global/Center";

interface Item {
  id: number;
  value: string;
}

const ItemList: React.FC<{ items: Item[] }> = React.memo(({ items }) => {
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount((prevCount) => prevCount + 1);
  }, [items]);

  return (
    <div>
      <p>Render Count: {renderCount}</p>
      <ol>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ol>
    </div>
  );
});

const OptimizedComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const items = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      value: `Item ${i}`,
    }));
  }, []);

  const increment = useCallback(() => setCount(count + 1), [count]);

  return (
    <Center>
      <Title title="Optimized Component" />
      <Button onClick={increment}>Increment Count: {count}</Button>
      <ItemList items={items} />
    </Center>
  );
};

export default OptimizedComponent;
