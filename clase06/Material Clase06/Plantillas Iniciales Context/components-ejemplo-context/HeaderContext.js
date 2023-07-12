const HeaderContext = () => {
  return (
    <header>
      <h2>Título de Header</h2>
      <h3>Subtitulo</h3>
      <select name="language">
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input type="radio" name="theme" id="light-context" value="light" />
      <label htmlFor="light-context">Light</label>
      <input type="radio" name="theme" id="dark-context" value="dark" />
      <label htmlFor="dark-context">Dark</label>
      <button>Logueo</button>
    </header>
  );
};

export default HeaderContext;
