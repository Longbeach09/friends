import { useEffect, useState } from "react";
import axios from "axios";



export default function App() {
  

  const [friends, setFriends] = useState([])
  const [picture, setPicture] = useState('')
  const [name, setName] = useState('')


  async function getSavedFriends( ) {
    axios.get('/api/friends')
    .then((res) => {
      setFriends(res.data)
    })
  }

     useEffect(() => getSavedFriends, [])

  const addFriends =( ) => {
    const newFriend = [...friends] 
    newFriend.push ({ picture: picture, name: name})
    setFriends (newFriend)
    setName('')
    setPicture('')
  }
const friendInfo = friends.map((friend) => {
  return(
  <div key = {friend.name}>
  <img src={friend.picture} alt= {friend.name} />
  <span>{friend.name}</span>
  </div>)
})
  return<div>
    <label htmlFor ="imgUrl">picture</label>
    <input type= "text" id = "picture" value = {picture} onChange={(e)  => setPicture(e.target.value)}/>
    <label htmlFor="Nameinput">Name</label>
    <input id="NameInput" type="text" value = {name} onChange={(e) => setName(e.target.value)}/>
    <button id = "Add Friend" onClick={addFriends}>Add friend here</button>
    {friendInfo}

  </div>;
  
}
