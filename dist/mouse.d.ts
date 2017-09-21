export declare type SMouseEventType = {
    [k in 'mousedown' | 'mouseenter' | 'mouseleave' | 'mousemove' | 'mouseout' | 'mouseover' | 'mouseup' | 'show' | 'click' | 'contextmenu' | 'dblclick']?: (evt: MouseEvent) => void;
};
export default function onmouse(arg: SMouseEventType): (node: Node) => void;
