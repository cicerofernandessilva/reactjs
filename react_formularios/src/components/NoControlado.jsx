import { useRef } from "react";

const NoControlado = () => {
  //   return "Formulário No Controlado";
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    //react já passa evento por default
    console.log("Me diste click!");
    // console.log(form.current);

    //capturar los datos

    const data = new FormData(form.current);
    console.log(data);
    console.log(...data.entries());
    const dataObject = Object.fromEntries([...data.entries()]);
    console.log(dataObject, "dataObject");
    const { title, descripcion, state } = Object.fromEntries([
      ...data.entries(),
    ]);

    console.log(title, descripcion, state, "destructury");

    //validar los datos
    if (!title.trim()) return console.log("Llene este campo title!");
    if (!descripcion.trim())
      return console.log("Llene este campo descripcion!");
    if (!state.trim()) return console.log("Llene este campo state!");
  };

  //prevenir submit por default
  // document.addEventListener('submit', (e) => {
  //     e.preventDefault();
  // })

  return (
    <div className="container mb-2">
      <form onSubmit={handleSubmit} ref={form}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Ingrese todo"
          name="title"
          defaultValue="Cicero text #1"
        />
        <textarea
          name="descripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripcion"
          defaultValue="Cicero text #2"
        />
        <select
          name="state"
          className="form-select mb-2"
          defaultValue="completado"
        >
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
