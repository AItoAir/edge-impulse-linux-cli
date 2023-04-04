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

import { ListOrganizationProjectsDataResponseAllOfProjects } from './listOrganizationProjectsDataResponseAllOfProjects';
import { Sample } from './sample';

export class ListOrganizationProjectsDataResponseAllOf {
    'projects': Array<ListOrganizationProjectsDataResponseAllOfProjects>;
    'samples': Array<Sample>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "projects",
            "baseName": "projects",
            "type": "Array<ListOrganizationProjectsDataResponseAllOfProjects>"
        },
        {
            "name": "samples",
            "baseName": "samples",
            "type": "Array<Sample>"
        }    ];

    static getAttributeTypeMap() {
        return ListOrganizationProjectsDataResponseAllOf.attributeTypeMap;
    }
}

