/**
 * Line Items
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class AssociationSpecWithLabel {
    'category': AssociationSpecWithLabelCategoryEnum;
    'typeId': number;
    'label'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "category",
            "baseName": "category",
            "type": "AssociationSpecWithLabelCategoryEnum",
            "format": ""
        },
        {
            "name": "typeId",
            "baseName": "typeId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AssociationSpecWithLabel.attributeTypeMap;
    }

    public constructor() {
    }
}


export type AssociationSpecWithLabelCategoryEnum = "HUBSPOT_DEFINED" | "USER_DEFINED" | "INTEGRATOR_DEFINED" ;

