import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Views
import Home from '../src/views/Home';
import Jerseys from '../src/views/Jerseys';

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
                        <Route exact path='/jerseys' component={Jerseys} />
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
