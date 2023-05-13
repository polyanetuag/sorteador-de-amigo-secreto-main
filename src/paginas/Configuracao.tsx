import Card from "../components/Card";
import Formulario from "../components/Formulario";
import ListaParticipantes from "../components/ListaParticipantes";
import Rodape from "../components/Rodape";

const Configuracao = () => {
  return (
    <Card>
      <section>
        <Formulario />
        <ListaParticipantes />
        <Rodape />
      </section>
    </Card>
  );
};

export default Configuracao;
