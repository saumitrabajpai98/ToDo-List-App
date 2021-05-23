import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
const TodoListcomp=(props)=>{
    return(
        <>
        <div className='todoStyle'>
        <CancelIcon className="crossIcon" onClick={()=>{
            props.onSelect(props.id);
        }}/>
        <li>{props.teext}</li>
        </div>
        </>
    );
}
export default TodoListcomp;
//with only props.onSelect thing wont work becuase we don't know which which item is being clicked so for that we have used
//callback func on onClick
//->properies also work as a function