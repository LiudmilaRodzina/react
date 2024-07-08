export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  abilities: { ability: { name: string } }[];
  base_experience: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  name: string;
}

export interface CardProps {
  pokemon: PokemonDetails;
}

export interface Props {
  message: string;
  onClose: () => void;
}
