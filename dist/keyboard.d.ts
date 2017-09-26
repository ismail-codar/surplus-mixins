export declare type SKeyboardEventType = {
    [k in "keydown" | "keyup" | "keypress"]?: (evt: KeyboardEvent) => void;
};
export declare function onkey(arg: SKeyboardEventType): (node: Node) => void;
