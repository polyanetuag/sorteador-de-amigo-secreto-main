import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

jest.mock('../state/hooks/useListaDeParticipantes', () => {
  return {
      useListaDeParticipantes: jest.fn()
  }
})

describe("quando não existem participantes suficientes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([])
})
  test("a brincadeira não pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    const botao = screen.getByRole("button");

    expect(botao).toBeDisabled();
  });
});


describe('quando existem participantes suficientes', () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'Maria', 'Luiza'])
})
  test('a brincadeira pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    const botao = screen.getByRole('button');
    expect(botao).toBeEnabled()
  })
  
})