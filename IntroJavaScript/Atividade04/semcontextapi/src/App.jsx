import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Sobre from "./Sobre";
import NotFound from "./NotFound";
import Rotas from "./Rotas";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Menu />,
      children:
        [
          {
            index: true,
            element: <Home />
          },
          {
            path: "Rotas",
            element: <Rotas />
          },
          {
            path: "Rotas/:id",
            element: <Rotas />
          },
          {
            path: "Sobre",
            element: <Sobre />
          },
          {
            path: "*",
            element: <NotFound />
          }
        ]
    }
  ]
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
