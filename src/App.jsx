import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import StateProvider from "./components/appStateProvider";
import Home from "./pages/Home";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Navbar from "./components/navbar";
// import Notes from "./pages/Notes";
import Coursenote from "./pages/Coursenote"
import UserNotes from "./pages/UserNotes";

function App() {
	return (
		<StateProvider>
			<Router>
				<Navbar />
				<Switch>
					

					<Route path="/" exact component={Home}></Route>
					{/*render Home Component when we click /home */}
					<Route exact path="/home" component={Home}></Route>
					{/*render Register Component when we click /register */}

					<Route exact path='/register'><Register /></Route>
					{/*render Login Component when we click /login */}
					<Route exact path="/login" component={Login}></Route>
					{/*render notes Component when we click /notes */}
					<Route exact path="/notes" component={Coursenote}></Route>

					{/* render UserPost Component when we hit /userpost */}
					<Route exact path='/notes/:noteid'>
						<Coursenote />
						<Route exact path='/mynotes'><UserNotes /></Route>
					</Route>
				</Switch>
			</Router>
		</StateProvider>
	);
}

export default App;
