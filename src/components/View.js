import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({books,deleteBook}) => {
    
    return books.map(book=>(
        
        <tr key={book.adres}>
            <td>{book.adres}</td>
            <td>{book.ad}</td>
            <td>{book.soyad}</td>
            <td className='delete-btn' onClick={()=>deleteBook(book.adres)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}