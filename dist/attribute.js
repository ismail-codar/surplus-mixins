export default function attrs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function attrs(node) {
        if (args) {
            args.forEach(function (arg) {
                for (var key in arg) {
                    var val = arg[key];
                    var value = typeof val == "function" ? val() : val;
                    if (value != undefined)
                        node.setAttribute(key, value);
                }
            });
        }
    };
}
