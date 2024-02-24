import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Data } from "../../types.ts";
import Axios from "npm:axios";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    try {
      const { id } = ctx.params;
      const response = await Axios.get<Data>(
        `https://learnyourlesson.deno.dev/${id}`,
      );
      //console.log(response)

      //console.log(response.data.path)
      return ctx.render(response.data);
    } catch (_error) {
      throw new Error("Ha habido un error en el handler");
    }
  },
};

const Page = (props: PageProps<Data>) => {
  const data = props.data;
  return (
    <div class="curso_dinamico">
      <div class="fondo_dinamico">
        <h1 class="degradado">
          En la url pon / y luego el numero a la frase que quieras acceder
        </h1>
        <h2 class="h2_dinamico">
          Pon el curso encima de la caja y te mostrara la frase
        </h2>
        <h3 class="box2" data-info={data}></h3>
        <a class="url_dinamica" href={"/"}>Volver a la pagina principal</a>
        <div class="animal" data-info={data}></div>
        <div class="rotateimag">
          <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2t4aXdxdGp3bmlhbzlscTZlcjdmYjdxMzYyaXQ3ODNkY2c1d3gwMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT1XGVp95GDPgFYmUE/giphy.gif">
          </img>
        </div>
        <div class="gif_cristiano">
          <img src="https://media.tenor.com/v-d2Sw0GyNAAAAAM/cristiano-ronaldo-ronaldo.gif">
          </img>
        </div>
        <div class="girar_eje_Z">
          <img src ="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHBzdGtveTNzM3Z6eGx5eG5rb3pxMmNzamZsNHgwenhuN2h4djZ0aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XcAskcEyoyld03drLt/giphy.gif"></img>
        </div>
      </div>
    </div>
  );
};
export default Page;
