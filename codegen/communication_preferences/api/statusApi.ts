/**
 * Subscriptions
 * Subscriptions allow contacts to control what forms of communications they receive. Contacts can decide whether they want to receive communication pertaining to a specific topic, brand, or an entire HubSpot account.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { PublicSubscriptionStatus } from '../model/publicSubscriptionStatus';
import { PublicSubscriptionStatusesResponse } from '../model/publicSubscriptionStatusesResponse';
import { PublicUpdateSubscriptionStatusRequest } from '../model/publicUpdateSubscriptionStatusRequest';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.hubapi.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum StatusApiApiKeys {
    hapikey,
}

export class StatusApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'hapikey': new ApiKeyAuth('query', 'hapikey'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: StatusApiApiKeys, value: string) {
        (this.authentications as any)[StatusApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Returns a list of subscriptions and their status for a given contact.
     * @summary Get subscription statuses for a contact
     * @param emailAddress 
     */
    public async getEmailStatus (emailAddress: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PublicSubscriptionStatusesResponse;  }> {
        const localVarPath = this.basePath + '/communication-preferences/v3/status/email/{emailAddress}'
            .replace('{' + 'emailAddress' + '}', encodeURIComponent(String(emailAddress)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', '*/*'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'emailAddress' is not null or undefined
        if (emailAddress === null || emailAddress === undefined) {
            throw new Error('Required parameter emailAddress was null or undefined when calling getEmailStatus.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.hapikey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.hapikey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PublicSubscriptionStatusesResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PublicSubscriptionStatusesResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Subscribes a contact to the given subscription type. This API is not valid to use for subscribing a contact at a brand or portal level and will return an error.
     * @summary Subscribe a contact
     * @param publicUpdateSubscriptionStatusRequest 
     */
    public async subscribe (publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PublicSubscriptionStatus;  }> {
        const localVarPath = this.basePath + '/communication-preferences/v3/subscribe';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', '*/*'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'publicUpdateSubscriptionStatusRequest' is not null or undefined
        if (publicUpdateSubscriptionStatusRequest === null || publicUpdateSubscriptionStatusRequest === undefined) {
            throw new Error('Required parameter publicUpdateSubscriptionStatusRequest was null or undefined when calling subscribe.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(publicUpdateSubscriptionStatusRequest, "PublicUpdateSubscriptionStatusRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.hapikey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.hapikey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PublicSubscriptionStatus;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PublicSubscriptionStatus");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Unsubscribes a contact from the given subscription type. This API is not valid to use for unsubscribing a contact at a brand or portal level and will return an error.
     * @summary Unsubscribe a contact
     * @param publicUpdateSubscriptionStatusRequest 
     */
    public async unsubscribe (publicUpdateSubscriptionStatusRequest: PublicUpdateSubscriptionStatusRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PublicSubscriptionStatus;  }> {
        const localVarPath = this.basePath + '/communication-preferences/v3/unsubscribe';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', '*/*'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'publicUpdateSubscriptionStatusRequest' is not null or undefined
        if (publicUpdateSubscriptionStatusRequest === null || publicUpdateSubscriptionStatusRequest === undefined) {
            throw new Error('Required parameter publicUpdateSubscriptionStatusRequest was null or undefined when calling unsubscribe.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(publicUpdateSubscriptionStatusRequest, "PublicUpdateSubscriptionStatusRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.hapikey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.hapikey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PublicSubscriptionStatus;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PublicSubscriptionStatus");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
