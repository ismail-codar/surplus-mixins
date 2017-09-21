import { addEvents } from "./all";
export default function onkey(arg) {
    return function onkey(node) {
        arg && addEvents(node, arg);
    };
}
