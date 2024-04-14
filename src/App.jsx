import { useState, useCallback } from "react";
import Child from "./Child";
import "./App.css";

function App() {
  const [parentAge, setParentAge] = useState(0);

  const incrementPerentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("👪부모 컴포넌트가 렌더링이 되었어요.");

  const tellMe = useCallback(() => {
    console.log("길동아 사랑해 💕");
  }, []);

  return (
    <div style={{ border: "1px solid navy", padding: "10px" }}>
      <h1>👪부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementPerentAge}>부모 나이 증가</button>
      <Child name={"홍길동"} tellMe={tellMe} />
    </div>
  );
}

export default App;
