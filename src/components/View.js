import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import Companygroup from './Companygroup'
import { useState } from 'react'
export const View = ({books,deleteBook}) => {
    
    // const [grup, setgrup]=useState('');
    // setgrup(books.sirket+books.grup);

    return books.map(book=>(
        
        <tr key={book.adres}>
            <td>{book.adres}</td>
            <td>{book.ad}</td>
            <td>{book.soyad}</td>
            <td> <Companygroup sirket={book.sirket}></Companygroup></td>
            <td> <Companygroup  grup={book.grup}></Companygroup></td>
            <td className='delete-btn' onClick={()=>deleteBook(book.indexx)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}