import S from 's-js';
import onmouse from "surplus-mixins/mouse";
import onkey from "surplus-mixins/keyboard";
import ondrag from "surplus-mixins/drag";
import classes from "surplus-mixins/class";
import styles from "surplus-mixins/style";
import attrs from "surplus-mixins/attribute";
export var addEvents = function (node, arg) {
    var _loop_1 = function (key) {
        var val = arg[key];
        node.addEventListener(key, val, false);
        S.cleanup(function () { node.removeEventListener(key, val); });
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
