import { connDataBase } from "../database/config-firebase";
import {collection, getDocs} from 'firebase/firestore'
import Header from "../helpers/Header";
import { useState, useEffect } from "react";

const ListadoEmpresas = () => {
  const [empresas, setEmpresas] = useState([])

  const getEmpresas = async () => {
    const empresasCollection = collection(connDataBase, 'empresas')
    let data = await getDocs(empresasCollection)
    console.log(data.docs.map((doc)=>(doc.data())))
    setEmpresas(data.docs.map((doc)=>(doc.data())))
  }
  useEffect(()=>{
    getEmpresas()
  },[])  

  return (
    <section>
      <Header />
      <section>
        {
          empresas.map((empresa)=>(
            <section>
              <p>Nombre empresa: {empresa.nombreEmpresa}</p>
              <p>Direccion empresa: {empresa.direccionEmpresa}</p>
              <p>Telefono gerente: {empresa.telefonoGerente}</p>
            </section>
          ))
        }
      </section>
    </section>
  );
};

export default ListadoEmpresas;
