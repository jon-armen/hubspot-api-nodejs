/**
 * Transactional Email
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EventIdView } from './EventIdView';
import { HttpFile } from '../http/http';

/**
* Describes the status of an email send request.
*/
export class EmailSendStatusView {
    /**
    * Identifier used to query the status of the send.
    */
    'statusId': string;
    /**
    * Result of the send.
    */
    'sendResult'?: EmailSendStatusViewSendResultEnum;
    /**
    * Time when the send was requested.
    */
    'requestedAt'?: Date;
    /**
    * Time when the send began processing.
    */
    'startedAt'?: Date;
    /**
    * Time when the send was completed.
    */
    'completedAt'?: Date;
    /**
    * Status of the send request.
    */
    'status': EmailSendStatusViewStatusEnum;
    'eventId'?: EventIdView;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "statusId",
            "baseName": "statusId",
            "type": "string",
            "format": ""
        },
        {
            "name": "sendResult",
            "baseName": "sendResult",
            "type": "EmailSendStatusViewSendResultEnum",
            "format": ""
        },
        {
            "name": "requestedAt",
            "baseName": "requestedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "completedAt",
            "baseName": "completedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "EmailSendStatusViewStatusEnum",
            "format": ""
        },
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "EventIdView",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailSendStatusView.attributeTypeMap;
    }

    public constructor() {
    }
}


export type EmailSendStatusViewSendResultEnum = "SENT" | "IDEMPOTENT_IGNORE" | "QUEUED" | "IDEMPOTENT_FAIL" | "THROTTLED" | "EMAIL_DISABLED" | "PORTAL_SUSPENDED" | "INVALID_TO_ADDRESS" | "BLOCKED_DOMAIN" | "PREVIOUSLY_BOUNCED" | "EMAIL_UNCONFIRMED" | "PREVIOUS_SPAM" | "PREVIOUSLY_UNSUBSCRIBED_MESSAGE" | "PREVIOUSLY_UNSUBSCRIBED_PORTAL" | "INVALID_FROM_ADDRESS" | "CAMPAIGN_CANCELLED" | "VALIDATION_FAILED" | "MTA_IGNORE" | "BLOCKED_ADDRESS" | "PORTAL_OVER_LIMIT" | "PORTAL_EXPIRED" | "PORTAL_MISSING_MARKETING_SCOPE" | "MISSING_TEMPLATE_PROPERTIES" | "MISSING_REQUIRED_PARAMETER" | "PORTAL_AUTHENTICATION_FAILURE" | "MISSING_CONTENT" | "CORRUPT_INPUT" | "TEMPLATE_RENDER_EXCEPTION" | "GRAYMAIL_SUPPRESSED" | "UNCONFIGURED_SENDING_DOMAIN" | "UNDELIVERABLE" | "CANCELLED_ABUSE" | "QUARANTINED_ADDRESS" | "ADDRESS_ONLY_ACCEPTED_ON_PROD" | "PORTAL_NOT_AUTHORIZED_FOR_APPLICATION" | "ADDRESS_LIST_BOMBED" | "ADDRESS_OPTED_OUT" | "RECIPIENT_FATIGUE_SUPPRESSED" | "TOO_MANY_RECIPIENTS" | "PREVIOUSLY_UNSUBSCRIBED_BRAND" | "NON_MARKETABLE_CONTACT" | "PREVIOUSLY_UNSUBSCRIBED_BUSINESS_UNIT" ;
export type EmailSendStatusViewStatusEnum = "PENDING" | "PROCESSING" | "CANCELED" | "COMPLETE" ;

