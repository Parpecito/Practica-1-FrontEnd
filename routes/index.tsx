const Home = () => {
  return (
    <>
      <div class="cursor_pagina_principal">
        <div class="fondo">
          <div>
            <h1 class="styleh1">Bienvenido a la pagina principal</h1>
            <div>
              <h2 class="styleh2">Elige lo que quieres hacer</h2>
              <div>
                <a class="url_pag_aleatoria" href={"/paginaAleatoria/1"}>
                  Pagina aleatoria
                </a>
              </div>

              <br />

              <a class="url_pag_dinamica" href={"/paginaDinamica/1"}>
                Pagina Dinamica
              </a>
             <div class="gifanimado">
              <img src="https://usagif.com/wp-content/uploads/2020/b72nv6/partyparrt-30.gif"></img>
              </div>
              <div class="gifanimado2">
                <img src="https://usagif.com/wp-content/uploads/2020/b72nv6/partyparrt-21.gif"></img>
              </div>
              <div class="gifanimado3">
               <img src="https://usagif.com/wp-content/uploads/2020/b72nv6/partyparrt-51.gif"></img> 
              </div>
              <div class="gifanimado4">
                <img src="https://usagif.com/wp-content/uploads/gifs/dancing-rabbit-7.gif"></img>
                
              </div>
              <div class="gifanimado5">
                <img src="https://usagif.com/wp-content/uploads/gifs/dancing-pig-49.gif.webp"></img>
              </div>
              <div class="transicion">
                <img class="imagen_transicion" src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2015/12/15/14502039111214.jpg"></img>

              </div>

              <div class="gifanimado6">
                <img src="https://usagif.com/wp-content/uploads/2021/4fh5wi/troll-face-43.gif.webp"></img>
              <iframe class="video" src="https://www.youtube.com/embed/0GuSxDagyVk" frameborder="0" allowFullScreen></iframe>
              </div>
              <iframe class="video2animado" src="https://www.youtube.com/embed/XSHcoUWIM7w" frameborder="0" allowFullScreen></iframe>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
