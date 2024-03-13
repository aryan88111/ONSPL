import React, { useState } from 'react'
import'./TodoLIst.css'
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate} from "react-router-dom"
import AddList from './AddList';
import TodoLength from './TodoLength';

const TodoList = () => {
  // let len=data.length

  
  let navigate=useNavigate()

    const [input,SetInput]=useState()
    const [data,SetData]=useState([])

    const fun2=()=>{
        SetData([...data,input])
        SetInput('')
    }

    const fun1=(e)=>{
        SetInput(e.target.value)
    }

    let edit=(id)=>{
      navigate(`/edit/${id}`)

  }
    const delet=(id)=>{
      let newdata= data.filter((value,index)=>{
        return index!==id
       })
       SetData(newdata)
       SetInput('')
    }
  return (
    <div className='container'>
<h1 className='heading'>TODO LIST</h1>
<input  type="text" placeholder='Enter task name...'  onChange={fun1}/>
<button onClick={fun2}>Add</button>
{/* <AddList res={data}/> */}


<ul>
  {
    data.map((value,index)=>{
       return(
        <>
         <li>{value} <span><ClearIcon onClick={()=>{delet(index)}}/>
         {/* <EditIcon onClick={()=>{edit(index)}}/> */}
         </span> 
         </li>
         
         </>
       )
    })
  }

</ul>
<TodoLength res={data}/>
    </div>
  )
}

export default TodoList
