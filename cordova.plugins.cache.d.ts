// Type definitions for cordova.plugins.cache

/// <reference types="cordova" />

interface Cache {
    clear: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void
}

interface CordovaPlugins {
    cache: Cache;
}
