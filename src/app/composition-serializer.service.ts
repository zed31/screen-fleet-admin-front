import { Injectable } from '@angular/core';
import { CompositionData } from './composition-data';

@Injectable()
export class CompositionSerializerService {

  generateCompositionData(htmlData: string): CompositionData {
    return new CompositionData(htmlData);
  }

  constructor() { }

}
