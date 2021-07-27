import { it } from '@jest/globals';
import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer';
import Header from '../Header';

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Footer></Footer>, div)
})