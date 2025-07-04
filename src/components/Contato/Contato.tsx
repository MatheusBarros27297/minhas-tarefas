import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './stylesContato'

import { remover, editar } from '../../store/reducers/contatos-reducer'
import ContatoClass from '../../models/Contatos'
import { Botao, BotaoSalvar } from '../../styles/style'

type Props = ContatoClass

const Contato = ({
  nomeCompleto: nomeCompletoOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (nomeCompletoOriginal.length > 0) {
      setNomeCompleto(nomeCompletoOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [nomeCompletoOriginal, emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNomeCompleto(nomeCompletoOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  function salvarEdicao() {
    dispatch(
      editar({
        id,
        nomeCompleto,
        email,
        telefone
      })
    )
    setEstaEditando(false)
  }

  return (
    <S.Card>
      {/* O título agora é o nome do contato */}
      <S.Titulo>
        {estaEditando
          ? `Editando: ${nomeCompletoOriginal}`
          : nomeCompletoOriginal}
      </S.Titulo>

      {/* Campos de dados do contato */}
      <S.CampoContato
        type="text"
        disabled={!estaEditando}
        value={nomeCompleto}
        onChange={(e) => setNomeCompleto(e.target.value)}
        placeholder="Nome Completo"
      />
      <S.CampoContato
        type="email"
        disabled={!estaEditando}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />
      <S.CampoContato
        type="tel"
        disabled={!estaEditando}
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        placeholder="Telefone"
      />

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={salvarEdicao}>Salvar</BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
