declare const config: {
    hubspotAccessToken: string;
    mongoDbUrl: string;
    salt: string;
    swaggerFile: string;
    hostName: string;
    port: number;
};
declare const firebaseConfig: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
    clientId: string;
};
declare const googleConfig: {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
};
export { config, firebaseConfig, googleConfig };
