import { dataBase } from "../database/config-firebase";
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import Header from "../helpers/Header";

const CrearEmpresa = () => {

  const [nombreEmpresa, setNombreEmpresa] = useState('')
  const [direccionEmpresa, setDireccionEmpresa] = useState('')
  const [telefonoEmpresa, setTelefonoGerente] = useState('')
  const listadoEmpresas = useNavigate()

  const addEmpresa = async () => {
    let empresaCollection = collection(dataBase, "empresas")
    let empresaNueva = {
      nombreEmpresa, direccionEmpresa, telefonoEmpresa
    }
    await addDoc(empresaCollection, empresaNueva)
    listadoEmpresas('/listar-empresas')
  }

  return (
    <section>
      <Header />
      <form>
        <input onChange={(e)=> setNombreEmpresa(e.target.value)} placeholder="Nombre empresa" type="text" />
        <input onChange={(e)=> setDireccionEmpresa(e.target.value)} placeholder="Direccion empresa" type="text" />
        <input onChange={(e)=> setTelefonoGerente(e.target.value)} placeholder="Telefono Gerente" type="text" />
        <button onClick={addEmpresa} type="button">Agregar Empresa</button>
      </form>
    </section>
  );
};

export default CrearEmpresa;