function Header() {
  let nomesUsuario = ["Maria", "Silva"];

  // let nomeCompleto = nomesUsuario.reduce((acc,item) => {return acc + item + ' '},'').trim();
  let nomeCompleto = nomesUsuario.join(" ");

  return (
    <>
      <header>
        <h1>HEADER</h1>
        <div>Olá {nomeCompleto}.</div>
      </header>
    </>
  );
}

export default Header;
