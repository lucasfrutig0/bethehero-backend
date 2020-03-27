import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import logoImg from '../../assets/logo.svg'
import './styles.css'

export default function NewIncident () {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ongId = localStorage.getItem('ongId')
  const history = useHistory()

  async function handleNewInstance(e) {
    e.preventDefault()
    const data = {title, description, value}

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })
      history.push('/profile')
    } catch(err) {
      alert(`Erro ao cadastrar o caso`)
    }
  }
  
  return (
    <div className="new-incident-container">
      <div className="content">

        <section>
          <img src={logoImg} alt="Logo"/>

          <h1>Cadastrar Novo Caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói que possa resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para Home
          </Link>
        </section>

        <form onSubmit={handleNewInstance}>
          <input 
            type="text" 
            placeholder="Título do Caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Valor em R$"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}