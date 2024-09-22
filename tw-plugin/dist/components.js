module.exports = {".fun-alert":{"@apply rounded p-2 text-neutral-900 dark:text-neutral-50 border":true},".fun-alert-info":{"@apply bg-blue-400 border-blue-400 bg-opacity-20 border-opacity-50":true},".fun-alert-warning":{"@apply bg-yellow-400 border-yellow-400 bg-opacity-20 border-opacity-50":true},".fun-alert-danger":{"@apply bg-red-400 border-red-400 bg-opacity-20 border-opacity-50":true},".fun-alert-success":{"@apply bg-green-400 border-green-400 bg-opacity-20 border-opacity-50":true},".btn":{"-ButtonColor":"var(--outline)","-ButtonHeight":"2.5rem","@apply inline-flex font-semibold px-md rounded box-border border border-transparent transition-all text-primary text-[0.875rem]":true,"@apply h-[var(--button-height)] items-center justify-center gap-x-sm":true,"transitionProperty":"color, background-color, border-color, opacity,\n    box-shadow, transform"},".btn:hover,\n.btn-outline:hover,\n.btn-ghost:hover":{"backgroundColor":"color-mix(\n    in oklab,\n    oklch(var(--button-color)) 12.5%,\n    transparent\n  )"},".btn-outline":{"-ButtonColor":"var(--outline)","@apply border border-outline text-outline-content":true},".btn-ghost":{"-ButtonColor":"var(--outline)","@apply text-outline":true},".btn-danger":{"-ButtonColor":"var(--danger)","-ContentColor":"var(--danger-content)"},".btn-primary":{"-ButtonColor":"var(--primary)","-ContentColor":"var(--primary-content)"},".btn-primary,\n.btn-danger":{"backgroundColor":"oklch(var(--button-color))","borderColor":"oklch(var(--button-color))","color":"oklch(var(--content-color))"},".btn-primary:hover,\n.btn-danger:hover":{"backgroundColor":"color-mix(in oklab, oklch(var(--button-color)), black 10%)","borderColor":"color-mix(in oklab, oklch(var(--button-color)), black 10%)"},".btn:focus-visible":{"@apply outline outline-2 outline-offset-2 outline-primary":true},".btn-sm":{"-ButtonHeight":"1.5rem","@apply px-[0.5rem] text-[0.75rem]":true},".btn-lg":{"-ButtonHeight":"3.5rem","@apply px-[1.5rem] text-[1rem]":true},".btn-square":{"@apply w-[var(--button-height)] p-[unset]":true},".btn:active:hover,\n.btn-outline:active:hover,\n.btn-ghost:active:hover":{"backgroundColor":"color-mix(\n    in oklab,\n    oklch(var(--button-color)) 25%,\n    transparent\n  )"},".btn-primary:active:hover,\n.btn-primary:active:focus,\n.btn-danger:active:hover,\n.btn-danger:active:focus":{"backgroundColor":"color-mix(in oklab, oklch(var(--button-color)), black 17%)","borderColor":"color-mix(in oklab, oklch(var(--button-color)), black 17%)"},".btn:active:hover,\n.btn:active:focus":{"transform":"scale(var(--btn-pressed-scale, 0.97))"},"input[type=\"checkbox\"].toggle":{"-ToggleBase":"oklch(var(--primary))","-ToggleContrast":"oklch(var(--text-color))","-ToggleSurroundings":"oklch(var(--page))","-ToggleBorderUnchecked":"var(--toggle-contrast)","-ToggleBorderChecked":"var(--toggle-base)","-ToggleUnchecked":"color-mix(\n    in oklab,\n    var(--toggle-contrast) 10%,\n    var(--toggle-surroundings) 30%\n  )","-ToggleDisabledCheckedBg":"color-mix(\n    in oklab,\n    var(--toggle-surroundings) 20%,\n    var(--toggle-base) 20%\n  )","-ToggleDisabledUncheckedBg":"var(--toggle-surroundings)","-ToggleDisabledCheckedKnob":"var(--toggle-surroundings)","-ToggleDisabledUncheckedKnob":"color-mix(\n    in oklab,\n    var(--toggle-surroundings) 20%,\n    var(--toggle-contrast) 20%\n  )","-ToggleKnob":"var(--toggle-contrast)","-ToggleBgChecked":"var(--toggle-base)","-ToggleKnobChecked":"var(--toggle-surroundings)","WebkitAppearance":"none","MozAppearance":"none","appearance":"none","backgroundColor":"var(--toggle-unchecked)","borderRadius":"72px","flexShrink":"0","height":"20px","margin":"0","position":"relative","width":"30px","borderWidth":"2px","borderColor":"var(--toggle-border-unchecked)","cursor":"pointer"},"input[type=\"checkbox\"].toggle::before":{"bottom":"-6px","content":"\"\"","left":"-6px","position":"absolute","right":"-6px","top":"-6px"},"input[type=\"checkbox\"].toggle::after":{"transition":"all 100ms ease-out","backgroundColor":"var(--toggle-knob)","borderRadius":"50%","content":"\"\"","height":"14px","width":"14px","position":"absolute","left":"1px","top":"1px"},"input[type=\"checkbox\"].toggle:checked":{"backgroundColor":"var(--toggle-bg-checked)","borderColor":"var(--toggle-border-checked)"},"input[type=\"checkbox\"].toggle:checked::after":{"backgroundColor":"var(--toggle-knob-checked)","left":"11px"},"input[type=\"checkbox\"].toggle:focus-visible":{"@apply outline outline-2 outline-offset-2 outline-primary":true},"input[type=\"checkbox\"].toggle:disabled":{"borderColor":"var(--toggle-disabled-unchecked-knob)","backgroundColor":"var(--toggle-disabled-unchecked-bg)","cursor":"not-allowed"},"input[type=\"checkbox\"].toggle:disabled::after":{"backgroundColor":"var(--toggle-disabled-unchecked-knob)"},"input[type=\"checkbox\"].toggle:disabled:checked::after":{"backgroundColor":"var(--toggle-disabled-checked-knob)"},"input[type=\"checkbox\"].toggle:disabled:checked":{"backgroundColor":"var(--toggle-disabled-checked-bg)","borderColor":"var(--toggle-disabled-checked-bg)"},"input[type=\"checkbox\"].toggle.toggle-sm":{"height":"16px","width":"26px"},"input[type=\"checkbox\"].toggle.toggle-sm::after":{"height":"10px","width":"10px"},"@keyframes modal-pop":{"0%":{"opacity":"0"}},"dialog.modal":{"margin":["0 !important","0"],"marginLeft":"0 !important","marginRight":"0 !important","pointerEvents":"none","position":"fixed","inset":"0","display":"grid","height":"100%","maxHeight":"none","width":"100%","maxWidth":"none","justifyItems":"center","padding":"0","opacity":"0","overscrollBehavior":"contain","zIndex":"999","backgroundColor":"transparent","color":"inherit","transitionDuration":"0.2s","transitionTimingFunction":"cubic-bezier(0, 0, 0.2, 1)","transitionProperty":"transform, opacity, visibility","overflowY":"hidden"},".modal-open,\n.modal:target,\n.modal-toggle:checked + .modal,\n.modal[open]":{"pointerEvents":"auto","visibility":"visible","opacity":"1"},".modal-open .modal-box,\n.modal-toggle:checked + .modal .modal-box,\n.modal:target .modal-box,\n.modal[open] .modal-box":{"-TwTranslateY":"0px","-TwScaleX":"1","-TwScaleY":"1","transform":"translate(var(--tw-translate-x), var(--tw-translate-y))\n    rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))\n    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".modal-box":{"maxHeight":"calc(100vh - 5em)","gridColumnStart":"1","gridRowStart":"1","width":"91.666667%","maxWidth":"32rem","-TwScaleX":"0.9","-TwScaleY":"0.9","transform":"translate(var(--tw-translate-x), var(--tw-translate-y))\n    rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))\n    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))","borderBottomRightRadius":"var(--rounded-box, 1rem)","borderBottomLeftRadius":"var(--rounded-box, 1rem)","borderTopLeftRadius":"var(--rounded-box, 1rem)","borderTopRightRadius":"var(--rounded-box, 1rem)","-TwBgOpacity":"1","backgroundColor":"var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)))","padding":"1.5rem","transitionProperty":["color, background-color, border-color,\n    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,\n    -webkit-backdrop-filter","color, background-color, border-color,\n    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,\n    backdrop-filter","color, background-color, border-color,\n    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,\n    backdrop-filter, -webkit-backdrop-filter"],"transitionTimingFunction":["cubic-bezier(0.4, 0, 0.2, 1)","cubic-bezier(0, 0, 0.2, 1)"],"transitionDuration":"0.2s","boxShadow":"#00000040 0 25px 50px -12px","overflowY":"auto","overscrollBehavior":"contain"}};