import React, { useState } from "react";

import './index.css';

import Header  from "./Header.jsx";
import Footer  from "./Footer.jsx";
import CreateNote from "./CreateNote.jsx";
import Note from "./Note.jsx";


 const App =() => {

    const [addItem , setAddItem] = useState([]);

    const addNote = (note) => {

            setAddItem( (event) => {

                return [...event , note];
            
            });
            
            console.log(note);

            // alert(`My Name is : ` + note.title  +  `  Last name is : ` + note.content );
    
    };

    
    const onDelete = (id) => {        // props.id passses   in function  that is Note
            setAddItem( (oldData) =>    

                oldData.filter( (currData , indx) => {
                        return indx != id;
                }) 
            );
        }; 





     return(

            <>

                
                
            <Header/>



                  <CreateNote  passNote = {addNote} />




                  {/* <Note/> */}

 
                {
                        addItem.map( (val , index) => {
                                return ( 
                                    
                                    <Note   
                                             key = {index} 
                                             id = {index}
                                             title = {val.title} 
                                             content = {val.content} 

                                             deleteItem = {onDelete}

                                    />

                                  );

                        })
                }




            <Footer/>


        </>

     );
 }


export default App;

