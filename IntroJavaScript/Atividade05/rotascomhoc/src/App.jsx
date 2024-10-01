import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Usuario from "./Usuario";
import MenuPrivado from "./MenuPrivado";
import MenuPublico from "./MenuPublico";
import Login from "./Login";
import Tela1 from "./Tela1";
import Tela2 from "./Tela2";
import Tela3 from "./Tela3";

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
      },
      {
        path : "tela2",
        element : <Tela2/>
      },
      {
        path : "tela3",
        element : <Tela3/>
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
