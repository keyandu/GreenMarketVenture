import './App.css';
import Navigation from './Components/Navigation';
import About from './Components/About';
import Footer from './Components/Footer';
import Services from './Components/Services';
import { Link } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<About />
			<Services />
			<Footer />
		</div>
	);
}

export default App;
