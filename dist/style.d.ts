import { DataSignal } from 's-js';
export declare type SStyleType = {
    [k in "alignContent" | "alignItems" | "alignmentBaseline" | "alignSelf" | "animation" | "animationDelay" | "animationDirection" | "animationDuration" | "animationFillMode" | "animationIterationCount" | "animationName" | "animationPlayState" | "animationTimingFunction" | "backfaceVisibility" | "background" | "backgroundAttachment" | "backgroundClip" | "backgroundColor" | "backgroundImage" | "backgroundOrigin" | "backgroundPosition" | "backgroundPositionX" | "backgroundPositionY" | "backgroundRepeat" | "backgroundSize" | "baselineShift" | "border" | "borderBottom" | "borderBottomColor" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStyle" | "borderBottomWidth" | "borderCollapse" | "borderColor" | "borderImage" | "borderImageOutset" | "borderImageRepeat" | "borderImageSlice" | "borderImageSource" | "borderImageWidth" | "borderLeft" | "borderLeftColor" | "borderLeftStyle" | "borderLeftWidth" | "borderRadius" | "borderRight" | "borderRightColor" | "borderRightStyle" | "borderRightWidth" | "borderSpacing" | "borderStyle" | "borderTop" | "borderTopColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStyle" | "borderTopWidth" | "borderWidth" | "bottom" | "boxShadow" | "boxSizing" | "breakAfter" | "breakBefore" | "breakInside" | "captionSide" | "clear" | "clip" | "clipPath" | "clipRule" | "color" | "colorInterpolationFilters" | "columnCount" | "columnFill" | "columnGap" | "columnRule" | "columnRuleColor" | "columnRuleStyle" | "columnRuleWidth" | "columns" | "columnSpan" | "columnWidth" | "content" | "counterIncrement" | "counterReset" | "cssFloat" | "cssText" | "cursor" | "direction" | "display" | "dominantBaseline" | "emptyCells" | "enableBackground" | "fill" | "fillOpacity" | "fillRule" | "filter" | "flex" | "flexBasis" | "flexDirection" | "flexFlow" | "flexGrow" | "flexShrink" | "flexWrap" | "floodColor" | "floodOpacity" | "font" | "fontFamily" | "fontFeatureSettings" | "fontSize" | "fontSizeAdjust" | "fontStretch" | "fontStyle" | "fontVariant" | "fontWeight" | "glyphOrientationHorizontal" | "glyphOrientationVertical" | "height" | "imeMode" | "justifyContent" | "kerning" | "layoutGrid" | "layoutGridChar" | "layoutGridLine" | "layoutGridMode" | "layoutGridType" | "left" | "length" | "letterSpacing" | "lightingColor" | "lineBreak" | "lineHeight" | "listStyle" | "listStyleImage" | "listStylePosition" | "listStyleType" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "marker" | "markerEnd" | "markerMid" | "markerStart" | "mask" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "msContentZoomChaining" | "msContentZooming" | "msContentZoomLimit" | "msContentZoomLimitMax" | "msContentZoomLimitMin" | "msContentZoomSnap" | "msContentZoomSnapPoints" | "msContentZoomSnapType" | "msFlowFrom" | "msFlowInto" | "msFontFeatureSettings" | "msGridColumn" | "msGridColumnAlign" | "msGridColumns" | "msGridColumnSpan" | "msGridRow" | "msGridRowAlign" | "msGridRows" | "msGridRowSpan" | "msHighContrastAdjust" | "msHyphenateLimitChars" | "msHyphenateLimitLines" | "msHyphenateLimitZone" | "msHyphens" | "msImeAlign" | "msOverflowStyle" | "msScrollChaining" | "msScrollLimit" | "msScrollLimitXMax" | "msScrollLimitXMin" | "msScrollLimitYMax" | "msScrollLimitYMin" | "msScrollRails" | "msScrollSnapPointsX" | "msScrollSnapPointsY" | "msScrollSnapType" | "msScrollSnapX" | "msScrollSnapY" | "msScrollTranslation" | "msTextCombineHorizontal" | "msTextSizeAdjust" | "msTouchAction" | "msTouchSelect" | "msUserSelect" | "msWrapFlow" | "msWrapMargin" | "msWrapThrough" | "opacity" | "order" | "orphans" | "outline" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "overflow" | "overflowX" | "overflowY" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "pageBreakAfter" | "pageBreakBefore" | "pageBreakInside" | "parentRule" | "perspective" | "perspectiveOrigin" | "pointerEvents" | "position" | "quotes" | "right" | "rotate" | "rubyAlign" | "rubyOverhang" | "rubyPosition" | "scale" | "stopColor" | "stopOpacity" | "stroke" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "strokeOpacity" | "strokeWidth" | "tableLayout" | "textAlign" | "textAlignLast" | "textAnchor" | "textDecoration" | "textIndent" | "textJustify" | "textKashida" | "textKashidaSpace" | "textOverflow" | "textShadow" | "textTransform" | "textUnderlinePosition" | "top" | "touchAction" | "transform" | "transformOrigin" | "transformStyle" | "transition" | "transitionDelay" | "transitionDuration" | "transitionProperty" | "transitionTimingFunction" | "translate" | "unicodeBidi" | "verticalAlign" | "visibility" | "webkitAlignContent" | "webkitAlignItems" | "webkitAlignSelf" | "webkitAnimation" | "webkitAnimationDelay" | "webkitAnimationDirection" | "webkitAnimationDuration" | "webkitAnimationFillMode" | "webkitAnimationIterationCount" | "webkitAnimationName" | "webkitAnimationPlayState" | "webkitAnimationTimingFunction" | "webkitAppearance" | "webkitBackfaceVisibility" | "webkitBackgroundClip" | "webkitBackgroundOrigin" | "webkitBackgroundSize" | "webkitBorderBottomLeftRadius" | "webkitBorderBottomRightRadius" | "webkitBorderImage" | "webkitBorderRadius" | "webkitBorderTopLeftRadius" | "webkitBorderTopRightRadius" | "webkitBoxAlign" | "webkitBoxDirection" | "webkitBoxFlex" | "webkitBoxOrdinalGroup" | "webkitBoxOrient" | "webkitBoxPack" | "webkitBoxSizing" | "webkitColumnBreakAfter" | "webkitColumnBreakBefore" | "webkitColumnBreakInside" | "webkitColumnCount" | "webkitColumnGap" | "webkitColumnRule" | "webkitColumnRuleColor" | "webkitColumnRuleStyle" | "webkitColumnRuleWidth" | "webkitColumns" | "webkitColumnSpan" | "webkitColumnWidth" | "webkitFilter" | "webkitFlex" | "webkitFlexBasis" | "webkitFlexDirection" | "webkitFlexFlow" | "webkitFlexGrow" | "webkitFlexShrink" | "webkitFlexWrap" | "webkitJustifyContent" | "webkitOrder" | "webkitPerspective" | "webkitPerspectiveOrigin" | "webkitTapHighlightColor" | "webkitTextFillColor" | "webkitTextSizeAdjust" | "webkitTextStroke" | "webkitTextStrokeColor" | "webkitTextStrokeWidth" | "webkitTransform" | "webkitTransformOrigin" | "webkitTransformStyle" | "webkitTransition" | "webkitTransitionDelay" | "webkitTransitionDuration" | "webkitTransitionProperty" | "webkitTransitionTimingFunction" | "webkitUserModify" | "webkitUserSelect" | "webkitWritingMode" | "whiteSpace" | "widows" | "width" | "wordBreak" | "wordSpacing" | "wordWrap" | "writingMode" | "zIndex" | "zoom" | "resize" | "userSelect"]?: DataSignal<string> | string;
};
export default function styles(...args: SStyleType[]): (node: any) => void;