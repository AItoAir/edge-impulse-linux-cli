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

import { OrganizationCreateProjectFiles } from './organizationCreateProjectFiles';
import { OrganizationCreateProjectTransformationSummary } from './organizationCreateProjectTransformationSummary';

export class OrganizationCreateProject {
    'id': number;
    'organizationId': number;
    'name': string;
    'uploadType': OrganizationCreateProjectUploadTypeEnum;
    'status': OrganizationCreateProjectStatusEnum;
    'transformJobStatus': OrganizationCreateProjectTransformJobStatusEnum;
    'uploadJobId'?: number;
    'uploadJobStatus': OrganizationCreateProjectUploadJobStatusEnum;
    'uploadJobFilesUploaded'?: number;
    'projectOwner'?: string;
    'projectId'?: number;
    'projectName'?: string;
    'transformationBlockId'?: number;
    'builtinTransformationBlock'?: object;
    'transformationBlockName'?: string;
    'category': OrganizationCreateProjectCategoryEnum;
    'created': Date;
    'outputDatasetName'?: string;
    'totalDownloadFileCount': number;
    'totalDownloadFileSize': number;
    'totalDownloadFileSizeString': string;
    'totalUploadFileCount': number;
    /**
    * Number of transformation jobs that can be ran in parallel
    */
    'transformationParallel': number;
    'transformationSummary': OrganizationCreateProjectTransformationSummary;
    'files': Array<OrganizationCreateProjectFiles>;
    'inProgress': boolean;
    'label'?: string;
    'filterQuery'?: string;
    'emailRecipientUids'?: Array<number>;
    'pipelineId'?: number;
    'pipelineName'?: string;
    'pipelineRunId'?: number;
    'pipelineStep'?: number;
    'operatesOn': OrganizationCreateProjectOperatesOnEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "organizationId",
            "baseName": "organizationId",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "uploadType",
            "baseName": "uploadType",
            "type": "OrganizationCreateProjectUploadTypeEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OrganizationCreateProjectStatusEnum"
        },
        {
            "name": "transformJobStatus",
            "baseName": "transformJobStatus",
            "type": "OrganizationCreateProjectTransformJobStatusEnum"
        },
        {
            "name": "uploadJobId",
            "baseName": "uploadJobId",
            "type": "number"
        },
        {
            "name": "uploadJobStatus",
            "baseName": "uploadJobStatus",
            "type": "OrganizationCreateProjectUploadJobStatusEnum"
        },
        {
            "name": "uploadJobFilesUploaded",
            "baseName": "uploadJobFilesUploaded",
            "type": "number"
        },
        {
            "name": "projectOwner",
            "baseName": "projectOwner",
            "type": "string"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "projectName",
            "baseName": "projectName",
            "type": "string"
        },
        {
            "name": "transformationBlockId",
            "baseName": "transformationBlockId",
            "type": "number"
        },
        {
            "name": "builtinTransformationBlock",
            "baseName": "builtinTransformationBlock",
            "type": "object"
        },
        {
            "name": "transformationBlockName",
            "baseName": "transformationBlockName",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "OrganizationCreateProjectCategoryEnum"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "outputDatasetName",
            "baseName": "outputDatasetName",
            "type": "string"
        },
        {
            "name": "totalDownloadFileCount",
            "baseName": "totalDownloadFileCount",
            "type": "number"
        },
        {
            "name": "totalDownloadFileSize",
            "baseName": "totalDownloadFileSize",
            "type": "number"
        },
        {
            "name": "totalDownloadFileSizeString",
            "baseName": "totalDownloadFileSizeString",
            "type": "string"
        },
        {
            "name": "totalUploadFileCount",
            "baseName": "totalUploadFileCount",
            "type": "number"
        },
        {
            "name": "transformationParallel",
            "baseName": "transformationParallel",
            "type": "number"
        },
        {
            "name": "transformationSummary",
            "baseName": "transformationSummary",
            "type": "OrganizationCreateProjectTransformationSummary"
        },
        {
            "name": "files",
            "baseName": "files",
            "type": "Array<OrganizationCreateProjectFiles>"
        },
        {
            "name": "inProgress",
            "baseName": "inProgress",
            "type": "boolean"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "filterQuery",
            "baseName": "filterQuery",
            "type": "string"
        },
        {
            "name": "emailRecipientUids",
            "baseName": "emailRecipientUids",
            "type": "Array<number>"
        },
        {
            "name": "pipelineId",
            "baseName": "pipelineId",
            "type": "number"
        },
        {
            "name": "pipelineName",
            "baseName": "pipelineName",
            "type": "string"
        },
        {
            "name": "pipelineRunId",
            "baseName": "pipelineRunId",
            "type": "number"
        },
        {
            "name": "pipelineStep",
            "baseName": "pipelineStep",
            "type": "number"
        },
        {
            "name": "operatesOn",
            "baseName": "operatesOn",
            "type": "OrganizationCreateProjectOperatesOnEnum"
        }    ];

    static getAttributeTypeMap() {
        return OrganizationCreateProject.attributeTypeMap;
    }
}


export type OrganizationCreateProjectUploadTypeEnum = 'dataset' | 'project';
export const OrganizationCreateProjectUploadTypeEnumValues: string[] = ['dataset', 'project'];

export type OrganizationCreateProjectStatusEnum = 'waiting' | 'created' | 'started' | 'finished' | 'failed';
export const OrganizationCreateProjectStatusEnumValues: string[] = ['waiting', 'created', 'started', 'finished', 'failed'];

export type OrganizationCreateProjectTransformJobStatusEnum = 'waiting' | 'created' | 'started' | 'finished' | 'failed';
export const OrganizationCreateProjectTransformJobStatusEnumValues: string[] = ['waiting', 'created', 'started', 'finished', 'failed'];

export type OrganizationCreateProjectUploadJobStatusEnum = 'waiting' | 'created' | 'started' | 'finished' | 'failed';
export const OrganizationCreateProjectUploadJobStatusEnumValues: string[] = ['waiting', 'created', 'started', 'finished', 'failed'];

export type OrganizationCreateProjectCategoryEnum = 'training' | 'testing' | 'split';
export const OrganizationCreateProjectCategoryEnumValues: string[] = ['training', 'testing', 'split'];

export type OrganizationCreateProjectOperatesOnEnum = 'file' | 'dataitem' | 'standalone';
export const OrganizationCreateProjectOperatesOnEnumValues: string[] = ['file', 'dataitem', 'standalone'];
