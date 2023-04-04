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

import { GetLastDeploymentBuildResponseAllOfLastBuild } from './getLastDeploymentBuildResponseAllOfLastBuild';

export class GetLastDeploymentBuildResponseAllOf {
    /**
    * Does the deployment build still exist? (Builds are deleted if they are no longer valid for the project)
    */
    'hasBuild': boolean;
    'lastBuild'?: GetLastDeploymentBuildResponseAllOfLastBuild;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hasBuild",
            "baseName": "hasBuild",
            "type": "boolean"
        },
        {
            "name": "lastBuild",
            "baseName": "lastBuild",
            "type": "GetLastDeploymentBuildResponseAllOfLastBuild"
        }    ];

    static getAttributeTypeMap() {
        return GetLastDeploymentBuildResponseAllOf.attributeTypeMap;
    }
}

