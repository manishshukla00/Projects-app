import React, { useState } from 'react'
import PageBackground from './PageBackground';

const TodoApp = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

const addItem = () => {
  if (!inputData) {
    alert ('Enter todo ....');
  } else {
   setInputData('');
   setItems([...items, inputData]);
  }
}
const deleteItem = (i) => {
      const updatedItem = items.filter((elem, id) => {
      return ( i !== id);
      });

      setItems(updatedItem);
      console.log(items);
}

const deleteAll = () => {
  setItems([]);
}
// w-[100%] h-full flex flex-col justify-center items-center mt-[6rem] -z-20

  return (
    <>
    <div className='absolute w-[100%] h-screen flex flex-col justify-start items-center z-10'>
      <h1 className='text-4xl mb-8 text-orange-400 border-y-8 border-blue-800 my-[8rem] p-4'>ToDo App</h1>
        <input className='border border-blue-800 text-2xl bg-transparent text-white p-4' type="text" placeholder='Add Items ....' value={inputData} onChange={(e) => setInputData(e.target.value)} />
        <button className='text-2xl bg-orange-400 text-white border border-blue-800 m-4 p-2 rounded-[50%]' onClick={addItem}>+</button>
        {items.map((item, i) => {
           return (
           <div key={i}>
          <br/>
           <h3>{item}</h3>
          <br/>
          <button className='p-2 rounded-full' onClick={() => deleteItem(i)}>Delete</button>
           </div>)
        })}
        <br/><br/>
        <button className='text-2xl text-white p-2 border rounded-[50%]' onClick={deleteAll}>Delete All</button>  
    </div>
    </>
  )
}

export default TodoApp
