import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Views
import Home from '../src/views/Home';
import TallOneEight from '../src/views/tallOneEight';
import TallOneSix from '../src/views/tallOneSix';
import tallOneFour from '../src/views/tallOneFour';
import TallOneThree from '../src/views/tallOneThree';

// Components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

// Style
import './App.css';

function App() {
    return (
        <>
            <div className='App'>
                <BrowserRouter>
                    <NavBar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/tall-one-eight' component={TallOneEight} />
                        <Route exact path='/tall-one-six' component={TallOneSix} />
                        <Route exact path='/tall-one-four' component={tallOneFour} />
                        <Route exact path='/tall-one-three' component={TallOneThree} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
