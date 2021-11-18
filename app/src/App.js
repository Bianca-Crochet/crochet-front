import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/views/Home';

import './App.css';
// import NavBar from './components/NavBar/NavBar';

function App() {
    return (
        <>
            <div className='App'>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
