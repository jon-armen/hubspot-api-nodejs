/**
 * Contacts
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { SimplePublicObjectBatchInput } from './simplePublicObjectBatchInput';

export class BatchInputSimplePublicObjectBatchInput {
    'inputs': Array<SimplePublicObjectBatchInput>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<SimplePublicObjectBatchInput>"
        }    ];

    static getAttributeTypeMap() {
        return BatchInputSimplePublicObjectBatchInput.attributeTypeMap;
    }
}

