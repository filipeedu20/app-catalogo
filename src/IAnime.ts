export interface Anime {
  attributes: Attributes;
  id: string;
}

export interface Attributes {
  titulo: string;
  sinopse: string;
  numeroEp: number;
  startDate: Date;
  endDate: Date;
  // posterImage: PosterImage;
  capa: PosterImage;
}

export interface PosterImage {
  tiny: string;
  small: string;
  medium: string;
  large: string;
  original: string;
}
