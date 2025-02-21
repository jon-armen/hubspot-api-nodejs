/**
 * CRM cards
 * Allows an app to extend the CRM UI by surfacing custom cards in the sidebar of record pages. These cards are defined up-front as part of app configuration, then populated by external data fetch requests when the record page is accessed by a user.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IntegratorObjectResult } from '../models/IntegratorObjectResult';
import { TopLevelActions } from '../models/TopLevelActions';

/**
* The card details payload, sent to HubSpot by an app in response to a data fetch request when a user visits a CRM record page.
*/
export class IntegratorCardPayloadResponse {
    /**
    * The total number of card properties that will be sent in this response.
    */
    'totalCount': number;
    /**
    * URL to a page the integrator has built that displays all details for this card. This URL will be displayed to users under a `See more [x]` link if there are more than five items in your response, where `[x]` is the value of `itemLabel`.
    */
    'allItemsLinkUrl'?: string;
    /**
    * The label to be used for the `allItemsLinkUrl` link (e.g. 'See more tickets'). If not provided, this falls back to the card's title.
    */
    'cardLabel'?: string;
    'topLevelActions'?: TopLevelActions;
    /**
    * A list of up to five valid card sub categories.
    */
    'sections'?: Array<IntegratorObjectResult>;
    'responseVersion'?: IntegratorCardPayloadResponseResponseVersionEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "allItemsLinkUrl",
            "baseName": "allItemsLinkUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "cardLabel",
            "baseName": "cardLabel",
            "type": "string",
            "format": ""
        },
        {
            "name": "topLevelActions",
            "baseName": "topLevelActions",
            "type": "TopLevelActions",
            "format": ""
        },
        {
            "name": "sections",
            "baseName": "sections",
            "type": "Array<IntegratorObjectResult>",
            "format": ""
        },
        {
            "name": "responseVersion",
            "baseName": "responseVersion",
            "type": "IntegratorCardPayloadResponseResponseVersionEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IntegratorCardPayloadResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export type IntegratorCardPayloadResponseResponseVersionEnum = "v1" | "v3" ;

