export default function classes() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function classes(node) {
        if (args) {
            var classNames_1 = [];
            args.forEach(function (arg) {
                for (var key in arg) {
                    var val = arg[key];
                    if (typeof val == "function" ? val() : val)
                        classNames_1.push(key);
                }
            });
            node.className = classNames_1.join(" ");
        }
    };
}
