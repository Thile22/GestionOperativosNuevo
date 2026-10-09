
import './App.css';

function App() {
  return (
    <main>
      <header className="encabezado">
        <h1>Gestión de Operativos</h1>
        <p>Sistema de consulta y gestión de operativos</p>
      </header>

      <section>
        <h2>Consultar operativos</h2>
        <p className="descripcion">
          Ingresá uno o más criterios para encontrar los registros.
        </p>

        <div className="panel-busqueda">
          <div className="campo">
            <label htmlFor="fechaDesde">Fecha desde</label>
            <input id="fechaDesde" type="date" />
          </div>

          <div className="campo">
            <label htmlFor="fechaHasta">Fecha hasta</label>
            <input id="fechaHasta" type="date" />
          </div>

          <div className="campo">
            <label htmlFor="orden">Orden operacional</label>
            <input
              id="orden"
              type="text"
              placeholder="Ej. OO-001"
            />
          </div>

          <div className="campo">
            <label htmlFor="barrio">Barrio</label>
            <input
              id="barrio"
              type="text"
              placeholder="Nombre del barrio"
            />
          </div>

          <div className="acciones">
            <button type="button">Buscar</button>
            <button type="button" className="boton-secundario">
              Limpiar filtros
            </button>
          </div>

        </div>
   <div className="tabla-contenedor">
          <h3>Operativos registrados</h3>

          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Orden operacional</th>
                <th>Barrio</th>
                <th>Descripción</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>05/10/2026</td>
                <td>OO-001</td>
                <td>Centro</td>
                <td>Operativo preventivo</td>
              </tr>

              <tr>
                <td>06/10/2026</td>
                <td>OO-002</td>
                <td>Alberdi</td>
                <td>Control vehicular</td>
              </tr>

              <tr>
                <td>07/10/2026</td>
                <td>OO-003</td>
                <td>Centro</td>
                <td>Patrullaje preventivo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default App;