export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  sprites: {
    front_default: string;
  };
  base_experience: number;
  height: number;
  abilities: { ability: { name: string } }[];
  name: string;
}

export interface CardProps {
  pokemon: PokemonDetails;
}

export interface NotificationProps {
  message: string;
  onClose: () => void;
}

export interface ButtonProps {
  type?: 'button' | 'submit';
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface InputProps {
  placeholder?: string;
  value?: string;
  className?: string;
  onChange: (value: string) => void;
}
