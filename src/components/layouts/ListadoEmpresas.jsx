import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { dataBase } from "../database/config-firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../helpers/Header";


const ListadoEmpresas = () => {
  const [empresas, setEmpresas] = useState([]);

  const getEmpresas = async () => {
    const empresasCollection = collection(dataBase, "empresas");
    const data = await getDocs(empresasCollection);
    console.log(empresasCollection);
    console.log(data);
    setEmpresas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(empresas)
  };


  const deleteEmpresa = async (id) => {
    let empresaEliminar = doc(dataBase, "empresas", id)
    await deleteDoc(empresaEliminar)
    getEmpresas()
    console.log('Eliminando empresa')
  }


  useEffect(() => {
    getEmpresas();
  }, []);


  // let numeros = [1,2,3,4,5]
  // let letras = [1,2,3,4,5]
  // let numerosYLetras = [...numeros, ...letras]
  // let numerosYLetras = [numeros,letras]
  // let numerosYLetras = numeros + letras
  // console.log(numerosYLetras)

  return (
    <section>
      <Header />

      <section>
        {
          empresas.map((empresa) => (
            <section key={empresa.id}>
              <p>{empresa.nombreEmpresa}</p>
              <p>{empresa.direccionEmpresa}</p>
              <p>{empresa.telefonoEmpresa}</p>
              <section>
                <button onClick={() => { deleteEmpresa(empresa.id) }} type="button">Eliminar</button>
                <button type="button"><Link to={'/editar-empresa/'+empresa.id}>Editar</Link></button>
              </section>
            </section>
          ))
        }
      </section>
    </section>
  );
};

export default ListadoEmpresas;
