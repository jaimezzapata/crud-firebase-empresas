import { dataBase } from "../database/config-firebase";
import { collection, updateDoc, doc, getDoc } from 'firebase/firestore'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import Header from "../helpers/Header";


const EditarEmpresa = () => {
    const [nombreEmpresa, setNombreEmpresa] = useState('')
    const [direccionEmpresa, setDireccionEmpresa] = useState('')
    const [telefonoEmpresa, setTelefonoGerente] = useState('')
    const listadoEmpresas = useNavigate()
    let {id} = useParams()

    const updateEmpresa = async () => {
        let empresaCollection = doc(dataBase, "empresas", id)
        let empresaNueva = {
            nombreEmpresa, direccionEmpresa, telefonoEmpresa
        }
        await updateDoc(empresaCollection, empresaNueva)
        listadoEmpresas('/listar-empresas')
    }

    const getEmpresaId = async (id) => {
        let empresaCollection = await getDoc(doc(dataBase, "empresas", id))
        setNombreEmpresa(empresaCollection.doc().nombreEmpresa)
        setDireccionEmpresa(empresaCollection.doc().direccionEmpresa)
        setTelefonoGerente(empresaCollection.doc().telefonoEmpresa)
    }

    useEffect(()=>{
        getEmpresaId(id)
    })

    return (
        <section>
            <Header />
            <form>
                <input onChange={(e) => setNombreEmpresa(e.target.value)} placeholder="Nombre empresa" type="text" />
                <input onChange={(e) => setDireccionEmpresa(e.target.value)} placeholder="Direccion empresa" type="text" />
                <input onChange={(e) => setTelefonoGerente(e.target.value)} placeholder="Telefono Gerente" type="text" />
                <button onClick={updateEmpresa} type="button">Agregar Empresa</button>
            </form>
        </section>
    )
}

export default EditarEmpresa