import Notes from "./Notes";
import "../styles/pages.css";


const CoureseNotes = () => {


    const courseNotes = [
        {
            id: "1",
            CourseTitle: "Introduction to GIT and GITHUB",
            CourseDetails: "We were introduced to the git and github and the difference between them. Git is a source control management system on our local storage while Github is a source control management on the cloud. We were taught the steps to configure git on our local machine",
            
        },
        {
            id: "2",
            CourseTitle: "Introduction to HTML",
            CourseDetails: "It was made known that HTML is Hypertext Mark up Language and it is just a bit more than microsoft word document. It is not a programming language but can just mark up text",
            
        },

        {
            id: "3",
            CourseTitle: "Introduction to CSS",
            CourseDetails: "The meaning of CSS is Cascading Style Sheet and it is just lika a makeup artist that can make people fall in love with your site",
            },

        {
            id: "4",
            CourseTitle: "Introduction to JAVASCRIPT",
            CourseDetails: "JavaScript offers a programming language for Web pages that most anyone can use. JavaScript is becoming a standard for Web page programming. This means you're more assured that your work will not soon disappear. There are thousands of Web sites that use JavaScript today. JavaScript makes your Web pages come alive by responding to things a user does on your pages. JavaScript is ideal for Form Validation. Sometimes you may want your users to enter a specific type of data (e.g. a phone number) into a form field. If it’  important that this data conform to a certain format, you can use JavaScript to  validate the data on the user’s machine before it is forwarded to the server. JavaScript can open and close new browser windows and you can control the appearance of the new windows you create. You can control their size, their location, and the toolbars they have available.",
            PdfResource: "https://cglab.ca/~morin/teaching/2405/notes/javascript1.pdf",
            OnlineResource: "https://www.w3schools.com/js/DEFAULT.asp",
            YouTubeResource: "https://www.youtube.com/watch?v=eIrMbAQSU34"
        },
        {
            id: "5",
            CourseTitle: "Introduction to REACT",
            CourseDetails: "ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library responsible only for the view layer of the application. It was created by Jordan Walke, who was a software engineer at Facebook. It was initially developed and maintained by Facebook and was later used in its products like WhatsApp & Instagram. Facebook developed ReactJS in 2011 in its newsfeed section, but it was released to the public in the month of May 2013.Today, most of the websites are built using MVC (model view controller) architecture. In MVC architecture, React is the 'V' which stands for view, whereas the architecture is provided by the Redux or Flux. A ReactJS application is made up of multiple components, each component responsible for outputting a small, reusable piece of HTML code. The components are the heart of all React applications. These Components can be nested with other components to allow complex applications to be built of simple building blocks. ReactJS uses virtual DOM based mechanism to fill data in HTML DOM. The virtual DOM works fast as it only changes individual DOM elements instead of reloading complete DOM every time.",
            PdfResource: "http://www.cs.unc.edu/~stotts/ISIS/comp523/react-slides.pdf",
            OnlineResource: "https://reactjs.org/",
            YouTubeResource: "https://www.youtube.com/watch?v=w7ejDZ8SWv8"
        },

        {
            id: "6",
            CourseTitle: "REACT HOOKS",
            CourseDetails: "React Hooks let you use state, and other React features without having to define a JavaScript class. It’s like being able to take advantage of the cleanliness and simplicity of a Pure Component and state and component lifecycle methods. This is because Hooks are just regular JavaScript functions! This lends itself to cleaner and less clunky code. Another great thing about hooks is that you can create your own! This means that a lot of the stateful logic we used to have to re-write from component to component, we can now abstract out to a custom hook — and reuse it",
            PdfResource: "https://descoem.edu.ng/wp-content/uploads/2020/09/Beginning-React-with-Hooks-by-Lim-Greg-z-lib.org_.pdf",
            OnlineResource: "https://www.freecodecamp.org/news/lets-get-hooked-a-quick-introduction-to-react-hooks-9e8bc3fbaeac/",
            YouTubeResource: "https://www.youtube.com/watch?v=TNhaISOUy6Q"
        },

    ]




    return (

        <div className='grid-4-div'>

            {courseNotes.map(function (note) {
                return (
                    <Notes
                        key={note.id}
                        notelist={note}
                    />
                );
            })}

        </div>
    );

};

export default CoureseNotes;