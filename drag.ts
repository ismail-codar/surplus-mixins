import { addEvents } from "surplus-mixins/all";

export type SDragEventType = {
    [k in
    "drag" |
    "dragend" |
    "dragenter" |
    "dragexit" |
    "dragleave" |
    "dragover" |
    "dragstart" |
    "drop"
    ]?: (evt: DragEvent) => void};

export default function ondrag(arg: SDragEventType) {
    return function ondrag(node: Node) {
        arg && addEvents(node, arg)
    }
}