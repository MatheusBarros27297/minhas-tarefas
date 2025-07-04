import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles/style'
import { Campo } from '../../styles/style'
import { Form } from './styleFormulario'

import { cadastrar } from '../../store/reducers/contatos-reducer'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Estados para os campos do novo contato
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nomeCompleto,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nomeCompleto}
          onChange={(evento) => setNomeCompleto(evento.target.value)}
          type="text"
          placeholder="Nome Completo"
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <Campo
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="tel"
          placeholder="Telefone"
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
