import * as React from 'react';


import Axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/gridbox.css'




export default function Manage_book() {

    
    const [booklist,setbooklist] = useState([]);
    var B_ID = "";

    const getBooklist = () =>{
        Axios.get('http://localhost:3001/Requst_book').then((Response) => {
            setbooklist(Response.data);
        });
    }
    getBooklist();

    const Post_select_book = () =>{
        Axios.post('http://localhost:3001/Post_select_book',{
            B_ID : B_ID
        })
    }

    

    

    

    

  return (
    <div className='grid-Box'>
        {booklist.map((val, key) =>{
            return (

                 <div className="grid-Box">
                     <div className='grid-item'>
                        <center><img src="../bg.png" className='imgbox' /></center>
                         <div className='content' herf>
                            <br/>
                             <p>Book ID:{val.Book_ID}</p>
                             <p>{val.Book_Name}</p>
                             <p>{val.Book_Type}&nbsp;&nbsp;{val.Book_Price}$</p>
                         </div>
                          <Link to={'/Edit_book/'+val.Book_ID} >
                            
                            <button className="button-28" >Edit Book</button>
                            </Link>  
                            <button className="button-29" href='#'>Edit</button>

                     </div>
                 </div>
                // <img src="../bg.png"/>
            )
        })}
    </div>
  );
}