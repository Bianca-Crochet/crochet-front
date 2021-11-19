import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Views
import Home from '../src/views/Home';
import TallOneEight from '../src/views/tallOneEight';

// Components
import NavBar from './components/NavBar/NavBar';

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
                        <Route exact path='/jerseys' component={TallOneEight} />
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
