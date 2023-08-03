import React, { useState, useEffect } from 'react'

//"documentAdd" çalıştırmak gerekiyor, bu açıdan "useFirestore" ihtiyaç var.
import { useFirestore } from '../hooks/useFirestore'

export default function NoteForm({uid}) {

    const [header, setHeader] = useState('')
    const [description, setDescription] = useState('')

    //documentAdd & response from useFirestore
    const { documentAdd, response } = useFirestore('Notes') 

    const handleSubmit = async (e) => {

        e.preventDefault();

        const note = {header, description}
        //console.log("note", note);

        documentAdd({
          uid, header, description
        })
    }

    useEffect(() => {
      if(response.success){
        setHeader('')
        setDescription('')
      }
    }, [response.success])

  return (
    <>
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add A New Note!</h3>

        <label>Note's Header:</label>
        <input type="text" onChange={(e) => setHeader(e.target.value)} value={header} />

        <label>Note's Description:</label>
        <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />

        <button>Add Note</button>        
    </form>
    </>
  )
}
