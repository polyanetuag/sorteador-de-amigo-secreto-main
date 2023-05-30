import { useState } from "react"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio"

const Sorteio = () => {
    const participante = useListaDeParticipantes()
    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')

    const resultado = useResultadoSorteio()

    const sortear = (evento:React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if(resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)

        }
    }

    return (
        <section>
            <form onSubmit={sortear}>
                <select 
                required 
                name="participanteDaVez" 
                id="participanteDaVez" 
                placeholder="Selecione o seu nome" 
                value={participanteDaVez} 
                onChange={evento => setParticipanteDaVez(evento.target.value)}>
                    {participante.map(participante => <option key={participante}>{participante}</option>)}
                </select>
                <button>Sortear</button>
            </form>
            {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
        </section>
    )
}

export default Sorteio