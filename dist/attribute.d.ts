export declare type SAttributeType = {
    [k: string]: any;
};
export declare function attrs(...args: SAttributeType[]): (node: HTMLElement) => void;
