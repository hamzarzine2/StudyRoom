import { useState,useContext } from 'react'
import { ContextUser } from '../contexts/UserContext';
import Form from '../components/Forms/form'
import Button from '../components/Buttons/button';

function Home() {
  const {user} = useContext(ContextUser)

  const eventLog = () =>{
    console.log(user);
  }
  return (
    <>
    <div>
      <p>{user}</p>
        <Form />
        <Button value="Join a room" event={eventLog} />

    </div>
    </>
  )
}

export default Home
