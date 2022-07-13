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

import { KerasVisualLayerType } from './kerasVisualLayerType';

export class KerasResponseAllOfTransferLearningModels {
    'name': string;
    'shortName': string;
    'description': string;
    'hasNeurons': boolean;
    'hasDropout': boolean;
    'defaultNeurons'?: number;
    'defaultDropout'?: number;
    'defaultLearningRate'?: number;
    'defaultTrainingCycles'?: number;
    'hasImageAugmentation'?: boolean;
    'type': KerasVisualLayerType;
    'organizationModelId'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "shortName",
            "baseName": "shortName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "hasNeurons",
            "baseName": "hasNeurons",
            "type": "boolean"
        },
        {
            "name": "hasDropout",
            "baseName": "hasDropout",
            "type": "boolean"
        },
        {
            "name": "defaultNeurons",
            "baseName": "defaultNeurons",
            "type": "number"
        },
        {
            "name": "defaultDropout",
            "baseName": "defaultDropout",
            "type": "number"
        },
        {
            "name": "defaultLearningRate",
            "baseName": "defaultLearningRate",
            "type": "number"
        },
        {
            "name": "defaultTrainingCycles",
            "baseName": "defaultTrainingCycles",
            "type": "number"
        },
        {
            "name": "hasImageAugmentation",
            "baseName": "hasImageAugmentation",
            "type": "boolean"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "KerasVisualLayerType"
        },
        {
            "name": "organizationModelId",
            "baseName": "organizationModelId",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return KerasResponseAllOfTransferLearningModels.attributeTypeMap;
    }
}

