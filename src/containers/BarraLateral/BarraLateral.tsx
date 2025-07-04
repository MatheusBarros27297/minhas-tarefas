import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Botao, Campo } from '../../styles/style'
import * as S from './stylesBarraLateral'
import { RootReducer } from '../../store/reducers'

import { alterarTermo } from '../../store/reducers/filtro-reducer'

type Props = {
  mostrarBusca: boolean
}

const BarraLateral = ({ mostrarBusca }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarBusca ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar contato..."
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar à lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
