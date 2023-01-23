import React,{useState,useEffect} from 'react'
import Display from '../display/display';


const Input=()=> {
    const [todo,setTodo]=useState('');
    const [list,setList]=useState([]);
    const [id,setId]=useState(1);

    // useEffect(()=>{
    //     setList([{id:0,name:"hello",checked:true}])
    // },[])

    const addTodo=()=>{
        const willAdd={
            id:id,
            name:todo,
            checked:false
        }
        setList(oldArray => [...oldArray, willAdd]);
        setTodo('');
        setId(id+1);
    }

   const ifChecked=(id)=>{
    const newArray = list.map((el) => {
        
        if (el.id === id) {
            return el.checked?{ ...el, checked: false }:{ ...el, checked: true };
        } 
          return el;
        
      });
      setList(newArray);
   }
  return (
    <>
        <form>
            <input placeholder='todo...' value={todo} onChange={(e)=> setTodo(e.target.value)} />
            <button onClick={(e)=>{e.preventDefault();addTodo();}}>Add</button>
        </form>
        <Display list={list} ifChecked={ifChecked} />
    </>
  )
}

export default Input
