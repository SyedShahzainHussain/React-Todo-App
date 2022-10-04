import './App.css';
import  img from "../src/images/todo.img.png"
import  img1 from "../src/images/trash.png"
import  img2 from "../src/images/edit.png"
import "./index.css"
import { useState } from 'react';

const App = ()=>{


  const [data , setData] = useState("")
  const [item ,setItem] = useState([])
  const [editId, setId ] = useState(null)
  const [toggle ,setToggle] = useState(true)


  const addItem = ()=>{
    if(!data){
      alert("you cannot add without value")
    }else if(data && !toggle){
      setItem(item.map((curr)=>{
        if (curr.id === editId){
          return {...curr , name:data}
        }
        return curr
      })
      
      )

      setData("")
      setId(null)
      setToggle(true)
    }
    else{
      const allInput = {id:new Date().getTime().toString() , name:data}
      setItem([...item,allInput])
      setData("")

    }
  }
  
  const edit = (id)=>{
    let newEdit = item.find((curr)=>{
        return curr.id === id
    })
    setData(newEdit.name)
    setId(id)
    setToggle(false)
  }


  const remove =(id)=>{
    const upgrade =  item.filter((curr)=>{
      return id !== curr.id
    })
    setItem(upgrade)
  }



const deleteItem=()=>{
  setItem([])
  setData("")
}





  return(<>
    <div className={"contanier"}>
    <div className={"todo"}>

        <figure>

        <img className={"img"} src={img} alt={img} />
        <figcaption>Add Your List </figcaption>
        </figure>

        <div className={"input"}>
      <input type="text" placeholder={"✍️ Enter The Value"} value={data}
       onChange={(e)=>{setData(e.target.value)}}   />


       {
        toggle? <span className={"plus"} onClick={addItem} title={"Add Todo"}>➕</span> 
: <span><img  className={" active"} src={img2} onClick={addItem}   /></span>
       }
      
      
 
 
        </div>
      {
        item.map((curr)=>{
          return  ( 

        <div className={"todo-list"} key={curr.id}>
         <div className={"h3"}>

        <h3>{curr.name}</h3> 
       
        </div>
        <div className='icon'>
        <img  className={"img1 active"} src={img2} onClick={()=>edit(curr.id)} />
        <img  className={"img1"} src={img1} onClick={()=>remove(curr.id)} />
          </div>
          
        </div>)
        })
      }
        <div className={"btn"}>
        <input className={"btn2"} type="button" value="Delete All" onClick={deleteItem} />
        </div>
    </div>
    </div>
  </>)
}

export  default App




