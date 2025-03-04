// write the book component code here
import React from 'react'

const BookCard=({book})=>{
  return(
    <div>
      <img src={book.image}/>
      <h2><b>name:</b> {book.name}</h2>
      <p><b>genre:</b> {book.genre}</p> 
      <p><b>author:</b> {book.author}</p>

    </div>
  )
}
export default BookCard;

