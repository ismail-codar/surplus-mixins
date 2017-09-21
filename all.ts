import onmouse, { SMouseEventType } from './mouse';
import onkey, { SKeyboardEventType } from './keyboard';
import ondrag, { SDragEventType } from './drag';
import classes, { SClassType } from './class';
import styles, { SStyleType } from './style';
import attrs, { SAttributeType } from './attribute';
import S from 's-js';

export const addEvents = (node: Node, arg: any) => {
  for (const key in arg) {
    const val: any = (arg as any)[key];
    node.addEventListener(key, val, false);
    S.cleanup(function() {
      node.removeEventListener(key, val);
    });
  }
};

export type ISurplusMixins = {
  onmouse?: SMouseEventType;
  onkey?: SKeyboardEventType;
  ondrag?: SDragEventType;
  classes?: SClassType | SClassType[];
  styles?: SStyleType | SStyleType[];
  attrs?: SAttributeType | SAttributeType;
};

const mixinMap: any = {
  onmouse: onmouse,
  onkey: onkey,
  ondrag: ondrag,
  classes: classes,
  styles: styles,
  attrs: attrs
};
export default function mixins(...args: ISurplusMixins[]) {
  return function mixins(node: any) {
    if (args) {
      args.forEach((arg: any) => {
        for (const key in arg) {
          mixinMap[key].apply(
            null,
            arg[key] instanceof Array ? arg[key] : [arg[key]]
          )(node);
        }
      });
    }
  };
}
