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


/**
* Only fields set in this object will be updated.
*/
export class UpdateProjectRequest {
    /**
    * New logo URL, or set to `null` to remove the logo.
    */
    'logo'?: string;
    /**
    * New project name.
    */
    'name'?: string;
    'description'?: string;
    /**
    * Call this when clicking the Eon compiler setting
    */
    'lastDeployEonCompiler'?: boolean;
    /**
    * MCU used for calculating latency
    */
    'latencyDevice'?: string;
    'experiments'?: Array<string>;
    /**
    * Whether to show the \'Create your first impulse\' section on the dashboard
    */
    'showCreateFirstImpulse'?: boolean;
    /**
    * What labeling flow to use
    */
    'labelingMethod'?: UpdateProjectRequestLabelingMethodEnum;
    /**
    * Whether to show the getting started wizard on the next page load of the dashboard
    */
    'showProjectTypeWizard'?: boolean;
    /**
    * The next step in the getting started wizard, or set to -1 to clear the getting started wizard
    */
    'gettingStartedStep'?: number;
    /**
    * Whether to use GPU for training
    */
    'useGpu'?: boolean;
    /**
    * Number of parallel DSP jobs
    */
    'parallelDspJobs'?: number;
    /**
    * Job limit in minutes
    */
    'computeTimeLimitM'?: number;
    /**
    * DSP file size in MB
    */
    'dspFileSizeMb'?: number;
    'enterprisePerformance'?: boolean;
    /**
    * Amount of RAM allocated to training jobs
    */
    'trainJobRamMb'?: number;
    /**
    * New metadata about the project
    */
    'metadata'?: object;
    /**
    * Readme for the project (in Markdown)
    */
    'readme'?: string;
    'lastAcquisitionLabel'?: string;
    /**
    * The IDs of users who should be notified when a Keras or retrain job is finished.
    */
    'trainJobNotificationUids'?: Array<number>;
    /**
    * The IDs of users who should be notified when a DSP job is finished.
    */
    'dspJobNotificationUids'?: Array<number>;
    /**
    * The IDs of users who should be notified when a model testing job is finished.
    */
    'modelTestingJobNotificationUids'?: Array<number>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "logo",
            "baseName": "logo",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "lastDeployEonCompiler",
            "baseName": "lastDeployEonCompiler",
            "type": "boolean"
        },
        {
            "name": "latencyDevice",
            "baseName": "latencyDevice",
            "type": "string"
        },
        {
            "name": "experiments",
            "baseName": "experiments",
            "type": "Array<string>"
        },
        {
            "name": "showCreateFirstImpulse",
            "baseName": "showCreateFirstImpulse",
            "type": "boolean"
        },
        {
            "name": "labelingMethod",
            "baseName": "labelingMethod",
            "type": "UpdateProjectRequestLabelingMethodEnum"
        },
        {
            "name": "showProjectTypeWizard",
            "baseName": "showProjectTypeWizard",
            "type": "boolean"
        },
        {
            "name": "gettingStartedStep",
            "baseName": "gettingStartedStep",
            "type": "number"
        },
        {
            "name": "useGpu",
            "baseName": "useGpu",
            "type": "boolean"
        },
        {
            "name": "parallelDspJobs",
            "baseName": "parallelDspJobs",
            "type": "number"
        },
        {
            "name": "computeTimeLimitM",
            "baseName": "computeTimeLimitM",
            "type": "number"
        },
        {
            "name": "dspFileSizeMb",
            "baseName": "dspFileSizeMb",
            "type": "number"
        },
        {
            "name": "enterprisePerformance",
            "baseName": "enterprisePerformance",
            "type": "boolean"
        },
        {
            "name": "trainJobRamMb",
            "baseName": "trainJobRamMb",
            "type": "number"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "object"
        },
        {
            "name": "readme",
            "baseName": "readme",
            "type": "string"
        },
        {
            "name": "lastAcquisitionLabel",
            "baseName": "lastAcquisitionLabel",
            "type": "string"
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
        }    ];

    static getAttributeTypeMap() {
        return UpdateProjectRequest.attributeTypeMap;
    }
}


export type UpdateProjectRequestLabelingMethodEnum = 'single_label' | 'object_detection';
export const UpdateProjectRequestLabelingMethodEnumValues: string[] = ['single_label', 'object_detection'];
