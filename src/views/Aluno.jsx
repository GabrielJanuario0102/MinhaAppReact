import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Aluno = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, []);

  useEffect(() => {
    let countLocalStorage = parseInt(
      localStorage.getItem('count') == null ? 0 : localStorage.getItem('count'),
    );
    setCount(countLocalStorage);
  }, []);

  const countHandleClick = () => {
    setCount((prevCount) => prevCount + 1);
    localStorage.setItem('count', String(count));
  };

  return (
    <div>
      <div>
      <Button onClick={countHandleClick}>Click {count} times</Button>
    </div>
    </div>
  ) 
}

export default Aluno
