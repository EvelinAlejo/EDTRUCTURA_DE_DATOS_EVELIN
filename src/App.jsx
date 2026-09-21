import { useEffect, useState } from "react";
import './style.css';

function App() {
  // Inicializamos el estado con un arreglo vacío
  const [elementos, setElementos] = useState([]);

  // Función para agregar datos aleatorios
  const agregarDato = () => {
    const nuevoNumero = Math.floor(Math.random() * 50);
    setElementos([...elementos, nuevoNumero]);
  };

  // Función para renderizar cada elemento de la lista
  const recorrerArreglo = (elemento, index) => (
    <li key={index} style={{ margin: '5px 0', fontSize: '18px' }}>
      Elemento {index + 1}: <strong>{elemento}</strong>
    </li>
  );

  // Hook de efecto que se ejecuta cada vez que cambia el arreglo
  useEffect(() => {
    console.log("El arreglo de datos es: ", elementos);
  }, [elementos]);

  return (
    <>
      <h1 className="titulo">Hola a todos, soy Pocoyó. ¡Este es mi primer arreglo de datos!</h1>
      <div style={{ padding: '20px' }}>
        <button className="boton" onClick={agregarDato}>
          Agregar número aleatorio
        </button>

        {/* Mensaje condicional si el arreglo está vacío */}
        {elementos.length === 0? (
          <>
            <p>Aún no hay elementos en el arreglo.</p>
            <p>Presiona el botón para agregar datos.</p>
          </>
        ) : (
          /* Lista de elementos si ya contiene datos */
          <ul>{elementos.map(recorrerArreglo)}</ul>
        )}

        <p>Números: {elementos.join(", ")}</p>
      </div>
    </>
  );
}

export default App;
