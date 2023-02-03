import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import Companygroup from './Companygroup'
import { useState } from 'react'
import Groupcompany from './Groupcompany'
export const View = ({books,deleteBook}) => {
    
    // const [grup, setgrup]=useState('');
    // setgrup(books.sirket+books.grup);

    return books.map(book=>(
        
        <tr key={book.adres} >
            <td>{book.adres}</td>
            <td>{book.ad}</td>
            <td>{book.soyad}</td>
            <td class="col"><Companygroup sirket={book.sirket} grup={book.grup} /></td> 
            <td ><Groupcompany group={book.grup}/></td>
            <td className='delete-btn' onClick={()=>deleteBook(book.adres)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}