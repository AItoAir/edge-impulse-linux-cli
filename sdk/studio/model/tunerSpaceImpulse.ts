/**
 * Edge Impulse API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TunerSpaceDSPBlock } from './tunerSpaceDSPBlock';
import { TunerSpaceInputBlock } from './tunerSpaceInputBlock';
import { TunerSpaceLearnBlock } from './tunerSpaceLearnBlock';

export class TunerSpaceImpulse {
    /**
    * Input Blocks that are part of this impulse
    */
    'inputBlocks': Array<TunerSpaceInputBlock>;
    /**
    * DSP Blocks that are part of this impulse
    */
    'dspBlocks': Array<TunerSpaceDSPBlock>;
    /**
    * Learning Blocks that are part of this impulse
    */
    'learnBlocks': Array<TunerSpaceLearnBlock>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "inputBlocks",
            "baseName": "inputBlocks",
            "type": "Array<TunerSpaceInputBlock>"
        },
        {
            "name": "dspBlocks",
            "baseName": "dspBlocks",
            "type": "Array<TunerSpaceDSPBlock>"
        },
        {
            "name": "learnBlocks",
            "baseName": "learnBlocks",
            "type": "Array<TunerSpaceLearnBlock>"
        }    ];

    static getAttributeTypeMap() {
        return TunerSpaceImpulse.attributeTypeMap;
    }
}

