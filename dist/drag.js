import { addEvents } from "./all";
export default function ondrag(arg) {
    return function ondrag(node) {
        arg && addEvents(node, arg);
    };
}
