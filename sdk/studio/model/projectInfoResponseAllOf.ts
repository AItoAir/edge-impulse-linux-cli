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

import { DevelopmentKeys } from './developmentKeys';
import { Device } from './device';
import { Project } from './project';
import { ProjectDataSummary } from './projectDataSummary';
import { ProjectInfoResponseAllOfAcquisitionSettings } from './projectInfoResponseAllOfAcquisitionSettings';
import { ProjectInfoResponseAllOfComputeTime } from './projectInfoResponseAllOfComputeTime';
import { ProjectInfoResponseAllOfDataSummaryPerCategory } from './projectInfoResponseAllOfDataSummaryPerCategory';
import { ProjectInfoResponseAllOfDeploySettings } from './projectInfoResponseAllOfDeploySettings';
import { ProjectInfoResponseAllOfExperiments } from './projectInfoResponseAllOfExperiments';
import { ProjectInfoResponseAllOfImpulse } from './projectInfoResponseAllOfImpulse';
import { ProjectInfoResponseAllOfLatencyDevices } from './projectInfoResponseAllOfLatencyDevices';
import { ProjectInfoResponseAllOfPerformance } from './projectInfoResponseAllOfPerformance';
import { ProjectInfoResponseAllOfReadme } from './projectInfoResponseAllOfReadme';
import { ProjectInfoResponseAllOfShowGettingStartedWizard } from './projectInfoResponseAllOfShowGettingStartedWizard';
import { ProjectInfoResponseAllOfUrls } from './projectInfoResponseAllOfUrls';
import { User } from './user';

export class ProjectInfoResponseAllOf {
    'project': Project;
    'developmentKeys': DevelopmentKeys;
    'impulse': ProjectInfoResponseAllOfImpulse;
    'devices': Array<Device>;
    'dataSummary': ProjectDataSummary;
    'dataSummaryPerCategory': ProjectInfoResponseAllOfDataSummaryPerCategory;
    'computeTime': ProjectInfoResponseAllOfComputeTime;
    'acquisitionSettings': ProjectInfoResponseAllOfAcquisitionSettings;
    'collaborators': Array<User>;
    'deploySettings': ProjectInfoResponseAllOfDeploySettings;
    /**
    * Experiments that the project has access to. Enabling experiments can only be done through a JWT token.
    */
    'experiments': Array<ProjectInfoResponseAllOfExperiments>;
    'latencyDevices': Array<ProjectInfoResponseAllOfLatencyDevices>;
    'urls': ProjectInfoResponseAllOfUrls;
    'showCreateFirstImpulse': boolean;
    'showProjectTypeWizard': boolean;
    'showGettingStartedWizard': ProjectInfoResponseAllOfShowGettingStartedWizard;
    'performance': ProjectInfoResponseAllOfPerformance;
    'readme'?: ProjectInfoResponseAllOfReadme;
    /**
    * The IDs of users who should be notified when a Keras or retrain job is finished.
    */
    'trainJobNotificationUids': Array<number>;
    /**
    * The IDs of users who should be notified when a DSP job is finished.
    */
    'dspJobNotificationUids': Array<number>;
    /**
    * The IDs of users who should be notified when a model testing job is finished.
    */
    'modelTestingJobNotificationUids': Array<number>;
    'hasNewTrainingData': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "project",
            "baseName": "project",
            "type": "Project"
        },
        {
            "name": "developmentKeys",
            "baseName": "developmentKeys",
            "type": "DevelopmentKeys"
        },
        {
            "name": "impulse",
            "baseName": "impulse",
            "type": "ProjectInfoResponseAllOfImpulse"
        },
        {
            "name": "devices",
            "baseName": "devices",
            "type": "Array<Device>"
        },
        {
            "name": "dataSummary",
            "baseName": "dataSummary",
            "type": "ProjectDataSummary"
        },
        {
            "name": "dataSummaryPerCategory",
            "baseName": "dataSummaryPerCategory",
            "type": "ProjectInfoResponseAllOfDataSummaryPerCategory"
        },
        {
            "name": "computeTime",
            "baseName": "computeTime",
            "type": "ProjectInfoResponseAllOfComputeTime"
        },
        {
            "name": "acquisitionSettings",
            "baseName": "acquisitionSettings",
            "type": "ProjectInfoResponseAllOfAcquisitionSettings"
        },
        {
            "name": "collaborators",
            "baseName": "collaborators",
            "type": "Array<User>"
        },
        {
            "name": "deploySettings",
            "baseName": "deploySettings",
            "type": "ProjectInfoResponseAllOfDeploySettings"
        },
        {
            "name": "experiments",
            "baseName": "experiments",
            "type": "Array<ProjectInfoResponseAllOfExperiments>"
        },
        {
            "name": "latencyDevices",
            "baseName": "latencyDevices",
            "type": "Array<ProjectInfoResponseAllOfLatencyDevices>"
        },
        {
            "name": "urls",
            "baseName": "urls",
            "type": "ProjectInfoResponseAllOfUrls"
        },
        {
            "name": "showCreateFirstImpulse",
            "baseName": "showCreateFirstImpulse",
            "type": "boolean"
        },
        {
            "name": "showProjectTypeWizard",
            "baseName": "showProjectTypeWizard",
            "type": "boolean"
        },
        {
            "name": "showGettingStartedWizard",
            "baseName": "showGettingStartedWizard",
            "type": "ProjectInfoResponseAllOfShowGettingStartedWizard"
        },
        {
            "name": "performance",
            "baseName": "performance",
            "type": "ProjectInfoResponseAllOfPerformance"
        },
        {
            "name": "readme",
            "baseName": "readme",
            "type": "ProjectInfoResponseAllOfReadme"
        },
        {
            "name": "trainJobNotificationUids",
            "baseName": "trainJobNotificationUids",
            "type": "Array<number>"
        },
        {
            "name": "dspJobNotificationUids",
            "baseName": "dspJobNotificationUids",
            "type": "Array<number>"
        },
        {
            "name": "modelTestingJobNotificationUids",
            "baseName": "modelTestingJobNotificationUids",
            "type": "Array<number>"
        },
        {
            "name": "hasNewTrainingData",
            "baseName": "hasNewTrainingData",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ProjectInfoResponseAllOf.attributeTypeMap;
    }
}

