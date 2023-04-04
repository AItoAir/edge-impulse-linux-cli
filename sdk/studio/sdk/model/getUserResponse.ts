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
import { GetUserResponseAllOf } from './getUserResponseAllOf';
import { GetUserResponseAllOfWhitelabels } from './getUserResponseAllOfWhitelabels';
import { Project } from './project';
import { StaffInfo } from './staffInfo';
import { User } from './user';
import { UserExperiment } from './userExperiment';
import { UserOrganization } from './userOrganization';

export class GetUserResponse {
    /**
    * Whether the operation succeeded
    */
    'success': boolean;
    /**
    * Optional error description (set if \'success\' was false)
    */
    'error'?: string;
    'id': number;
    'username': string;
    'name': string;
    'photo'?: string;
    'created': Date;
    'lastSeen'?: Date;
    'staffInfo': StaffInfo;
    'pending': boolean;
    'lastTosAcceptanceDate'?: Date;
    'jobTitle'?: string;
    'email': string;
    'activated': boolean;
    /**
    * Organizations that the user is a member of. Only filled when requesting information about yourself.
    */
    'organizations': Array<UserOrganization>;
    'projects': Array<Project>;
    /**
    * Experiments the user has access to. Enabling experiments can only be done through a JWT token.
    */
    'experiments': Array<UserExperiment>;
    /**
    * Whether this is an ephemeral evaluation account.
    */
    'evaluation'?: boolean;
    /**
    * Whether this user is an ambassador.
    */
    'ambassador'?: boolean;
    /**
    * Whether to show the Imagine 2022 banner.
    */
    'showImagine2022': boolean;
    /**
    * The user account tier.
    */
    'tier': GetUserResponseTierEnum;
    /**
    * List of white labels the user is a member of
    */
    'whitelabels'?: Array<GetUserResponseAllOfWhitelabels>;

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
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "photo",
            "baseName": "photo",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "lastSeen",
            "baseName": "lastSeen",
            "type": "Date"
        },
        {
            "name": "staffInfo",
            "baseName": "staffInfo",
            "type": "StaffInfo"
        },
        {
            "name": "pending",
            "baseName": "pending",
            "type": "boolean"
        },
        {
            "name": "lastTosAcceptanceDate",
            "baseName": "lastTosAcceptanceDate",
            "type": "Date"
        },
        {
            "name": "jobTitle",
            "baseName": "jobTitle",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "activated",
            "baseName": "activated",
            "type": "boolean"
        },
        {
            "name": "organizations",
            "baseName": "organizations",
            "type": "Array<UserOrganization>"
        },
        {
            "name": "projects",
            "baseName": "projects",
            "type": "Array<Project>"
        },
        {
            "name": "experiments",
            "baseName": "experiments",
            "type": "Array<UserExperiment>"
        },
        {
            "name": "evaluation",
            "baseName": "evaluation",
            "type": "boolean"
        },
        {
            "name": "ambassador",
            "baseName": "ambassador",
            "type": "boolean"
        },
        {
            "name": "showImagine2022",
            "baseName": "showImagine2022",
            "type": "boolean"
        },
        {
            "name": "tier",
            "baseName": "tier",
            "type": "GetUserResponseTierEnum"
        },
        {
            "name": "whitelabels",
            "baseName": "whitelabels",
            "type": "Array<GetUserResponseAllOfWhitelabels>"
        }    ];

    static getAttributeTypeMap() {
        return GetUserResponse.attributeTypeMap;
    }
}


export type GetUserResponseTierEnum = 'free' | 'pro';
export const GetUserResponseTierEnumValues: string[] = ['free', 'pro'];
