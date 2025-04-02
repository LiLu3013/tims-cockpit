export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>🚀 Willkommen in Tim's Cockpit</h1>
      <p>Diese Version enthält jetzt auch das fehlende <strong>React</strong>-Plugin.</p>

      <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem', width: '100%', maxWidth: 400 }}>
        <a href="https://wa.me/?text=Hi%20Bianca%2C%20ich%20denk%20an%20dich%20%E2%9D%A4%EF%B8%8F"
           target="_blank"
           style={{
             backgroundColor: '#22c55e',
             color: 'white',
             padding: '0.75rem',
             borderRadius: '1rem',
             textDecoration: 'none',
             fontWeight: 'bold'
           }}>
          💌 Nachricht an Bianca
        </a>

        <a href="https://calendar.google.com"
           target="_blank"
           style={{
             backgroundColor: '#3b82f6',
             color: 'white',
             padding: '0.75rem',
             borderRadius: '1rem',
             textDecoration: 'none',
             fontWeight: 'bold'
           }}>
          📅 Wochenplanung starten
        </a>

        <a href="https://www.jemako.de"
           target="_blank"
           style={{
             backgroundColor: '#facc15',
             color: 'black',
             padding: '0.75rem',
             borderRadius: '1rem',
             textDecoration: 'none',
             fontWeight: 'bold'
           }}>
          🧼 JEMAKO Kundin erinnern
        </a>

        <a href="https://docs.google.com/document/d/1xKjJOURNAL"
           target="_blank"
           style={{
             backgroundColor: '#a855f7',
             color: 'white',
             padding: '0.75rem',
             borderRadius: '1rem',
             textDecoration: 'none',
             fontWeight: 'bold'
           }}>
          ✍️ Reflexion starten
        </a>
      </div>
    </div>
  );
}