export interface IPermission {
    isFirstSigner: boolean;
    isSecondSigner: boolean;
    isSingleSigner: boolean;
    query: boolean;
    register: boolean;
    send: boolean;
}
