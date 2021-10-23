import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());
  const [val,setVal] = useState(1);
  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      <h1>useEffect Example: {time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default EffectComponent;
