import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"

const Sorteio = () => {
    const participante = useListaDeParticipantes()

    return (
        <section>
            <form>
                <select name="participanteDaVez" id="participanteDaVez">
                    {participante.map(participante => <option key={participante}>{participante}</option>)}
                </select>
            </form>
        </section>
    )
}

export default Sorteio