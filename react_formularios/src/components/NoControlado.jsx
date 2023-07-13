const NoControlado = () => {
  //   return "Formulário No Controlado";
  const handleSubmit = (e) => {
    e.preventDefault();
    //react já passa evento por default
    console.log("Me diste click!");
  };

  //prevenir submit por default
  // document.addEventListener('submit', (e) => {
  //     e.preventDefault();
  // })

  return (
    <div className="container mb-2">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Ingrese todo"
          name="title"
        />
        <textarea
          name="descripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripcion"
        />
        <select name="state" className="form-select mb-2">
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Processar
        </button>
      </form>
    </div>
  );
};

export default NoControlado;
