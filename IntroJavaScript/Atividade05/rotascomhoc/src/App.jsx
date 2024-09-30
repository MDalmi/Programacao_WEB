import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Usuario from "./Usuario";
import MenuPrivado from "./MenuPrivado";
import MenuPublico from "./MenuPublico";
import Login from "./Login";
import Tela1 from "./Tela1";



const router = createBrowserRouter([
  {
    path : "/",
    element : <MenuPublico/>,
    children :[
      {
        index : true,
        element : <Home/>
      },
      {
        path : "usuario",
        element : <Usuario/>
      },
      {
        path : "login",
        element : <Login/>
      }
    ]
  },
  {
    path : "/privado",
    element : <MenuPrivado/>,
    children :[
      {
        index : true,
        element : <Home/>
      },
      {
        path : "usuario",
        element : <Usuario/>
      },
      {
        path : "login",
        element : <Login/>
      },
      {
        path : "tela1",
        element : <Tela1/>
      }
    ]
  }
]
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
