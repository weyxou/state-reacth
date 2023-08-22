import Comment from './components/Comment';  
import Counter from './components/Counter' 
import Rick from './components/Rick' 
import React, {useState} from 'react' 
 
const App = () => { 

    const [users, setUsers] =useState([])
    const[user, setuser]=useState({
        name:'',
        desc:''
    })
    const addFormHandler=()=>{
        setUsers([...users, user])  
        setuser({
            name:'',
            desc:''
        })
        console.log(user);
    }
    const changeInput=(key,event) =>{
setuser({...user, [key]:event.target.value})
    }
 
    return ( 
       <>
       <div style={{width:300}}>
        <input type="text" value={user.name} onChange={(e) => changeInput('name',e)}  />
        <textarea name="" id="" cols="30" value={user.desc} rows="10" onChange={(e)=> changeInput('desc',e)}>
        </textarea>
        <button onClick={addFormHandler}> create User</button>
       </div>
       <div>
        <ul>
        {users.map((item,index) =>(
            <li key={index}>{item.name}</li>
        ))}
        </ul>
       </div>
       </>
  ) 
} 
 
export default App