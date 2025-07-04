import BotaoAdicionar from '../../components/BotaoAdicionar/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral/BarraLateral'

import ListaDeContatos from '../../containers/ListaDeContatos/ListaDeContatos'

const Home = () => (
  <>
    <BarraLateral mostrarBusca={true} />
    <ListaDeContatos />
    <BotaoAdicionar />
  </>
)

export default Home
