import React from "react";
import './login.css'

function login(){
    return <div className="main-login">
        <div className="right-login">
            <div className="card-login">
                <h1>APPLY</h1>
                <div className="textfield">
                    {/* <i className="fa-solid fa-user icon-login"></i> */}
                    <input type="text" name="usuario" placeholder="Usuário" />
                </div>
                <div className="textfield">
                    <input type="password" name="senha" placeholder="Senha"/>
                </div>
                <button className="btn-login">Login</button>
            </div>
        </div>
    </div>
}

export default login