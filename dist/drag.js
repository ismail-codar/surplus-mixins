import { addEvents } from "surplus-mixins/all";
export default function ondrag(arg) {
    return function ondrag(node) {
        arg && addEvents(node, arg);
    };
}
