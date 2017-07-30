export declare type SAttributeType = {
    [k: string]: any;
};
export default function attrs(...args: SAttributeType[]): (node: HTMLElement) => void;
