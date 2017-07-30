export declare type SDragEventType = {
    [k in "drag" | "dragend" | "dragenter" | "dragexit" | "dragleave" | "dragover" | "dragstart" | "drop"]?: (evt: DragEvent) => void;
};
export default function ondrag(arg: SDragEventType): (node: Node) => void;
