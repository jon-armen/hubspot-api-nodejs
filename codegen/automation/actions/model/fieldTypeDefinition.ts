/**
 * Custom Workflow Actions
 * Create custom workflow actions
 *
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Option } from './option';

/**
* The data type expected by an input field.
*/
export class FieldTypeDefinition {
    /**
    * The input field name.
    */
    'name': string;
    /**
    * The data type of the field.
    */
    'type': FieldTypeDefinition.TypeEnum;
    /**
    * Controls how the field appears in HubSpot.
    */
    'fieldType'?: FieldTypeDefinition.FieldTypeEnum;
    /**
    * A list of valid options for the field value.
    */
    'options': Array<Option>;
    /**
    * A URL that will accept HTTPS requests when the valid options for the field are fetched.
    */
    'optionsUrl'?: string;
    /**
    * This can be set to `OWNER` if the field should contain a HubSpot owner value.
    */
    'referencedObjectType'?: FieldTypeDefinition.ReferencedObjectTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "FieldTypeDefinition.TypeEnum"
        },
        {
            "name": "fieldType",
            "baseName": "fieldType",
            "type": "FieldTypeDefinition.FieldTypeEnum"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<Option>"
        },
        {
            "name": "optionsUrl",
            "baseName": "optionsUrl",
            "type": "string"
        },
        {
            "name": "referencedObjectType",
            "baseName": "referencedObjectType",
            "type": "FieldTypeDefinition.ReferencedObjectTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return FieldTypeDefinition.attributeTypeMap;
    }
}

export namespace FieldTypeDefinition {
    export enum TypeEnum {
        String = <any> 'string',
        Number = <any> 'number',
        Bool = <any> 'bool',
        Datetime = <any> 'datetime',
        Enumeration = <any> 'enumeration',
        Date = <any> 'date',
        PhoneNumber = <any> 'phone_number',
        CurrencyNumber = <any> 'currency_number',
        Json = <any> 'json',
        ObjectCoordinates = <any> 'object_coordinates'
    }
    export enum FieldTypeEnum {
        Booleancheckbox = <any> 'booleancheckbox',
        Checkbox = <any> 'checkbox',
        Date = <any> 'date',
        File = <any> 'file',
        Number = <any> 'number',
        Phonenumber = <any> 'phonenumber',
        Radio = <any> 'radio',
        Select = <any> 'select',
        Text = <any> 'text',
        Textarea = <any> 'textarea',
        CalculationEquation = <any> 'calculation_equation',
        CalculationRollup = <any> 'calculation_rollup',
        CalculationScore = <any> 'calculation_score',
        CalculationReadTime = <any> 'calculation_read_time',
        Unknown = <any> 'unknown'
    }
    export enum ReferencedObjectTypeEnum {
        Contact = <any> 'CONTACT',
        Company = <any> 'COMPANY',
        Deal = <any> 'DEAL',
        Engagement = <any> 'ENGAGEMENT',
        Ticket = <any> 'TICKET',
        Owner = <any> 'OWNER',
        Product = <any> 'PRODUCT',
        LineItem = <any> 'LINE_ITEM',
        BetDeliverableService = <any> 'BET_DELIVERABLE_SERVICE',
        Content = <any> 'CONTENT',
        Conversation = <any> 'CONVERSATION',
        BetAlert = <any> 'BET_ALERT',
        Portal = <any> 'PORTAL',
        Quote = <any> 'QUOTE',
        FormSubmissionInbounddb = <any> 'FORM_SUBMISSION_INBOUNDDB',
        Quota = <any> 'QUOTA',
        Unsubscribe = <any> 'UNSUBSCRIBE',
        Communication = <any> 'COMMUNICATION',
        FeedbackSubmission = <any> 'FEEDBACK_SUBMISSION',
        Attribution = <any> 'ATTRIBUTION',
        SalesforceSyncError = <any> 'SALESFORCE_SYNC_ERROR',
        RestorableCrmObject = <any> 'RESTORABLE_CRM_OBJECT',
        Hub = <any> 'HUB',
        LandingPage = <any> 'LANDING_PAGE',
        ProductOrFolder = <any> 'PRODUCT_OR_FOLDER',
        Task = <any> 'TASK',
        Form = <any> 'FORM',
        MarketingEmail = <any> 'MARKETING_EMAIL',
        AdAccount = <any> 'AD_ACCOUNT',
        AdCampaign = <any> 'AD_CAMPAIGN',
        AdGroup = <any> 'AD_GROUP',
        Ad = <any> 'AD',
        Keyword = <any> 'KEYWORD',
        Campaign = <any> 'CAMPAIGN',
        SocialChannel = <any> 'SOCIAL_CHANNEL',
        SocialPost = <any> 'SOCIAL_POST',
        SitePage = <any> 'SITE_PAGE',
        BlogPost = <any> 'BLOG_POST',
        Import = <any> 'IMPORT',
        Export = <any> 'EXPORT',
        Cta = <any> 'CTA',
        TaskTemplate = <any> 'TASK_TEMPLATE',
        AutomationPlatformFlow = <any> 'AUTOMATION_PLATFORM_FLOW',
        ObjectList = <any> 'OBJECT_LIST',
        Note = <any> 'NOTE',
        MeetingEvent = <any> 'MEETING_EVENT',
        Call = <any> 'CALL',
        Email = <any> 'EMAIL',
        PublishingTask = <any> 'PUBLISHING_TASK',
        ConversationSession = <any> 'CONVERSATION_SESSION',
        ContactCreateAttribution = <any> 'CONTACT_CREATE_ATTRIBUTION',
        Invoice = <any> 'INVOICE',
        MarketingEvent = <any> 'MARKETING_EVENT',
        ConversationInbox = <any> 'CONVERSATION_INBOX',
        Chatflow = <any> 'CHATFLOW',
        MediaBridge = <any> 'MEDIA_BRIDGE',
        Sequence = <any> 'SEQUENCE',
        SequenceStep = <any> 'SEQUENCE_STEP',
        Forecast = <any> 'FORECAST',
        Snippet = <any> 'SNIPPET',
        Template = <any> 'TEMPLATE',
        Unknown = <any> 'UNKNOWN'
    }
}
