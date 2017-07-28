import { DataSignal } from 's-js';
export declare type SClassType = {
    [k: string]: DataSignal<boolean> | boolean;
};
export default function classes(...args: SClassType[]): (node: any) => void;
