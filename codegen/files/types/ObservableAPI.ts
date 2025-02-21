import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponseFile } from '../models/CollectionResponseFile';
import { CollectionResponseFolder } from '../models/CollectionResponseFolder';
import { FileActionResponse } from '../models/FileActionResponse';
import { FileUpdateInput } from '../models/FileUpdateInput';
import { Folder } from '../models/Folder';
import { FolderActionResponse } from '../models/FolderActionResponse';
import { FolderInput } from '../models/FolderInput';
import { FolderUpdateInput } from '../models/FolderUpdateInput';
import { FolderUpdateTaskLocator } from '../models/FolderUpdateTaskLocator';
import { ImportFromUrlInput } from '../models/ImportFromUrlInput';
import { ImportFromUrlTaskLocator } from '../models/ImportFromUrlTaskLocator';
import { SignedUrl } from '../models/SignedUrl';

import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";
export class ObservableFilesApi {
    private requestFactory: FilesApiRequestFactory;
    private responseProcessor: FilesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FilesApiRequestFactory,
        responseProcessor?: FilesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FilesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FilesApiResponseProcessor();
    }

    /**
     * Delete file by ID
     * Delete file
     * @param fileId File ID to delete
     */
    public archive(fileId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.archive(fileId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archive(rsp)));
            }));
    }

    /**
     * GDRP delete file
     * GDPR delete
     * @param fileId ID of file to GDPR delete
     */
    public archiveGDPR(fileId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.archiveGDPR(fileId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveGDPR(rsp)));
            }));
    }

    /**
     * Check the status of requested import.
     * Check import status.
     * @param taskId Import by URL task ID
     */
    public checkImport(taskId: string, _options?: Configuration): Observable<FileActionResponse> {
        const requestContextPromise = this.requestFactory.checkImport(taskId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkImport(rsp)));
            }));
    }

    /**
     * Search through files in the file manager. Does not display hidden or archived files.
     * Search files
     * @param properties Desired file properties in the return object.
     * @param after The maximum offset of items for a given search is 10000. Narrow your search down if you are reaching this limit.
     * @param before 
     * @param limit Number of items to return. Maximum limit is 100.
     * @param sort Sort files by a given field.
     * @param id Search files by given ID.
     * @param createdAt Search files by time of creation.
     * @param createdAtLte 
     * @param createdAtGte 
     * @param updatedAt Search files by time of latest updated.
     * @param updatedAtLte 
     * @param updatedAtGte 
     * @param name Search for files containing the given name.
     * @param path Search files by path.
     * @param parentFolderId Search files within given folder ID.
     * @param size Query by file size.
     * @param height Search files by height of image or video.
     * @param width Search files by width of image or video.
     * @param encoding Search files with specified encoding.
     * @param type Filter by provided file type.
     * @param extension Search files by given extension.
     * @param url Search for given URL
     * @param isUsableInContent If true shows files that have been marked to be used in new content. It false shows files that should not be used in new content.
     * @param allowsAnonymousAccess If &#39;true&#39; will show private files; if &#39;false&#39; will show public files
     */
    public doSearch(properties?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, id?: string, createdAt?: Date, createdAtLte?: Date, createdAtGte?: Date, updatedAt?: Date, updatedAtLte?: Date, updatedAtGte?: Date, name?: string, path?: string, parentFolderId?: number, size?: number, height?: number, width?: number, encoding?: string, type?: string, extension?: string, url?: string, isUsableInContent?: boolean, allowsAnonymousAccess?: boolean, _options?: Configuration): Observable<CollectionResponseFile> {
        const requestContextPromise = this.requestFactory.doSearch(properties, after, before, limit, sort, id, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderId, size, height, width, encoding, type, extension, url, isUsableInContent, allowsAnonymousAccess, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doSearch(rsp)));
            }));
    }

    /**
     * Get file by ID.
     * Get file.
     * @param fileId Id of the desired file.
     * @param properties 
     */
    public getById(fileId: string, properties?: Array<string>, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getById(fileId, properties, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getById(rsp)));
            }));
    }

    /**
     * Generates signed URL that allows temporary access to a private file.
     * Get signed URL to access private file.
     * @param fileId ID of file.
     * @param size For image files. This will resize the image to the desired size before sharing. Does not affect the original file, just the file served by this signed URL.
     * @param expirationSeconds How long in seconds the link will provide access to the file.
     * @param upscale If size is provided, this will upscale the image to fit the size dimensions.
     */
    public getSignedUrl(fileId: string, size?: 'thumb' | 'icon' | 'medium' | 'preview', expirationSeconds?: number, upscale?: boolean, _options?: Configuration): Observable<SignedUrl> {
        const requestContextPromise = this.requestFactory.getSignedUrl(fileId, size, expirationSeconds, upscale, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSignedUrl(rsp)));
            }));
    }

    /**
     * Asynchronously imports the file at the given URL into the file manager.
     * Import a file from a URL into the file manager.
     * @param importFromUrlInput 
     */
    public importFromUrl(importFromUrlInput: ImportFromUrlInput, _options?: Configuration): Observable<ImportFromUrlTaskLocator> {
        const requestContextPromise = this.requestFactory.importFromUrl(importFromUrlInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.importFromUrl(rsp)));
            }));
    }

    /**
     * Replace existing file data with new file data. Can be used to change image content without having to upload a new file and update all references.
     * Replace file.
     * @param fileId Id of the desired file.
     * @param file File data that will replace existing file in the file manager.
     * @param charsetHunch Character set of given file data.
     * @param options JSON String representing FileReplaceOptions
     */
    public replace(fileId: string, file?: HttpFile, charsetHunch?: string, options?: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.replace(fileId, file, charsetHunch, options, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replace(rsp)));
            }));
    }

    /**
     * Update properties of file by ID.
     * update file properties
     * @param fileId ID of file to update
     * @param fileUpdateInput Options to update.
     */
    public updateProperties(fileId: string, fileUpdateInput: FileUpdateInput, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.updateProperties(fileId, fileUpdateInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProperties(rsp)));
            }));
    }

    /**
     * Upload a single file with content specified in request body.
     * Upload file
     * @param file File to be uploaded.
     * @param folderId Either &#39;folderId&#39; or &#39;folderPath&#39; is required. folderId is the ID of the folder the file will be uploaded to.
     * @param folderPath Either &#39;folderPath&#39; or &#39;folderId&#39; is required. This field represents the destination folder path for the uploaded file. If a path doesn&#39;t exist, the system will try to create one.
     * @param fileName Desired name for the uploaded file.
     * @param charsetHunch Character set of the uploaded file.
     * @param options JSON string representing FileUploadOptions.
     */
    public upload(file?: HttpFile, folderId?: string, folderPath?: string, fileName?: string, charsetHunch?: string, options?: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.upload(file, folderId, folderPath, fileName, charsetHunch, options, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.upload(rsp)));
            }));
    }

}

import { FoldersApiRequestFactory, FoldersApiResponseProcessor} from "../apis/FoldersApi";
export class ObservableFoldersApi {
    private requestFactory: FoldersApiRequestFactory;
    private responseProcessor: FoldersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FoldersApiRequestFactory,
        responseProcessor?: FoldersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FoldersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FoldersApiResponseProcessor();
    }

    /**
     * Delete folder by ID.
     * Delete folder.
     * @param folderId ID of folder to delete.
     */
    public archive(folderId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.archive(folderId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archive(rsp)));
            }));
    }

    /**
     * Delete folder by path.
     * Delete folder.
     * @param folderPath Path of folder to delete
     */
    public archiveByPath(folderPath: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.archiveByPath(folderPath, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveByPath(rsp)));
            }));
    }

    /**
     * Check status of folder update. Folder updates happen asynchronously.
     * Check folder update status.
     * @param taskId Task ID of folder update
     */
    public checkUpdateStatus(taskId: string, _options?: Configuration): Observable<FolderActionResponse> {
        const requestContextPromise = this.requestFactory.checkUpdateStatus(taskId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkUpdateStatus(rsp)));
            }));
    }

    /**
     * Creates a folder.
     * Create folder.
     * @param folderInput Folder creation options
     */
    public create(folderInput: FolderInput, _options?: Configuration): Observable<Folder> {
        const requestContextPromise = this.requestFactory.create(folderInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Search for folders. Does not contain hidden or archived folders.
     * Search folders
     * @param properties Properties that should be included in the returned folders.
     * @param after The maximum offset of items for a given search is 10000. Narrow your search down if you are reaching this limit.
     * @param before 
     * @param limit Limit of results to return. Max limit is 100.
     * @param sort Sort results by given property. For example -name sorts by name field descending, name sorts by name field ascending.
     * @param id Search folder by given ID.
     * @param createdAt Search for folders with the given creation timestamp.
     * @param createdAtLte 
     * @param createdAtGte 
     * @param updatedAt Search for folder at given update timestamp.
     * @param updatedAtLte 
     * @param updatedAtGte 
     * @param name Search for folders containing the specified name.
     * @param path Search for folders by path.
     * @param parentFolderId Search for folders with the given parent folder ID.
     */
    public doSearch(properties?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, id?: string, createdAt?: Date, createdAtLte?: Date, createdAtGte?: Date, updatedAt?: Date, updatedAtLte?: Date, updatedAtGte?: Date, name?: string, path?: string, parentFolderId?: number, _options?: Configuration): Observable<CollectionResponseFolder> {
        const requestContextPromise = this.requestFactory.doSearch(properties, after, before, limit, sort, id, createdAt, createdAtLte, createdAtGte, updatedAt, updatedAtLte, updatedAtGte, name, path, parentFolderId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doSearch(rsp)));
            }));
    }

    /**
     * Get folder by ID
     * Get folder
     * @param folderId ID of desired folder
     * @param properties Properties to set on returned folder.
     */
    public getById(folderId: string, properties?: Array<string>, _options?: Configuration): Observable<Folder> {
        const requestContextPromise = this.requestFactory.getById(folderId, properties, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getById(rsp)));
            }));
    }

    /**
     * Get folder by path.
     * Get folder.
     * @param folderPath Path of desired folder.
     * @param properties Properties to set on returned folder.
     */
    public getByPath(folderPath: string, properties?: Array<string>, _options?: Configuration): Observable<Folder> {
        const requestContextPromise = this.requestFactory.getByPath(folderPath, properties, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByPath(rsp)));
            }));
    }

    /**
     * Update properties of folder by given ID. This action happens asynchronously and will update all of the folder's children as well.
     * Update folder properties
     * @param folderUpdateInput Properties to change in the folder
     */
    public updateProperties(folderUpdateInput: FolderUpdateInput, _options?: Configuration): Observable<FolderUpdateTaskLocator> {
        const requestContextPromise = this.requestFactory.updateProperties(folderUpdateInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProperties(rsp)));
            }));
    }

}
