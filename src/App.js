import React,{useState, useEffect} from 'react'
import { View } from './components/View';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state || books state || books array of objects
  const [books, setbooks]=useState(getDatafromLS());

  // input field states
  const [ad, setad]=useState('');
  const [soyad, setsoyad]=useState('');
  const [adres, setadres]=useState('');

  // form submit event
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      ad,
      soyad,
      adres
    }
    setbooks([...books,book]);
    setad('');
    setsoyad('');
    setadres('');
  }

  // delete book from LS
  const deleteBook=(adres)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.adres !== adres
    })
    setbooks(filteredBooks);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  return (
    <div className='wrapper'>
      <h1>Adres Defteri</h1>
      <p>local storage</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <label>Ad </label>
            <input type="text" className='form-control' required
            onChange={(e)=>setad(e.target.value)} value={ad}></input>




            <br></br>
            <label>Soyad  </label>
            <input type="text" className='form-control' required
            onChange={(e)=>setsoyad(e.target.value)} value={soyad}></input>
            <br></br>
            <label>Adres # </label>
            <input type="text" className='form-control' required
            onChange={(e)=>setadres(e.target.value)} value={adres}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
          
        </div>

        <div className='view-container'>
          {books.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Adres#</th>
                    <th>Ad</th>
                    <th>Soyad</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View books={books} deleteBook={deleteBook}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setbooks([])}>Remove All</button>
          </>}
          {books.length < 1 && <div>No books are added yet</div>}
        </div>

      </div>
      

  
    </div>
  )
  
}

export default App
