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

import { GenericApiResponse } from './genericApiResponse';
import { ListOrganizationPipelinesResponseAllOf } from './listOrganizationPipelinesResponseAllOf';
import { OrganizationPipeline } from './organizationPipeline';

export class ListOrganizationPipelinesResponse {
    /**
    * Whether the operation succeeded
    */
    'success': boolean;
    /**
    * Optional error description (set if \'success\' was false)
    */
    'error'?: string;
    'pipelines': Array<OrganizationPipeline>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "pipelines",
            "baseName": "pipelines",
            "type": "Array<OrganizationPipeline>"
        }    ];

    static getAttributeTypeMap() {
        return ListOrganizationPipelinesResponse.attributeTypeMap;
    }
}
