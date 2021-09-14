/**
 * Tickets
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

export class Filter {
    'value'?: string;
    'propertyName': string;
    /**
    * null
    */
    'operator': Filter.OperatorEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "propertyName",
            "baseName": "propertyName",
            "type": "string"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "Filter.OperatorEnum"
        }    ];

    static getAttributeTypeMap() {
        return Filter.attributeTypeMap;
    }
}

export namespace Filter {
    export enum OperatorEnum {
        Eq = <any> 'EQ',
        Neq = <any> 'NEQ',
        Lt = <any> 'LT',
        Lte = <any> 'LTE',
        Gt = <any> 'GT',
        Gte = <any> 'GTE',
        Between = <any> 'BETWEEN',
        In = <any> 'IN',
        NotIn = <any> 'NOT_IN',
        HasProperty = <any> 'HAS_PROPERTY',
        NotHasProperty = <any> 'NOT_HAS_PROPERTY',
        ContainsToken = <any> 'CONTAINS_TOKEN',
        NotContainsToken = <any> 'NOT_CONTAINS_TOKEN'
    }
}
