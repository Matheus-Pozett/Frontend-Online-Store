function Header() {
  return (
    <header>
      <form>
        <label htmlFor="buscar">Buscar</label>
        <input type="text" id="buscar" />
        <button>Procurar produtos</button>
      </form>
    </header>
  );
}

export { Header };
