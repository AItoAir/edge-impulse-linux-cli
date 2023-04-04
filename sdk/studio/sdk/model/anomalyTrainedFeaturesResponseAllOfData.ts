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


export class AnomalyTrainedFeaturesResponseAllOfData {
    /**
    * Data by feature index for this window. Note that this data was scaled by the StandardScaler, use the anomaly metadata to unscale if needed.
    */
    'X': { [key: string]: number; };
    /**
    * Label used for datapoint colorscale in anomaly explorer (for gmm only). Is currently the result of the scoring function.
    */
    'label'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "X",
            "baseName": "X",
            "type": "{ [key: string]: number; }"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AnomalyTrainedFeaturesResponseAllOfData.attributeTypeMap;
    }
}

