import { SMouseEventType } from './mouse';
import { SKeyboardEventType } from './keyboard';
import { SDragEventType } from './drag';
import { SClassType } from './class';
import { SStyleType } from './style';
import { SAttributeType } from './attribute';
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
