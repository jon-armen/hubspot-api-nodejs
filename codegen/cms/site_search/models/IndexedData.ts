/**
 * CMS Site Search
 * Use these endpoints for searching content on your HubSpot hosted CMS website(s).
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IndexedField } from '../models/IndexedField';

/**
* The indexed data in HubSpot
*/
export class IndexedData {
    /**
    * The ID of the document in HubSpot.
    */
    'id': string;
    /**
    * The type of document. Can be `SITE_PAGE`, `LANDING_PAGE`, `BLOG_POST`, `LISTING_PAGE`, or `KNOWLEDGE_ARTICLE`.
    */
    'type': IndexedDataTypeEnum;
    /**
    * The indexed fields in HubSpot.
    */
    'fields': { [key: string]: IndexedField; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IndexedDataTypeEnum",
            "format": ""
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "{ [key: string]: IndexedField; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IndexedData.attributeTypeMap;
    }

    public constructor() {
    }
}


export type IndexedDataTypeEnum = "LANDING_PAGE" | "BLOG_POST" | "SITE_PAGE" | "KNOWLEDGE_ARTICLE" | "LISTING_PAGE" ;

