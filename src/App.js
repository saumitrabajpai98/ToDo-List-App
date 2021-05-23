import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoListcomp';
const App=()=>{
  const[taskOp,setTask]=useState("");
  const[data,storeData]=useState([]); //Array of tasks and by [] we are initializing data by an empty array

  const taskInp=(event)=>{
    setTask(event.target.value);
  }

  const showData=()=>{
    storeData((prevData)=>{
      //prevData.push(taskOp);
      //console.log([...prevData,taskOp]);
      //return prevData;
      return[...prevData,taskOp];
    });
    setTask(" ");
  };

  const deleteItem=(id)=>{
    storeData((pData)=>{
      return pData.filter((arrayElem,index)=>{
        return index!==id;
      });
    });
};

  return(
    <>
    <div className='mainDiv'>
      <div className='centerDiv'>
      <br/>
        <h1>ToDo List App</h1>
        <br/>
       <input type='text' placeholder='Enter the Task' value={taskOp} onChange={taskInp}></input>
       <button onClick={showData}> + </button> 
       <ol>
        { 
          data.map((itemVal,index)=>{
            return <TodoList teext={itemVal}
                    id={index}
                    key={index}
                    onSelect={deleteItem}/>;
        })
        }
       </ol>
      </div>
    </div>
    </>
  );
};
 export default App;