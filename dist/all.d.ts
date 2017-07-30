import { SMouseEventType } from "surplus-mixins/mouse";
import { SKeyboardEventType } from "surplus-mixins/keyboard";
import { SDragEventType } from "surplus-mixins/drag";
import { SClassType } from "surplus-mixins/class";
import { SStyleType } from "surplus-mixins/style";
import { SAttributeType } from "surplus-mixins/attribute";
export declare const addEvents: (node: Node, arg: any) => void;
export declare type ISurplusMixins = {
    onmouse?: SMouseEventType;
    onkey?: SKeyboardEventType;
    ondrag?: SDragEventType;
    classes?: SClassType | SClassType[];
    styles?: SStyleType | SStyleType[];
    attrs?: SAttributeType | SAttributeType;
};
export default function mixins(...args: ISurplusMixins[]): (node: any) => void;
