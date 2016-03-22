// declare module "yql" {

    declare class YQL {

        constructor(query: string);

        setParam(key: string, value: string): YQL;
        
        setParams(params: {[key: string]: string}): YQL;
        
        setConfig(key: string, value: string): YQL;
        
        setConfigs(params: {[key: string]: string}): YQL;
        
        getURL(): string;
        
        exec(callback: (error?: any, response?: any) => void): void;
        
    }
    
    declare interface Config {
        baseURL: {
            http: string;
            https: string;
        }
        env: string;
        headers: {
            [key: string]: string
        }
        ssl: boolean;
        timeout: number;
    }
// }