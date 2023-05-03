import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const result = useSelector(state => state.result);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (num1 && num2) {
      const sum = Number(num1) + Number(num2);
      dispatch({ type: 'ADD', payload: sum });
    } else {
      alert('Введите оба числа');
    }
  };

  const handleSubtract = () => {
    if (num1 && num2) {
      const difference = Number(num1) - Number(num2);
      dispatch({ type: 'SUBTRACT', payload: difference });
    } else {
      alert('Введите оба числа');
    }
  };

  const handleMultiply = () => {
    if (num1 && num2) {
      const product = Number(num1) * Number(num2);
      dispatch({ type: 'MULTIPLY', payload: product });
    } else {
      alert('Введите оба числа');
    }
  };

  const handleDivide = () => {
    if (num1 && num2) {
      const quotient = Number(num1) / Number(num2);
      dispatch({ type: 'DIVIDE', payload: quotient });
    } else {
      alert('Введите оба числа');
    }
  };

  return (
    <div>
      <input type="number" value={num1} onChange={e => setNum1(e.target.value)} />
      <input type="number" value={num2} onChange={e => setNum2(e.target.value)} />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleMultiply}>*</button>
      <button onClick={handleDivide}>/</button>
      <p>Результат: {result}</p>
    </div>
  );
}

export default Calculator;
