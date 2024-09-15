import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Error from './routes/Error/Index.tsx'
import Home from './routes/Home/Index.tsx'
import Sobre from './routes/Sobre/Index.tsx'
import Perguntas from './routes/Perguntas/Index.tsx'
import Cadastro from './routes/Cadastro/Index.tsx'
import CadastroMec from './routes/CadastroMec/Index.tsx'
import CadastroUser from './routes/CadastroUser/index.tsx'
import Login from './routes/Login/Index.tsx'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/", element:<App/>, errorElement:<Error/>,children:[
      {path:"/", element:<Home/>},
      {path:"/Sobre", element:<Sobre/>},
      {path:"/Perguntas", element:<Perguntas/>},
      {path:"/Cadastro", element:<Cadastro/>},
      {path:"/Cadastro/Mecanico", element:<CadastroMec/>},
      {path:"/Cadastro/Usuario", element:<CadastroUser/>},
      {path:"/Login", element:<Login/>}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
