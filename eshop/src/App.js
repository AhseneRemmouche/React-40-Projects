import Header from './routes/header/header.component';
import Home from './routes/home/home.component';
import Checkout from './components/checkout/checkout.component';
import SignIn from './routes/sign-in/sign-in.component';
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
                    path='signIn'
                    element={<SignIn />}
                />
            </Route>
        </Routes>
    );
};

export default App;
