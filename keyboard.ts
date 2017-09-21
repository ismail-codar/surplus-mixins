import { addEvents } from "./all";

export type SKeyboardEventType = {
    [k in
    "keydown" |
    "keyup" |
    "keypress"
    ]?: (evt: KeyboardEvent) => void};

export default function onkey(arg: SKeyboardEventType) {
    return function onkey(node: Node) {
        arg && addEvents(node, arg)
    }
}