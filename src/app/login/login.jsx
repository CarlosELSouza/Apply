import React from "react";
import './login.css'

function login(){
    return <div className="main-login">
        <div className="left-login">
            <h1>Faça Login</h1>
            <img src="./images/logo.svg" className="image" alt="" />
        </div>
        <div className="right-login">
            <div className="card-login">
                <h1>LOGIN</h1>
                <div className="textfield">
                    <label htmlFor="usuario">Usuário</label>
                    <input type="text" name="usuario" placeholder="Usuário" />
                </div>
                <div className="textfield">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" placeholder="Senha"/>
                </div>
                <button className="btn-login">Login</button>
            </div>
        </div>
    </div>
}

export default login