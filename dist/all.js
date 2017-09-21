import onmouse from './mouse';
import onkey from './keyboard';
import ondrag from './drag';
import classes from './class';
import styles from './style';
import attrs from './attribute';
import S from 's-js';
export var addEvents = function (node, arg) {
    var _loop_1 = function (key) {
        var val = arg[key];
        node.addEventListener(key, val, false);
        S.cleanup(function () {
            node.removeEventListener(key, val);
        });
    };
    for (var key in arg) {
        _loop_1(key);
    }
};
var mixinMap = {
    onmouse: onmouse,
    onkey: onkey,
    ondrag: ondrag,
    classes: classes,
    styles: styles,
    attrs: attrs
};
export default function mixins() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function mixins(node) {
        if (args) {
            args.forEach(function (arg) {
                for (var key in arg) {
                    mixinMap[key].apply(null, arg[key] instanceof Array ? arg[key] : [arg[key]])(node);
                }
            });
        }
    };
}
