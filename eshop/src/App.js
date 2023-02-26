import Header from './routes/header/header.component';
import Home from './routes/home/home.component';
import Checkout from './components/checkout/checkout.component';
import Authentication from './routes/authentication/authentication.component';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Header />}>
                <Route
                    index
                    element={<Home />}
                />
                <Route
                    path='checkout'
                    element={<Checkout />}
                />
                <Route
                    path='Auth'
                    element={<Authentication />}
                />
            </Route>
        </Routes>
    );
};

export default App;
