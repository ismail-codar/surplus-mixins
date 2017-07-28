import { S } from 'surplus';
export default function onmouse(arg) {
    return function onmouse(node) {
        if (arg) {
            var _loop_1 = function (key) {
                var val = arg[key];
                node.addEventListener(key, val, false);
                S.cleanup(function () { node.removeEventListener(key, val); });
            };
            for (var key in arg) {
                _loop_1(key);
            }
        }
    };
}
