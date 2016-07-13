export class Prize {
    id: number;
    menonId: number;
    date: Date = new Date();
    reason: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
