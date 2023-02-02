import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './contenedor/ItemListContainer.jsx';
import './components/NavBar/NavBar.css'
import './contenedor/ItemListContainer.css';
import ItemDetailContainer from './contenedor/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {CartContextProvider} from './context/CartContext'
import CartContainer from './contenedor/CartContainer/CartContainer'
import { initFirestoreApp } from './firestore/config';


initFirestoreApp()

ReactDOM.createRoot(document.getElementById('root')).render(

<>
    <BrowserRouter>
    <CartContextProvider>
        <NavBar /> 
        <Routes>
        <Route path='/' element={ <ItemListContainer greeting={'JUGUETONES'} /> } />
        <Route path='/category/:id' element={ <ItemListContainer greeting={'JUGUETONES'}  /> } />
        <Route path='/detail/:productId' element={<ItemDetailContainer /> } />
        <Route path='/cart' element={<CartContainer /> } />       
        <Route path='*' element={<Navigate to='/' />}/>
        
        </Routes>
       
        </CartContextProvider>
    </BrowserRouter>   
</>    
    
)
