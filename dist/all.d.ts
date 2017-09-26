import { SAttributeType } from './attribute';
import { SStyleType } from './style';
import { SClassType } from './class';
import { SDragEventType } from './drag';
import { SKeyboardEventType } from './keyboard';
import { SMouseEventType } from './mouse';
export declare const addEvents: (node: Node, arg: any) => void;
export declare type ISurplusMixins = {
    onmouse?: SMouseEventType;
    onkey?: SKeyboardEventType;
    ondrag?: SDragEventType;
    classes?: SClassType | SClassType[];
    styles?: SStyleType | SStyleType[];
    attrs?: SAttributeType | SAttributeType;
};
export declare function mixins(...args: ISurplusMixins[]): (node: any) => void;
