import React from 'react';
import {Header} from "./components";
import {Home, Cart} from './pages';
import {Route} from 'react-router-dom';
import axios from "axios";
import {useDispatch} from "react-redux";
import {setPizzas} from './redux/actions/pizzas'

function App() {
    const dispatch = useDispatch();
    React.useEffect(() => {

        // fetch('http://localhost:3000/db.json')
        //     .then((resp) => resp.json())
        //     .then(json => {
        //         setPizzas(json.pizzas)
        //     })
        axios.get('http://localhost:3001/pizzas').then(({data}) => {
            dispatch(setPizzas(data));
        });
    }, []);
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" component={Home} exact/>
                <Route path="/cart" component={Cart} exact/>
            </div>
        </div>
    );
}

export default App;