import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './app/login/login';

export default function App() {
    return <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login/>} exact/>
    </Routes>
    </BrowserRouter> 

}
