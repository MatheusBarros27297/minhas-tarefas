import { configureStore } from '@reduxjs/toolkit'

import contatosReducer from './reducers/contatos-reducer'
import filtroReducer from './reducers/filtro-reducer'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
