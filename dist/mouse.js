import { addEvents } from './all';
export default function onmouse(arg) {
    return function onmouse(node) {
        arg && addEvents(node, arg);
    };
}
