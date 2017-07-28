export default function styles() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function style(node) {
        if (args) {
            args.forEach(function (arg) {
                for (var key in arg) {
                    var val = arg[key];
                    node["style"][key] = typeof val == "function" ? val() : val;
                }
            });
        }
    };
}
