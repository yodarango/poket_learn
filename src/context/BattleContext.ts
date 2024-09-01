import { createContext } from "react";

export type TDefaultBattleState = {
  selectedPokemon: Record<string, any> | null;
  pokemonStatus: number;
};

export const POKEMON_STATUS_ESCAPED = 2;
export const POKEMON_STATUS_CAUGHT = 1;
export const POKEMON_STATUS_FREE = 0;

export const initialBattleData: TDefaultBattleState = {
  pokemonStatus: POKEMON_STATUS_FREE,
  selectedPokemon: null,
};

export const defaultBattleContext = {
  state: initialBattleData,
  handlePokemonSelected: (_: Record<string, any>) => {},
  handleCorrect: () => {},
  handleWrong: () => {},
};

export const BattleContext = createContext(defaultBattleContext);
