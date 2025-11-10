import './App.css'

function App() {
  return (
    <div className="sena-container">
      <header className="sena-header">
        <img src="/sena-logo.png" alt="Logo SENA" className="sena-logo" />
        <h1>SENA CGMLTI</h1>
        <h2>Centro de Gestión de Mercados, Logística y Tecnologías de la Información</h2>
      </header>

      <main className="sena-main">
        <section className="welcome-section">
          <h2>Bienvenidos al CGMLTI</h2>
          <p>Formación profesional integral para el sector productivo y tecnológico</p>
        </section>

        <section className="programs-section">
          <h2>Nuestros Programas</h2>
          <div className="programs-grid">
            <div className="program-card">
              <h3>Tecnología en Desarrollo de Software</h3>
              <p>Forma profesionales en el desarrollo de soluciones tecnológicas</p>
            </div>
            <div className="program-card">
              <h3>Logística Empresarial</h3>
              <p>Gestión eficiente de la cadena de suministro</p>
            </div>
            <div className="program-card">
              <h3>Mercadeo</h3>
              <p>Estrategias innovadoras para el mercado actual</p>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>¿Por qué elegirnos?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Formación Gratuita</h3>
              <p>Educación de calidad sin costo</p>
            </div>
            <div className="feature-item">
              <h3>Instructores Expertos</h3>
              <p>Profesionales con amplia experiencia</p>
            </div>
            <div className="feature-item">
              <h3>Infraestructura Moderna</h3>
              <p>Ambientes de formación equipados</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="sena-footer">
        <p>SENA - Servicio Nacional de Aprendizaje</p>
        <p>Centro de Gestión de Mercados, Logística y Tecnologías de la Información</p>
        <p>Bogotá D.C., Colombia</p>
      </footer>
    </div>
  )
}

export default App
