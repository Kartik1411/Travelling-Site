import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// importing pages
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Signup from './components/pages/Signup'


function App() {
	return (
		<>
		<Router>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home}/>
				<Route path='/services' exact component={Services}/>
				<Route path='/products' exact component={Products}/>
				<Route path='/sign-up' exact component={Signup}/>
			</Switch>
			
		</Router>
		</>
	);
}

export default App;
