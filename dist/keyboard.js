import { addEvents } from "surplus-mixins/all";
export default function onkey(arg) {
    return function onkey(node) {
        arg && addEvents(node, arg);
    };
}
