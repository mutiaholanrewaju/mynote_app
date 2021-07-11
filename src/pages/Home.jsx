import { Link } from "react-router-dom"
import noteImage from "../images/note.png";
import Footer from "../components/footer";

export default function Home() {
    return (
        <>
        <header>
            <div className="home-header-content">

                <h1>Women Techsters Fellowship 2021 SOFTWARE DEVELOPMENT TRACK (SWD)</h1>
                <img src={noteImage}
                    alt="note pic" />
                <p>
                    At the&nbsp;
                    <strong>
                        SWD
                    </strong>
                    &nbsp; alot was learnt during those short period and you can access the notes at the NOTE section.
                </p>
                <Link to="/Register">
                    <button className="btn btn-lg btn-outline-info text-white mb-4">
                        Click here to start
                    </button>
                </Link>
                
            </div>
        </header>
            <Footer>{Footer}</Footer>
       
        </>
    )
}