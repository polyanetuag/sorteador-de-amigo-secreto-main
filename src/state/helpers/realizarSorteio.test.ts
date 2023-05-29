import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante não pode sortear o próprio nome', () => {
        const participantes = [
            'Ana',
            'João',
            'Maria',
            'Pedro',
            'Paulo',
            'Marta',
            'Paula',
            'José',
        ]
        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})