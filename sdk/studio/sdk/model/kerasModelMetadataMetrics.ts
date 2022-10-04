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

import { KerasModelMetadataMetricsOnDevicePerformance } from './kerasModelMetadataMetricsOnDevicePerformance';
import { KerasModelTypeEnum } from './kerasModelTypeEnum';
import { ModelPrediction } from './modelPrediction';

export class KerasModelMetadataMetrics {
    'type': KerasModelTypeEnum;
    /**
    * The model\'s loss on the validation set after training
    */
    'loss': number;
    /**
    * The model\'s accuracy on the validation set after training
    */
    'accuracy'?: number;
    'confusionMatrix': Array<Array<number>>;
    /**
    * Precision, recall, F1 and support scores
    */
    'report': object;
    'onDevicePerformance': Array<KerasModelMetadataMetricsOnDevicePerformance>;
    'predictions'?: Array<ModelPrediction>;
    'visualization': KerasModelMetadataMetricsVisualizationEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "KerasModelTypeEnum"
        },
        {
            "name": "loss",
            "baseName": "loss",
            "type": "number"
        },
        {
            "name": "accuracy",
            "baseName": "accuracy",
            "type": "number"
        },
        {
            "name": "confusionMatrix",
            "baseName": "confusionMatrix",
            "type": "Array<Array<number>>"
        },
        {
            "name": "report",
            "baseName": "report",
            "type": "object"
        },
        {
            "name": "onDevicePerformance",
            "baseName": "onDevicePerformance",
            "type": "Array<KerasModelMetadataMetricsOnDevicePerformance>"
        },
        {
            "name": "predictions",
            "baseName": "predictions",
            "type": "Array<ModelPrediction>"
        },
        {
            "name": "visualization",
            "baseName": "visualization",
            "type": "KerasModelMetadataMetricsVisualizationEnum"
        }    ];

    static getAttributeTypeMap() {
        return KerasModelMetadataMetrics.attributeTypeMap;
    }
}


export type KerasModelMetadataMetricsVisualizationEnum = 'featureExplorer' | 'dataExplorer' | 'none';
export const KerasModelMetadataMetricsVisualizationEnumValues: string[] = ['featureExplorer', 'dataExplorer', 'none'];