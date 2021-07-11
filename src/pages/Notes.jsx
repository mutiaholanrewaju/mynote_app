// import { useContext } from "react";
// import { AppContext } from "../components/appStateProvider";
// // import { useState } from "react";
// import Card from "../components/card";

// export default function Notes() {
//     const context = useContext(AppContext);

//     return (
//         <div className="notes-container">
//         {context.state.notes.map((item) => (
//             <Card key={item.id} item={item} />
//         ))}
//         </div>
//     );
// };





import { Link } from 'react-router-dom';
// import "../Styles/Pages.css";

const Notes = ({ notelist }) => {

    return (
        <div className='course'>
            <Link to={`/notes/${notelist.noteID}`} target="_blank" rel="noreferrer">
                <h2 className='course-title'>{notelist.CourseTitle}</h2></Link>
            <p className='course-details'>{notelist.CourseDetails}</p><br />
            
        </div>
    );



}

export default Notes;