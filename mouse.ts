import { addEvents } from "surplus-mixins/all";

// https://developer.mozilla.org/en-US/docs/Web/Events : MouseEvent

export type SMouseEventType = {
    [k in
    "mousedown" |
    "mouseenter" |
    "mouseleave" |
    "mousemove" |
    "mouseout" |
    "mouseover" |
    "mouseup" |
    "show" |
    "click" |
    "contextmenu" |
    "dblclick"
    ]?: (evt: MouseEvent) => void}

export default function onmouse(arg: SMouseEventType) {
    return function onmouse(node: Node) {
        arg && addEvents(node, arg)
    }
}