import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Data } from "../../types.ts";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    try {
      //const {id}=ctx.params;
      //Quiero que sea aleatorio
      //const id=Math.floor(Math.random()*100)

      const response = await Axios.get<Data>(
        `https://learnyourlesson.deno.dev/`,
      );
      //console.log(response)
      //console.log(response.data)
      return ctx.render(response.data);

      // ctx.render(data)
    } catch (error) {
      console.error(error);
      throw new Error("Ha habido un error en el handler");
    }
  },
};

const Page = (props: PageProps<Data>) => {
  //console.log(props)
  const data = props.data;
  //console.log(data)
  return (
    <div class="cursor">
      <div class="fondo_pag_aleatoria">
        <div>
          <h1 class="colores_animacion">Frase aleatoria</h1>
          <h2 class="sombra">
            Pase el cursor por encima de la caja para mostra la frase
          </h2>
          <h3 class="box" data-info={data}></h3>
          <br />
          <a class="dotted" href={"/"}>Volver a la pagina principal</a>
          <div class="mov_imagen">
            <img src="https://i.pinimg.com/originals/73/04/6e/73046e2b5eaf644fe5f52f05bd3f7e77.png">
            </img>
          </div>
          <div class="animacion_perro">
            <img src="https://preview.redd.it/huz0a20pttc51.png?auto=webp&s=d9a390d3adcbfa426330cdde2f6cdb4d200ada74">
            </img>
          </div>
          <div class="rotacionZ">
            <img src="https://i.pinimg.com/originals/3c/16/f0/3c16f07a6dfc38ef4db6359b46baf42d.gif">
            </img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
