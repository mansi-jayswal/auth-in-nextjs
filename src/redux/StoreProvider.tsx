// "use client"
// import store from './store'
// import {Provider} from 'react-redux'

// export const StoreProvider = ({children}) => {
    
//     return <Provider store={store}>{children}</Provider>
// }

'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import {AppStore, makeStore} from './store'

export default function StoreProvider({ children }:{children:any}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}