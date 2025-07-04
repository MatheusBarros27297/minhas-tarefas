import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles/style'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px; /* Adicionado espaço abaixo do título */
`

export const CampoContato = styled.input`
  color: #888888;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 8px; /* Adicionado para consistência visual */
  padding: 8px; /* Adicionado para melhor aparência */
  border: 1px solid #ccc;
  background-color: #fff;

  &:disabled {
    background-color: transparent;
    border: none;
    padding: 8px 0; /* Ajuste para alinhamento quando desabilitado */
  }
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
