import { Injectable } from '@angular/core';
import { CompositionData } from './composition-data';

/**
 * Class used to serialize a composition
 * @class CompositionSerializerService
 */
@Injectable()
export class CompositionSerializerService {

  /**
   * Generate a composition data which contains the HTMLElement node
   * @param htmlData The Html data string of a composition
   */
  generateCompositionData(htmlData: string): CompositionData {
    return new CompositionData(htmlData);
  }

  /**
   * Constructor of the CompositionSerializerService
   * @constructor
   */
  constructor() { }

}
