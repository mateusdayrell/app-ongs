import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'
import LogoImg from '../../assets/logo@2x.png'
import balloons from '../../assets/balloons-animate.svg'

import api from '../../services/api'



export default function Register() {
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [phone, setPhone] = useState('')
     const [city, setCity] = useState('')
     const [uf, setUf] = useState('')

     const navigate = useNavigate()
    
    async function handleRegister(e) { //page does not recharge
        e.preventDefault()

        const data = {
            name,
            email,
            phone,
            city,
            uf,
        } //stores the data received on data

        try {
            const response = await api.post('ongs', data)
            //send data to backend to register

            alert(`Seu ID de acesso: ${response.data.id}`)
            //success message

            navigate('/') //return to home page after the register
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }
    
    return (
        <div className="register-container">
            <div className="content">
                <div className="banner">
                    <img src={balloons} alt="ballons" />
                </div>
                <div className="register">
                    <section>
                        <img src={LogoImg} alt="Logo" />   
                        <h1>Cadastro</h1>
                        {/* <p>Faça o seu cadastro!</p> */}
                        {/* <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color = "#e02031"/>    
                            Nao tenho registro
                        </Link> */}
                    </section> 
                    <form onSubmit={handleRegister}>
                        <input 
                            placeholder="Nome da ONG"
                            value={name}
                            onChange={e => setName(e.target.value)} />
                        <input 
                            type="email" 
                            placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                        <input 
                            placeholder="Telefone"
                            value={phone}
                            onChange={e => setPhone(e.target.value)} />

                        <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)} />
                        <input 
                            placeholder="UF"
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)} />
                        </div>
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                    <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color = "#e02031"/>    
                            Voltar à página de login
                        </Link>
                </div>
            </div>
        </div>
        )
}