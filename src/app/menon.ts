import { Prize } from './prize';

export class Menon {
    id: number;
    name: string = '';
    gender: string = '';
    prizes: Array<Prize> = [];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
