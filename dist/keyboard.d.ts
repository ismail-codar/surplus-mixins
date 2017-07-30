export declare type SKeyboardEventType = {
    [k in "keydown" | "keyup" | "keypress"]?: (evt: KeyboardEvent) => void;
};
export default function onkey(arg: SKeyboardEventType): (node: Node) => void;
