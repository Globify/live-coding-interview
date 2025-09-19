import { useState } from "react";

function Button({ label, onClick }: { label: string; onClick: () => void }) {
  console.log("---button render", label);
  return (
    <button className="text-sm font-medium text-gray-700" onClick={onClick}>
      {label}
    </button>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <Button label="Subtract" onClick={() => setCount(count - 1)} />
      <span className="text-2xl font-bold text-gray-700">{count}</span>
      <Button label="Add" onClick={() => setCount(count + 1)} />
    </div>
  );
}

export default function Index() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Counter />
    </div>
  );
}
