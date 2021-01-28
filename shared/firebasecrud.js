import { db } from '../firebase';

export const addFav=(item) => {
    let addFavData = db.ref('/favourite').push({
        favItem:item
    })
    return addFavData;
}

export const fetchFav=()=> {
    let favitems = []; 
    db.ref('/favourite').on('value',querySnapshot => {
        querySnapshot.forEach((childSnapshot) => {
            favitems.push(childSnapshot.val())
        })
       
    })
    return favitems;
}

export const removeFav=(id)=>{
    return db.ref('/favourite').child(id).set(null)
}