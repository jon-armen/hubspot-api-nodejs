/**
 * Custom Workflow Actions
 * Create custom workflow actions
 *
 * OpenAPI spec version: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ExtensionActionDefinitionPatchInputFieldDependenciesInner {
    'dependencyType': ExtensionActionDefinitionPatchInputFieldDependenciesInnerDependencyTypeEnum;
    'dependentFieldNames': Array<string>;
    'controllingFieldName': string;
    'controllingFieldValue': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dependencyType",
            "baseName": "dependencyType",
            "type": "ExtensionActionDefinitionPatchInputFieldDependenciesInnerDependencyTypeEnum",
            "format": ""
        },
        {
            "name": "dependentFieldNames",
            "baseName": "dependentFieldNames",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "controllingFieldName",
            "baseName": "controllingFieldName",
            "type": "string",
            "format": ""
        },
        {
            "name": "controllingFieldValue",
            "baseName": "controllingFieldValue",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ExtensionActionDefinitionPatchInputFieldDependenciesInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ExtensionActionDefinitionPatchInputFieldDependenciesInnerDependencyTypeEnum = "CONDITIONAL_SINGLE_FIELD" ;

