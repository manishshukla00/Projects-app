import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  
  const handleButtonClick = (value) => {
    setInput(input + value);
  };
  
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };
  
  const handleClear = () => {
    setInput('');
  };

  return (
    <>
    <div className="absolute w-[100%] h-full flex flex-col justify-start items-center z-10">
    <h1 className='text-4xl mb-8 text-orange-400 text-center border-y-8 border-blue-800 my-[8rem] p-4'>Simple Calculator</h1>
      <input
        type="text"
        className="w-[14rem] border border-blue-800 text-4xl bg-transparent text-white mb-4 p-2"
        value={input}
        readOnly
      />
      <div className="grid grid-cols-4 gap-2">
        <button
          className="col-span-2 bg-blue-400  p-4 text-white"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className="bg-orange-400 p-4 text-blue-800 text-white"
          onClick={() => handleButtonClick('0')}
        >0</button>
        <button
         className="bg-orange-400 p-4 text-blue-800 text-white" onClick={() => handleButtonClick('*')}
        >
          *
        </button>
        <button
          className="bg-orange-400 p-4 text-blue-800 text-white"
          onClick={() => handleButtonClick('1')}
        >1</button>
        <button
          className="bg-orange-400 p-4 text-blue-800 text-white"
          onClick={() => handleButtonClick('2')}
        >2</button>
         <button
          className="bg-orange-400 p-4 text-blue-800 text-white"
          onClick={() => handleButtonClick('3')}
        >3</button>
        <button
          className="bg-orange-400 p-4 text-blue-800 text-white"
          onClick={() => handleButtonClick('/')}
        >/</button>
        <button
          className="bg-orange-400 p-4 text-blue-800 text-white"
          onClick={() => handleButtonClick('4')}
        >4</button>
        <button
          className="bg-orange-400 p-4 text-blue-800 text-white"
          onClick={() => handleButtonClick('5')}
        >5</button>
        <button
          className="bg-orange-400 p-4 text-blue-800 text-white"
          onClick={() => handleButtonClick('6')}
        >6</button>
        <button
          className="bg-orange-400 p-4 text-blue-800 text-white"
          onClick={() => handleButtonClick('+')}
        >+</button>
        <button
          className="bg-orange-400 p-4 text-blue-800 text-white"
          onClick={() => handleButtonClick('7')}
        >7</button>
        <button
          className="bg-orange-400 p-4 text-blue-800 text-white"
          onClick={() => handleButtonClick('8')}
        >8</button>
          <button
          className="bg-orange-400 p-4 text-blue-800 text-white"
          onClick={() => handleButtonClick('9')}
        >9</button>
        <button
          className="bg-orange-400 p-4 text-blue-800 text-white"
          onClick={() => handleButtonClick('-')}
        >-</button>
        {/* Add more number and operator buttons */}
        {/* ... */}
        <button
          className="col-span-4 bg-blue-800 p-4 text-white"
          onClick={handleCalculate}
        >
          =
        </button>
      </div>
    </div>
    </>
  );
};

export default Calculator;