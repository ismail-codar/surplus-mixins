// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../s-js

declare module 'surplus-mixins' {
    export * from 'surplus-mixins/all';
    export * from 'surplus-mixins/attribute';
    export * from 'surplus-mixins/class';
    export * from 'surplus-mixins/drag';
    export * from 'surplus-mixins/keyboard';
    export * from 'surplus-mixins/mouse';
    export * from 'surplus-mixins/style';
}

declare module 'surplus-mixins/all' {
    import { SAttributeType } from 'surplus-mixins/attribute';
    import { SStyleType } from 'surplus-mixins/style';
    import { SClassType } from 'surplus-mixins/class';
    import { SDragEventType } from 'surplus-mixins/drag';
    import { SKeyboardEventType } from 'surplus-mixins/keyboard';
    import { SMouseEventType } from 'surplus-mixins/mouse';
    export const addEvents: (node: Node, arg: any) => void;
    export type ISurplusMixins = {
        onmouse?: SMouseEventType;
        onkey?: SKeyboardEventType;
        ondrag?: SDragEventType;
        classes?: SClassType | SClassType[];
        styles?: SStyleType | SStyleType[];
        attrs?: SAttributeType | SAttributeType;
    };
    export function mixins(...args: ISurplusMixins[]): (node: any) => void;
}

declare module 'surplus-mixins/attribute' {
    export type SAttributeType = {
        [k: string]: any;
    };
    export function attrs(...args: SAttributeType[]): (node: HTMLElement) => void;
}

declare module 'surplus-mixins/class' {
    import { DataSignal } from 's-js';
    export type SClassType = {
        [k: string]: DataSignal<boolean> | boolean;
    };
    export function classes(...args: SClassType[]): (node: any) => void;
}

declare module 'surplus-mixins/drag' {
    export type SDragEventType = {
        [k in "drag" | "dragend" | "dragenter" | "dragexit" | "dragleave" | "dragover" | "dragstart" | "drop"]?: (evt: DragEvent) => void;
    };
    export function ondrag(arg: SDragEventType): (node: Node) => void;
}

declare module 'surplus-mixins/keyboard' {
    export type SKeyboardEventType = {
        [k in "keydown" | "keyup" | "keypress"]?: (evt: KeyboardEvent) => void;
    };
    export function onkey(arg: SKeyboardEventType): (node: Node) => void;
}

declare module 'surplus-mixins/mouse' {
    export type SMouseEventType = {
        [k in 'mousedown' | 'mouseenter' | 'mouseleave' | 'mousemove' | 'mouseout' | 'mouseover' | 'mouseup' | 'show' | 'click' | 'contextmenu' | 'dblclick']?: (evt: MouseEvent) => void;
    };
    export function onmouse(arg: SMouseEventType): (node: Node) => void;
}

declare module 'surplus-mixins/style' {
    import { DataSignal } from 's-js';
    export type SStyleType = {
        [k in "alignContent" | "alignItems" | "alignmentBaseline" | "alignSelf" | "animation" | "animationDelay" | "animationDirection" | "animationDuration" | "animationFillMode" | "animationIterationCount" | "animationName" | "animationPlayState" | "animationTimingFunction" | "backfaceVisibility" | "background" | "backgroundAttachment" | "backgroundClip" | "backgroundColor" | "backgroundImage" | "backgroundOrigin" | "backgroundPosition" | "backgroundPositionX" | "backgroundPositionY" | "backgroundRepeat" | "backgroundSize" | "baselineShift" | "border" | "borderBottom" | "borderBottomColor" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStyle" | "borderBottomWidth" | "borderCollapse" | "borderColor" | "borderImage" | "borderImageOutset" | "borderImageRepeat" | "borderImageSlice" | "borderImageSource" | "borderImageWidth" | "borderLeft" | "borderLeftColor" | "borderLeftStyle" | "borderLeftWidth" | "borderRadius" | "borderRight" | "borderRightColor" | "borderRightStyle" | "borderRightWidth" | "borderSpacing" | "borderStyle" | "borderTop" | "borderTopColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStyle" | "borderTopWidth" | "borderWidth" | "bottom" | "boxShadow" | "boxSizing" | "breakAfter" | "breakBefore" | "breakInside" | "captionSide" | "clear" | "clip" | "clipPath" | "clipRule" | "color" | "colorInterpolationFilters" | "columnCount" | "columnFill" | "columnGap" | "columnRule" | "columnRuleColor" | "columnRuleStyle" | "columnRuleWidth" | "columns" | "columnSpan" | "columnWidth" | "content" | "counterIncrement" | "counterReset" | "cssFloat" | "cssText" | "cursor" | "direction" | "display" | "dominantBaseline" | "emptyCells" | "enableBackground" | "fill" | "fillOpacity" | "fillRule" | "filter" | "flex" | "flexBasis" | "flexDirection" | "flexFlow" | "flexGrow" | "flexShrink" | "flexWrap" | "floodColor" | "floodOpacity" | "font" | "fontFamily" | "fontFeatureSettings" | "fontSize" | "fontSizeAdjust" | "fontStretch" | "fontStyle" | "fontVariant" | "fontWeight" | "glyphOrientationHorizontal" | "glyphOrientationVertical" | "height" | "imeMode" | "justifyContent" | "kerning" | "layoutGrid" | "layoutGridChar" | "layoutGridLine" | "layoutGridMode" | "layoutGridType" | "left" | "length" | "letterSpacing" | "lightingColor" | "lineBreak" | "lineHeight" | "listStyle" | "listStyleImage" | "listStylePosition" | "listStyleType" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "marker" | "markerEnd" | "markerMid" | "markerStart" | "mask" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "msContentZoomChaining" | "msContentZooming" | "msContentZoomLimit" | "msContentZoomLimitMax" | "msContentZoomLimitMin" | "msContentZoomSnap" | "msContentZoomSnapPoints" | "msContentZoomSnapType" | "msFlowFrom" | "msFlowInto" | "msFontFeatureSettings" | "msGridColumn" | "msGridColumnAlign" | "msGridColumns" | "msGridColumnSpan" | "msGridRow" | "msGridRowAlign" | "msGridRows" | "msGridRowSpan" | "msHighContrastAdjust" | "msHyphenateLimitChars" | "msHyphenateLimitLines" | "msHyphenateLimitZone" | "msHyphens" | "msImeAlign" | "msOverflowStyle" | "msScrollChaining" | "msScrollLimit" | "msScrollLimitXMax" | "msScrollLimitXMin" | "msScrollLimitYMax" | "msScrollLimitYMin" | "msScrollRails" | "msScrollSnapPointsX" | "msScrollSnapPointsY" | "msScrollSnapType" | "msScrollSnapX" | "msScrollSnapY" | "msScrollTranslation" | "msTextCombineHorizontal" | "msTextSizeAdjust" | "msTouchAction" | "msTouchSelect" | "msUserSelect" | "msWrapFlow" | "msWrapMargin" | "msWrapThrough" | "opacity" | "order" | "orphans" | "outline" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "overflow" | "overflowX" | "overflowY" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "pageBreakAfter" | "pageBreakBefore" | "pageBreakInside" | "parentRule" | "perspective" | "perspectiveOrigin" | "pointerEvents" | "position" | "quotes" | "right" | "rotate" | "rubyAlign" | "rubyOverhang" | "rubyPosition" | "scale" | "stopColor" | "stopOpacity" | "stroke" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "strokeOpacity" | "strokeWidth" | "tableLayout" | "textAlign" | "textAlignLast" | "textAnchor" | "textDecoration" | "textIndent" | "textJustify" | "textKashida" | "textKashidaSpace" | "textOverflow" | "textShadow" | "textTransform" | "textUnderlinePosition" | "top" | "touchAction" | "transform" | "transformOrigin" | "transformStyle" | "transition" | "transitionDelay" | "transitionDuration" | "transitionProperty" | "transitionTimingFunction" | "translate" | "unicodeBidi" | "verticalAlign" | "visibility" | "webkitAlignContent" | "webkitAlignItems" | "webkitAlignSelf" | "webkitAnimation" | "webkitAnimationDelay" | "webkitAnimationDirection" | "webkitAnimationDuration" | "webkitAnimationFillMode" | "webkitAnimationIterationCount" | "webkitAnimationName" | "webkitAnimationPlayState" | "webkitAnimationTimingFunction" | "webkitAppearance" | "webkitBackfaceVisibility" | "webkitBackgroundClip" | "webkitBackgroundOrigin" | "webkitBackgroundSize" | "webkitBorderBottomLeftRadius" | "webkitBorderBottomRightRadius" | "webkitBorderImage" | "webkitBorderRadius" | "webkitBorderTopLeftRadius" | "webkitBorderTopRightRadius" | "webkitBoxAlign" | "webkitBoxDirection" | "webkitBoxFlex" | "webkitBoxOrdinalGroup" | "webkitBoxOrient" | "webkitBoxPack" | "webkitBoxSizing" | "webkitColumnBreakAfter" | "webkitColumnBreakBefore" | "webkitColumnBreakInside" | "webkitColumnCount" | "webkitColumnGap" | "webkitColumnRule" | "webkitColumnRuleColor" | "webkitColumnRuleStyle" | "webkitColumnRuleWidth" | "webkitColumns" | "webkitColumnSpan" | "webkitColumnWidth" | "webkitFilter" | "webkitFlex" | "webkitFlexBasis" | "webkitFlexDirection" | "webkitFlexFlow" | "webkitFlexGrow" | "webkitFlexShrink" | "webkitFlexWrap" | "webkitJustifyContent" | "webkitOrder" | "webkitPerspective" | "webkitPerspectiveOrigin" | "webkitTapHighlightColor" | "webkitTextFillColor" | "webkitTextSizeAdjust" | "webkitTextStroke" | "webkitTextStrokeColor" | "webkitTextStrokeWidth" | "webkitTransform" | "webkitTransformOrigin" | "webkitTransformStyle" | "webkitTransition" | "webkitTransitionDelay" | "webkitTransitionDuration" | "webkitTransitionProperty" | "webkitTransitionTimingFunction" | "webkitUserModify" | "webkitUserSelect" | "webkitWritingMode" | "whiteSpace" | "widows" | "width" | "wordBreak" | "wordSpacing" | "wordWrap" | "writingMode" | "zIndex" | "zoom" | "resize" | "userSelect"]?: DataSignal<string> | string;
    };
    export function styles(...args: SStyleType[]): (node: any) => void;
}

