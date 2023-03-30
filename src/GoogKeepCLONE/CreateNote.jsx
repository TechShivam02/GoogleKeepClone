import React , {useState} from "react";

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";



const CreateNote = (props) => {


    const [expand , setExpand] = useState(false);


    const ExpandIt =() => {
        setExpand(true);
    }


    const ExpandOff =() =>{
        setExpand(false);
    }






 const [note, setNote] = useState({

                title : "",
                content:"",

        });

        
        const InputEvent =(event) => {
          

            const name = event.target.name;
            const value = event.target.value;




            setNote( (event) => {

                return {
                    ...event,
                    [name] : value,
                }

            });





            console.log(note);

            
            
        };






        const addEvent =() => {
           
            props.passNote(note);

            setNote({
                title : "",      
                content:""      

            });

    };





        return(

                <>

            
                    <div className="main_note" >  



                            <form>
                                
 
{
    expand ?  
        <input type = "text"   placeholder="Title"    name="title"   onChange={InputEvent}  value={note.title}   autoComplete="off"/>
    :  null

}




<textarea     placeholder="Write a Note...."      
              name="content"   onChange={InputEvent} 
              value={note.content}   
              onClick={ExpandIt} 
              onDoubleClick = {ExpandOff}
              
/>





{
    expand ?  
                                <Button className="btn"   onClick={addEvent}>  
                                    <AddIcon className ="plus-sign" />
                                </Button>
           : null
}




                                
                            </form>


                    </div>

                </>
        );
}

export default CreateNote;

