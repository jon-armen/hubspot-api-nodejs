/**
 * Properties
 * All HubSpot objects store data in default and custom properties. These endpoints provide access to read and modify object properties in HubSpot.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class PropertyModificationMetadata {
    'archivable': boolean;
    'readOnlyDefinition': boolean;
    'readOnlyOptions'?: boolean;
    'readOnlyValue': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "archivable",
            "baseName": "archivable",
            "type": "boolean"
        },
        {
            "name": "readOnlyDefinition",
            "baseName": "readOnlyDefinition",
            "type": "boolean"
        },
        {
            "name": "readOnlyOptions",
            "baseName": "readOnlyOptions",
            "type": "boolean"
        },
        {
            "name": "readOnlyValue",
            "baseName": "readOnlyValue",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PropertyModificationMetadata.attributeTypeMap;
    }
}

