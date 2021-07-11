import { useContext } from 'react';
//import { useForm } from 'react-hook-form';
import { AppContext } from "../components/appStateProvider";
import "../styles/login.css";
import NoteList from './notelist';

const userNotes = [];

const SetNotes = () => {

    const context = useContext(AppContext);
    const user = context.state.userId;

    console.log(user);
    

    for (let i = 1; i < localStorage.length; i++) {
        let userkey = localStorage.key(i);
        console.log(userkey);
        if (userkey === user) {
            const saveNote = localStorage.getItem(user);
            const noteObject = JSON.parse(saveNote);
            userNotes.push(noteObject)
            //console.log(saveNote);
            //console.log(noteObject);
        }


    }

    //console.log(userNotes);
    // Calling dispatch to set note for rendering !!!!!Guess there is an infinite loop here.
    // context.dispatch({
    // type:"SET_NOTE",
    // payload: userNotes,
    // })

    return (
        <div className="noteDiv">
            <h3>My Personal Notes</h3>
            <ul>
                {context.state.notes.map(function (noteItem) {
                    return (
                        <NoteList
                            key={noteItem.noteID}
                            usernote={noteItem}
                        />
                    );
                })}
            </ul>
        </div>
    );

}
export default SetNotes;