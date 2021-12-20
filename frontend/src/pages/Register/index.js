import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'
import LogoImg from '../../assets/logo@2x.png'

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
               <section>
                    <img src={LogoImg} alt="Logo" />   
                    <h1>Cadastro</h1>
                    <p>Faça o seu cadastro!</p>
                    <Link className="back-link" to="/register">
                        <FiArrowLeft size={16} color = "#e02031"/>    
                        Nao tenho registro
                    </Link>
                </section> 
                <form>
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="Telefone" />

                    <div className="input-group">
                    <input placeholder="Cidade" />
                    <input placeholder="UF" style={{ width: 80 }} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
        )
}