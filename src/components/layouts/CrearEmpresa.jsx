import Header from "../helpers/Header";

const CrearEmpresa = () => {
  return (
    <section>
      <Header />
      <form>
        <input placeholder="Nombre empresa" type="text" />
        <input placeholder="Direccion empresa" type="text" />
        <input placeholder="Telefono Gerente" type="text" />
      </form>
    </section>
  );
};

export default CrearEmpresa;
