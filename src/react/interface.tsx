interface TechInterface {
  lang: string;
  fe: number;
  type: string;
  name: string;
  target: string[];
}

interface Filtered {
  data: string[]
}

interface listBG{
  data: string[]
}

interface HoverIndex{
  data: number
}

interface PaletteMode{
  light?: string,
  dark?: string,
}