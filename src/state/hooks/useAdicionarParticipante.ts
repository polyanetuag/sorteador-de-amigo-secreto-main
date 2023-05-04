import { useSetRecoilState, useRecoilValue } from "recoil"
import { erroState, listaParticipantesState } from "../atom"

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaParticipantesState)
    const lista = useRecoilValue(listaParticipantesState)
    const setErro = useSetRecoilState(erroState)
    return (nomeDoParticipante: string) => {
        if(lista.includes(nomeDoParticipante)) {
            setErro('Nomes duplicados não são permitidos!')
            return 
        }
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}