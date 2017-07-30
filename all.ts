import S, { DataSignal } from 's-js';
import onmouse, { SMouseEventType } from "surplus-mixins/mouse";
import onkey, { SKeyboardEventType } from "surplus-mixins/keyboard";
import ondrag, { SDragEventType } from "surplus-mixins/drag";
import classes, { SClassType } from "surplus-mixins/class";
import styles, { SStyleType } from "surplus-mixins/style";
import attrs, { SAttributeType } from "surplus-mixins/attribute";

export const addEvents = (node: Node, arg: any) => {
    for (const key in arg) {
        const val: any = (arg as any)[key]
        node.addEventListener(key, val, false)
        S.cleanup(function () { node.removeEventListener(key, val) })
    }
}

export type ISurplusMixins = {
    onmouse?: SMouseEventType
    onkey?: SKeyboardEventType
    ondrag?: SDragEventType
    classes?: SClassType | SClassType[]
    styles?: SStyleType | SStyleType[]
    attrs?: SAttributeType | SAttributeType
}

const mixinMap: any = {
    onmouse: onmouse,
    onkey: onkey,
    ondrag: ondrag,
    classes: classes,
    styles: styles,
    attrs: attrs
}
export default function mixins(...args: ISurplusMixins[]) {
    return function mixins(node: any) {
        if (args) {
            args.forEach((arg: any) => {
                for (const key in arg) {
                    mixinMap[key].apply(null, arg[key] instanceof Array ? arg[key] : [arg[key]])(node)
                }
            })
        }
    }
}
