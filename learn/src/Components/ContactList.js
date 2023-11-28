import React from 'react'

const ContactList = (props) => {
    console.log(props);
  return (
    <div>
        {
            props.contacts.map((item)=>
            <div>
            <ul>
                <li>{item.name}</li>
                <li>{item.email}</li>
            </ul>
            <button>-</button>   
            </div>
            )
        }
    </div>
  )
}

export default ContactList