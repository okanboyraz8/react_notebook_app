import React from 'react'
import { useFirestore } from '../hooks/useFirestore'

//Tarihi Formatlama İşlemi
import moment from 'moment'
import 'moment/locale/tr'

export default function NoteDetail({note}) {

  const { documentDelete } = useFirestore("Notes") //documentDelete artık elimizde bir fonksiyon olarak yer alıcak!

  return (
    <div className='note-detail'>
        <h4>{note.header}</h4>
        <p>{note.description}</p>
        <p className='time'>{moment(new Date(note.date.toDate())).format('L')}</p>
        <span onClick={() => documentDelete(note.id)} className="material-symbols-outlined">delete_forever</span>
    </div>
  )
}
