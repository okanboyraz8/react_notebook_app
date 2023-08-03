//query useEffect'i sürekli tetikleyip konsolda sonsuz bir döngü oluşturdu. Bunu önlemek için: useRef
import { useEffect, useState, useRef } from "react";

import { db } from "../firebase/config";

import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore"; //orderBy ile tarihe göre sıralama işlemi

export const useCollection = (collections, _q, _ob) => {

    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    const q = useRef(_q).current;
    const ob = useRef(_ob).current;

    useEffect(() => {

        let ref = collection(db, collections);

        if(q){
            ref = query(ref, where(...q))
        }

        if(ob){
            ref = query(ref, orderBy(...ob))
        }

        const unsub = onSnapshot(ref, (snap) => {
            let array = [];

            snap.docs.forEach(doc => {
                array.push({...doc.data(), id: doc.id})
            })

            setDocuments(array)
            setError(null)
        }, (error) => {
            console.log("error.message", error.message);
            setError('Data could not be accessed...')
        })

        return () => unsub()

    }, [collections, q, ob])

    return { documents, error }

}