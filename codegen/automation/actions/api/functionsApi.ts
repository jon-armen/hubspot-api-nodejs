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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { ActionFunction } from '../model/actionFunction';
import { ActionFunctionIdentifier } from '../model/actionFunctionIdentifier';
import { CollectionResponseActionFunctionIdentifierNoPaging } from '../model/collectionResponseActionFunctionIdentifierNoPaging';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.hubapi.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum FunctionsApiApiKeys {
    developer_hapikey,
    hapikey,
}

export class FunctionsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'developer_hapikey': new ApiKeyAuth('query', 'hapikey'),
        'hapikey': new ApiKeyAuth('query', 'hapikey'),
        'oauth2': new OAuth(),
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

    public setApiKey(key: FunctionsApiApiKeys, value: string) {
        (this.authentications as any)[FunctionsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can\'t be undone.
     * @summary Delete a custom action function
     * @param definitionId The ID of the custom workflow action
     * @param functionType The type of function. This determines when the function will be called.
     * @param functionId The ID qualifier for the function. This is used to specify which input field a function is associated with for &#x60;PRE_FETCH_OPTIONS&#x60; and &#x60;POST_FETCH_OPTIONS&#x60; function types.
     * @param appId 
     */
    public async archive (definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', functionId: string, appId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'functionType' + '}', encodeURIComponent(String(functionType)))
            .replace('{' + 'functionId' + '}', encodeURIComponent(String(functionId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['*/*'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new Error('Required parameter definitionId was null or undefined when calling archive.');
        }

        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new Error('Required parameter functionType was null or undefined when calling archive.');
        }

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new Error('Required parameter functionId was null or undefined when calling archive.');
        }

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new Error('Required parameter appId was null or undefined when calling archive.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.developer_hapikey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.developer_hapikey.applyToRequest(localVarRequestOptions));
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
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
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
     * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can\'t be undone.
     * @summary Delete a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param appId 
     */
    public async archiveByFunctionType (definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', appId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'functionType' + '}', encodeURIComponent(String(functionType)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['*/*'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new Error('Required parameter definitionId was null or undefined when calling archiveByFunctionType.');
        }

        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new Error('Required parameter functionType was null or undefined when calling archiveByFunctionType.');
        }

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new Error('Required parameter appId was null or undefined when calling archiveByFunctionType.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.developer_hapikey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.developer_hapikey.applyToRequest(localVarRequestOptions));
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
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
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
     * Creates or replaces a function for a custom workflow action.
     * @summary Create or replace a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param functionId The ID qualifier for the function. This is used to specify which input field a function is associated with for &#x60;PRE_FETCH_OPTIONS&#x60; and &#x60;POST_FETCH_OPTIONS&#x60; function types.
     * @param appId 
     * @param body The function source code. Must be valid JavaScript code.
     */
    public async createOrReplace (definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', functionId: string, appId: number, body: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ActionFunctionIdentifier;  }> {
        const localVarPath = this.basePath + '/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'functionType' + '}', encodeURIComponent(String(functionType)))
            .replace('{' + 'functionId' + '}', encodeURIComponent(String(functionId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));
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

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new Error('Required parameter definitionId was null or undefined when calling createOrReplace.');
        }

        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new Error('Required parameter functionType was null or undefined when calling createOrReplace.');
        }

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new Error('Required parameter functionId was null or undefined when calling createOrReplace.');
        }

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new Error('Required parameter appId was null or undefined when calling createOrReplace.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createOrReplace.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "string")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.developer_hapikey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.developer_hapikey.applyToRequest(localVarRequestOptions));
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
            return new Promise<{ response: http.IncomingMessage; body: ActionFunctionIdentifier;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ActionFunctionIdentifier");
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
     * Creates or replaces a function for a custom workflow action.
     * @summary Create or replace a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param appId 
     * @param body The function source code. Must be valid JavaScript code.
     */
    public async createOrReplaceByFunctionType (definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', appId: number, body: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ActionFunctionIdentifier;  }> {
        const localVarPath = this.basePath + '/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'functionType' + '}', encodeURIComponent(String(functionType)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));
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

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new Error('Required parameter definitionId was null or undefined when calling createOrReplaceByFunctionType.');
        }

        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new Error('Required parameter functionType was null or undefined when calling createOrReplaceByFunctionType.');
        }

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new Error('Required parameter appId was null or undefined when calling createOrReplaceByFunctionType.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createOrReplaceByFunctionType.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "string")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.developer_hapikey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.developer_hapikey.applyToRequest(localVarRequestOptions));
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
            return new Promise<{ response: http.IncomingMessage; body: ActionFunctionIdentifier;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ActionFunctionIdentifier");
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
     * Returns the given function for a custom workflow action.
     * @summary Get a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param appId 
     */
    public async getByFunctionType (definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', appId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ActionFunction;  }> {
        const localVarPath = this.basePath + '/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'functionType' + '}', encodeURIComponent(String(functionType)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));
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

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new Error('Required parameter definitionId was null or undefined when calling getByFunctionType.');
        }

        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new Error('Required parameter functionType was null or undefined when calling getByFunctionType.');
        }

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new Error('Required parameter appId was null or undefined when calling getByFunctionType.');
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
        if (this.authentications.developer_hapikey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.developer_hapikey.applyToRequest(localVarRequestOptions));
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
            return new Promise<{ response: http.IncomingMessage; body: ActionFunction;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ActionFunction");
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
     * Returns the given function for a custom workflow action.
     * @summary Get a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param functionId The ID qualifier for the function. This is used to specify which input field a function is associated with for &#x60;PRE_FETCH_OPTIONS&#x60; and &#x60;POST_FETCH_OPTIONS&#x60; function types.
     * @param appId 
     */
    public async getById (definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', functionId: string, appId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ActionFunction;  }> {
        const localVarPath = this.basePath + '/automation/v4/actions/{appId}/{definitionId}/functions/{functionType}/{functionId}'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'functionType' + '}', encodeURIComponent(String(functionType)))
            .replace('{' + 'functionId' + '}', encodeURIComponent(String(functionId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));
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

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new Error('Required parameter definitionId was null or undefined when calling getById.');
        }

        // verify required parameter 'functionType' is not null or undefined
        if (functionType === null || functionType === undefined) {
            throw new Error('Required parameter functionType was null or undefined when calling getById.');
        }

        // verify required parameter 'functionId' is not null or undefined
        if (functionId === null || functionId === undefined) {
            throw new Error('Required parameter functionId was null or undefined when calling getById.');
        }

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new Error('Required parameter appId was null or undefined when calling getById.');
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
        if (this.authentications.developer_hapikey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.developer_hapikey.applyToRequest(localVarRequestOptions));
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
            return new Promise<{ response: http.IncomingMessage; body: ActionFunction;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ActionFunction");
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
     * Returns a list of all functions that are associated with the given custom workflow action.
     * @summary Get all custom action functions
     * @param definitionId The ID of the custom workflow action.
     * @param appId 
     */
    public async getPage (definitionId: string, appId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CollectionResponseActionFunctionIdentifierNoPaging;  }> {
        const localVarPath = this.basePath + '/automation/v4/actions/{appId}/{definitionId}/functions'
            .replace('{' + 'definitionId' + '}', encodeURIComponent(String(definitionId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));
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

        // verify required parameter 'definitionId' is not null or undefined
        if (definitionId === null || definitionId === undefined) {
            throw new Error('Required parameter definitionId was null or undefined when calling getPage.');
        }

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new Error('Required parameter appId was null or undefined when calling getPage.');
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
        if (this.authentications.developer_hapikey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.developer_hapikey.applyToRequest(localVarRequestOptions));
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
            return new Promise<{ response: http.IncomingMessage; body: CollectionResponseActionFunctionIdentifierNoPaging;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "CollectionResponseActionFunctionIdentifierNoPaging");
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
