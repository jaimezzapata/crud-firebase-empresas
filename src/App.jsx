import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/layouts/Home";
import CrearEmpresa from "./components/layouts/CrearEmpresa";
import ListadoEmpresas from "./components/layouts/ListadoEmpresas";
import EditarEmpresa from "./components/layouts/EditarEmpresa";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/crear-empresa",
    element: <CrearEmpresa />,
  },
  {
    path: "/listar-empresas",
    element: <ListadoEmpresas />,
  },
  {
    path: '/editar-empresa/:id',
    element: <EditarEmpresa />
  }
]);

function App() {
  return (
    <section>
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
