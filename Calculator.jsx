import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  const calculate = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
      setResult('Invalid input');
      return;
    }

    switch (operator) {
      case '+':
        setResult(parsedNum1 + parsedNum2);
        break;
      case '-':
        setResult(parsedNum1 - parsedNum2);
        break;
      case '*':
        setResult(parsedNum1 * parsedNum2);
        break;
      case '/':
        setResult(parsedNum1 / parsedNum2);
        break;
      default:
        setResult('Invalid operator');
    }
  };

  return (
    <div>
      <h2>Simple Calculator</h2>
      <label>
        Number 1:
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      </label>

      <label>
        Operator:
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </label>

      <label>
        Number 2:
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      </label>

      <button onClick={calculate}>Calculate</button>

      <h3>Result:</h3>
      <div>{result}</div>
    </div>
  );
};

export default Calculator;
