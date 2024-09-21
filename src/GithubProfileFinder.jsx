import { useState } from 'react'
import './index.css'
import { useEffect } from 'react';
import User from './User';


export default function GithubProfileFinder(){

  const [userName, setUserName] = useState('mojombo');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false)

  async function fetchUserData(name){

    setLoading(true)
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    
    
    if(data){
      setUserData(data);
      setLoading(false);
      setUserName('')
    }

    if (loading) {
      return <h1>Loading data, please wait...</h1>
    }
    
  }


  function handleSubmit(){
    fetchUserData();
    
  }

  useEffect(()=> {
    fetchUserData()
  }, []);

  // console.log(userName);
  

  return (
    <div className='profile-container'>
      <form className="wrapper">
        <input type="text" name='searchUser' placeholder='Search github user...' value={userName}
        onChange={(event)=> setUserName(event.target.value)}
        />
        <button onClick={()=> handleSubmit()}>Search</button>
      </form>

      {
        userData !== null ? <User user={userData}/>
        : null
      }
    </div>
  )
}