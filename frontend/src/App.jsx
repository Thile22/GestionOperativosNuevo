
import { useState } from 'react';
import './App.css';

const operativos = [
  {
    barrio: 'Centro',
    zona: 'CENTRO',
    orden: 'OO-001',
    fechaInicio: '2026-10-05',
    fechaFin: '2026-10-08',
    horario: '18:00 a 02:00',
    movil: 2,
    infantes: 4,
    bicipol: 2,
    motocicletas: 3,
    resultados: {
      Incidentes: 8,
      'Robos y hurtos': 2,
      Daño: 1,
      'Tentativas de robo': 1,
      Disturbios: 2,
      'Solicitudes de presencia policial': 5,
      'Sujetos sospechosos': 7,
      Aprehendidos: 2,
      Entrevistas: 12,
      'Controles de vehículos': 35,
      'Secuestros de armas de fuego': 0,
      'Secuestros de armas blancas': 1,
      'Vehículos y motocicletas secuestrados': 1,
    },
  },
  {
    barrio: 'Alberdi',
    zona: 'OESTE',
    orden: 'OO-002',
    fechaInicio: '2026-10-06',
    fechaFin: '2026-10-10',
    horario: '20:00 a 04:00',
    movil: 3,
    infantes: 6,
    bicipol: 1,
    motocicletas: 2,
    resultados: {
      Incidentes: 5,
      'Robos y hurtos': 1,
      Daño: 0,
      'Tentativas de robo': 2,
      Disturbios: 1,
      'Solicitudes de presencia policial': 3,
      'Sujetos sospechosos': 4,
      Aprehendidos: 1,
      Entrevistas: 8,
      'Controles de vehículos': 28,
      'Secuestros de armas de fuego': 1,
      'Secuestros de armas blancas': 0,
      'Vehículos y motocicletas secuestrados': 2,
    },
  },
  {
    barrio: 'Centro',
    zona: 'CENTRO',
    orden: 'OO-003',
    fechaInicio: '2026-10-11',
    fechaFin: '2026-10-13',
    horario: '16:00 a 00:00',
    movil: 1,
    infantes: 3,
    bicipol: 1,
    motocicletas: 2,
    resultados: {
      Incidentes: 4,
      'Robos y hurtos': 1,
      Daño: 0,
      'Tentativas de robo': 0,
      Disturbios: 1,
      'Solicitudes de presencia policial': 2,
      'Sujetos sospechosos': 3,
      Aprehendidos: 1,
      Entrevistas: 6,
      'Controles de vehículos': 20,
      'Secuestros de armas de fuego': 0,
      'Secuestros de armas blancas': 0,
      'Vehículos y motocicletas secuestrados': 0,
    },
  },
];

function App() {
  const [barrio, setBarrio] = useState('');
  const [orden, setOrden] = useState('');
  const [vista, setVista] = useState('inicio');
  const [operativoSeleccionado, setOperativoSeleccionado] = useState(null);

  const barrios = [...new Set(operativos.map((op) => op.barrio))];

  const ordenesDisponibles = operativos.filter(
    (op) => op.barrio === barrio
  );

  function buscarOperativo() {
    const operativo = operativos.find(
      (op) => op.barrio === barrio && op.orden === orden
    );

    if (!operativo) {
      alert('Seleccioná un barrio y una orden operacional válida.');
      return;
    }

    setOperativoSeleccionado(operativo);
    setVista('resultado');
  }

  function volverAlInicio() {
    setVista('inicio');
  }

  return (
    <main className="dashboard">
      {vista === 'inicio' ? (
        <>
          <header className="encabezado">
            <div>
              <p className="etiqueta">SISTEMA DE CONSULTA</p>
              <h1>Gestión de Operativos</h1>
              <p className="subtitulo">
                Seleccioná un barrio y una orden operacional para consultar
                sus resultados.
              </p>
            </div>
          </header>

          <section className="panel-consulta">
            <div className="titulo-seccion">
              <div>
                <h2>Consultar operativo</h2>
                <p>Completá los dos campos para continuar.</p>
              </div>
            </div>

            <div className="panel-busqueda">
              <div className="campo">
                <label htmlFor="barrio">Barrio</label>
                <select
                  id="barrio"
                  value={barrio}
                  onChange={(e) => {
                    setBarrio(e.target.value);
                    setOrden('');
                  }}
                >
                  <option value="">Seleccionar barrio</option>
                  {barrios.map((nombre) => (
                    <option key={nombre} value={nombre}>
                      {nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="campo">
                <label htmlFor="orden">N.º de orden operacional</label>
                <select
                  id="orden"
                  value={orden}
                  onChange={(e) => setOrden(e.target.value)}
                  disabled={!barrio}
                >
                  <option value="">Seleccionar orden</option>
                  {ordenesDisponibles.map((op) => (
                    <option key={op.orden} value={op.orden}>
                      {op.orden}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                className="boton-buscar"
                translate="no"
                onClick={buscarOperativo}
              >
                BUSCAR
              </button>
            </div>
          </section>
        </>
      ) : (
        <section className="tabla-contenedor">
          <button
            type="button"
            className="boton-buscar"
            onClick={volverAlInicio}
          >
            ← VOLVER A LA CONSULTA
          </button>

          <header className="encabezado">
            <div>
              <p className="etiqueta">DETALLE DEL OPERATIVO</p>
              <h1>Orden {operativoSeleccionado.orden}</h1>
              <p className="subtitulo">
                Barrio {operativoSeleccionado.barrio} · Zona{' '}
                {operativoSeleccionado.zona}
              </p>
            </div>
          </header>

          <section className="panel-consulta">
            <h2>Información general</h2>
            <p>
              <strong>Barrio:</strong> {operativoSeleccionado.barrio}
            </p>
            <p>
              <strong>Zona:</strong> {operativoSeleccionado.zona}
            </p>
            <p>
              <strong>Orden operacional:</strong> {operativoSeleccionado.orden}
            </p>
            <p>
              <strong>Fecha de inicio:</strong>{' '}
              {operativoSeleccionado.fechaInicio}
            </p>
            <p>
              <strong>Fecha de finalización:</strong>{' '}
              {operativoSeleccionado.fechaFin}
            </p>
            <p>
              <strong>Horario:</strong> {operativoSeleccionado.horario}
            </p>
          </section>

          <section className="panel-consulta">
            <h2>Recursos asignados</h2>
            <div className="indicadores">
              {[
                ['Móviles', operativoSeleccionado.movil],
                ['Infantes', operativoSeleccionado.infantes],
                ['Bicipol', operativoSeleccionado.bicipol],
                ['Motocicletas', operativoSeleccionado.motocicletas],
              ].map(([nombre, cantidad]) => (
                <article className="tarjeta-indicador" key={nombre}>
                  <p>{nombre}</p>
                  <strong>{cantidad}</strong>
                </article>
              ))}
            </div>
          </section>

          <section className="tabla-contenedor">
            <h2>Resultados del operativo</h2>
            <div className="tabla-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Indicador</th>
                    <th>Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(operativoSeleccionado.resultados).map(
                    ([nombre, cantidad]) => (
                      <tr key={nombre}>
                        <td>{nombre}</td>
                        <td>{cantidad}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </section>
      )}
    </main>
  );
}

export default App;
