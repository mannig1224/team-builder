import React, {useState} from 'react';
import { render } from 'react-dom';


// Building the simpleForm

const teamMemberList = [ 
  { name: 'Manny Gatica', role: 'Software Developer'},
  { name: 'Manny Gatica', role: 'Software Developer'},
  { name: 'Manny Gatica', role: 'Software Developer'}

]
const initialFormValues = {
  name: '',
  role: ''
}

function Form() {
  const [members, setMembers] = useState(teamMemberList);
  const [formValues, setFormValues ] = useState(initialFormValues);

  const change = evt => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value })
  }

  const submit = evt => {
    evt.preventDefault();
    const newMember = { 
            name: formValues.name.trim(), 
            role: formValues.role.trim()
          }
          setMembers([...members, newMember]);
          setFormValues(initialFormValues);
  }
  return (
    <>
      <h1>Team Members: </h1>
      {
        members.map((member, idx) => {
          return <div key={idx}> Name: {member.name}  Role: {member.role}</div>
        })
      }
      <form onSubmit={submit}>
        <input name='name' type='text' value={formValues.name} onChange={change}></input>
        <input name='role' type='text' value={formValues.role} onChange={change}></input>

        <button>Add Member</button>

      </form>
    </>
  )
}


function App() {
  return (
    <Form></Form>
  )
}

export default App;
