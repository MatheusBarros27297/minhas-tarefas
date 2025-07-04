import { useSelector } from 'react-redux'

import Contato from '../../components/Contato/Contato'
import { MainContainer, Titulo } from '../../styles/style'

import { RootReducer } from '../../store/reducers'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens

    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        // Busca pelo nome completo do contato
        (item) =>
          item.nomeCompleto.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    }
    return contatosFiltrados
  }

  const exibeResultadoBusca = (quantidade: number) => {
    let mensagem = ''

    if (termo && termo.length > 0) {
      mensagem = `${quantidade} contato(s) encontrado(s) para "${termo}"`
    } else {
      mensagem = `${quantidade} contato(s) na agenda`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoBusca(contatos.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.id}>
            {/* Passa as props do contato */}
            <Contato
              id={c.id}
              nomeCompleto={c.nomeCompleto}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
