import React from 'react'
import NoteForm from '../components/NoteForm'
import NoteDetail from '../components/NoteDetail';

//Kullanıcı Bilgisini çekip, daha sonra props olarak "NoteForm"a gönderip
//Belgeleri kimin eklediğini ayarlayacağız...
import { useAuthContext } from '../hooks/useAuthContext'
//useCollection: Documents ile verilere erişmek ve herhangi bir problem olmaması durumunda çalışabilmesi...
import { useCollection } from '../hooks/useCollection'
 

export default function Home() {

  const {user} = useAuthContext();

  const {documents, error} = useCollection('Notes', ["uid", "==", user.uid], ["date", "desc"])
  //console.log(documents);
  //"date" olarak sadece verirsek tarihe göre sıralar ve eski gönderi hep en başta yer alır. O yüzden "desc" ekledik!
  //Ayrıca, hem where hem de orderBy işlemi olduğundan dolayı "index" işlemini yapmak zorundayız, aksi halde
  //verilere erişim olmaz, olmayacaktır. Çözüm: Firebase => Cloud Firestore => Indexes 

  return (
    <div className='home'>
      <NoteForm uid={user.uid} />
      <hr/>
      <div className='notes'>
        {error && <div className='error'>{error}</div>}
        {documents && documents.map((doc) => (
          <NoteDetail note={doc} key={doc.id} />
        ))}
      </div>
    </div>
  )
}
