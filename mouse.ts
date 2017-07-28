import { S } from 'surplus'

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
        if (arg)
            for (const key in arg) {
                const val: any = (arg as any)[key]
                node.addEventListener(key, val, false)
                S.cleanup(function () { node.removeEventListener(key, val) })
            }
    }
}
