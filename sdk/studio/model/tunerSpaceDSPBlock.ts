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


export class TunerSpaceDSPBlock {
    'id'?: number;
    'title'?: string;
    'type': string;
    'implementationVersion'?: number;
    'input'?: Array<number>;
    'channels'?: Array<string>;
    'axes'?: Array<string>;
    'frameLength'?: Array<number>;
    'numFilters'?: Array<number>;
    'noiseFloorDb'?: Array<number>;
    'fftLength'?: Array<number>;
    'frameStridePct'?: Array<number>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "implementationVersion",
            "baseName": "implementationVersion",
            "type": "number"
        },
        {
            "name": "input",
            "baseName": "input",
            "type": "Array<number>"
        },
        {
            "name": "channels",
            "baseName": "channels",
            "type": "Array<string>"
        },
        {
            "name": "axes",
            "baseName": "axes",
            "type": "Array<string>"
        },
        {
            "name": "frameLength",
            "baseName": "frameLength",
            "type": "Array<number>"
        },
        {
            "name": "numFilters",
            "baseName": "numFilters",
            "type": "Array<number>"
        },
        {
            "name": "noiseFloorDb",
            "baseName": "noiseFloorDb",
            "type": "Array<number>"
        },
        {
            "name": "fftLength",
            "baseName": "fftLength",
            "type": "Array<number>"
        },
        {
            "name": "frameStridePct",
            "baseName": "frameStridePct",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return TunerSpaceDSPBlock.attributeTypeMap;
    }
}

