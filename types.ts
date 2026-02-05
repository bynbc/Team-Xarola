export interface Transformation {
  id: number;
  beforeImg: string;
  afterImg: string;
  name: string;
  kgLost: number;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}