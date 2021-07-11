import "../styles/login.css";



const NoteList = ({ usernote }) => {

    return (

        <li key={usernote.id} >
            <span className='noteDate'>{usernote.DateCreated}</span>
            <p className='note'>{usernote.note}</p>

        </li>


    );



}
export default NoteList;