import { Screenshot } from './screenshot';

export class Game {
  id:number;
  name:string;
  slug:string;
  url:string;
  summary:string;
  storyline:string;
  cover: Screenshot;
  screenshots: Array<Screenshot>;
}
