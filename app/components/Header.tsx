export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div className="logo">LeKeMa</div>
          <div style={{color:'#6b7280',fontSize:12}}>Demo</div>
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </header>
  )
}
