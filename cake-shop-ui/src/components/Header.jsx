function Header() {
  return (
    <header className="header">
      <div>
        <h1 className="logo">🎂 Sweet Bites</h1>
        <p className="tagline">Freshly baked happiness</p>
      </div>

      <div className="header-right">
        <span className="cart">🛒 0 items</span>
        <button>Login</button>
      </div>
    </header>
  );
}

export default Header;
