import React, { useState } from "react";
import { FiLogIn } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'

import api from '../../services/api'

import logoImg from '../../assets/logo@2x.png'
import humanitarianImg from '../../assets/humanitarian-help-animate.svg'

export default function Logon() {
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function handleLogin(e) {
        e.preventDefault()

        try {
            const response = await api.post('sessions', { id })

            //Stores data to be used in other pages
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            navigate('/profile')
        } catch (err) {
            alert('Falha no login, tente novamente.')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="be the hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    {/* <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)} /> */}
                    <input 
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <input 
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color = "#e02031"/>    
                        Nao tenho registro
                    </Link>
                </form>
            </section>
            <div>
                
                <img src={humanitarianImg} alt="humanitarian" />
            </div>
        </div>
        
    )
}