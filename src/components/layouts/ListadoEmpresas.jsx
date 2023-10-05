import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../database/config-firebase";
import { useEffect, useState } from "react";
import Header from "../helpers/Header";

const ListadoEmpresas = () => {
  const [empresas, setEmpresas] = useState([]);

  const getEmpresas = async () => {
    const empresasCollection = collection(dataBase, "empresas");
    const data = await getDocs(empresasCollection);
    console.log(empresasCollection);
    console.log(data);
    setEmpresas(data.docs.map((doc) => doc.data()));
    console.log(empresas)
  };

  useEffect(() => {
    getEmpresas();
  }, []);

  return (
    <section>
      <Header />
      <section>
        {
          empresas.map((empresa)=>(
            <section>
              <p>{empresa.nombreEmpresa}</p>
              <p>{empresa.direccionEmpresa}</p>
              <p>{empresa.telefonoEmpresa}</p>
            </section>
          ))
        }
      </section>
    </section>
  );
};

export default ListadoEmpresas;
