import './App.css';
import Header from "./Header";
import AddContact from "./AddContact"
import {useState,useEffect} from "react"
import ContactList from './ContactList';
function App() {
  const [contacts,setContacts]=useState([]);

  useEffect(()=>{
    const retrievedContacts=JSON.parse(localStorage.getItem("contacts"));
    if(retrievedContacts)
      setContacts(retrievedContacts);
  },[]);

  useEffect(()=>{
    localStorage.setItem("contacts",JSON.stringify(contacts));
  },[contacts]);
  
  const addContactHandler=(details)=>{
    console.log("parent got it")
    setContacts([...contacts,details]);
    // console.log(contacts); 
  }
  return (
    <div className="App">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
