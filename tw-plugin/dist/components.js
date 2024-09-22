module.exports = {".fun-alert":{"@apply rounded p-2 text-neutral-900 dark:text-neutral-50 border":true},".fun-alert-info":{"@apply bg-blue-400 border-blue-400 bg-opacity-20 border-opacity-50":true},".fun-alert-warning":{"@apply bg-yellow-400 border-yellow-400 bg-opacity-20 border-opacity-50":true},".fun-alert-danger":{"@apply bg-red-400 border-red-400 bg-opacity-20 border-opacity-50":true},".fun-alert-success":{"@apply bg-green-400 border-green-400 bg-opacity-20 border-opacity-50":true},".alert":{"-AlertContrast":"oklch(var(--text-color))","-AlertSurroundings":"oklch(var(--page))","-AlertBackground":"color-mix(\n    in oklab,\n    var(--alert-base) 15%,\n    var(--alert-surroundings) 90%\n  )","-AlertBorder":"color-mix(\n    in oklab,\n    var(--alert-base) 60%,\n    var(--alert-contrast) 5%\n  )","-AlertText":"color-mix(\n    in oklab,\n    var(--alert-base) 20%,\n    var(--alert-contrast) 100%\n  )","@apply rounded-lg p-sm border bg-opacity-20":true,"borderColor":"var(--alert-border)","color":"var(--alert-text)"},".alert-info":{"-AlertBase":"oklch(var(--info))","backgroundColor":"oklch(var(--info) / var(--tw-bg-opacity))"},".alert-success":{"-AlertBase":"oklch(var(--success))"},".btn":{"-ButtonColor":"var(--outline)","-ButtonHeight":"2.5rem","@apply inline-flex font-semibold px-md rounded box-border border border-transparent transition-all text-primary text-[0.875rem]":true,"@apply h-[var(--button-height)] items-center justify-center gap-x-sm":true,"transitionProperty":"color, background-color, border-color, opacity,\n    box-shadow, transform"},".btn:hover,\n.btn-outline:hover,\n.btn-ghost:hover":{"backgroundColor":"color-mix(\n    in oklab,\n    oklch(var(--button-color)) 12.5%,\n    transparent\n  )"},".btn-outline":{"-ButtonColor":"var(--outline)","@apply border border-outline text-outline-content":true},".btn-ghost":{"-ButtonColor":"var(--outline)","@apply text-outline":true},".btn-danger":{"-ButtonColor":"var(--danger)","-ContentColor":"var(--danger-content)"},".btn-primary":{"-ButtonColor":"var(--primary)","-ContentColor":"var(--primary-content)"},".btn-primary,\n.btn-danger":{"backgroundColor":"oklch(var(--button-color))","borderColor":"oklch(var(--button-color))","color":"oklch(var(--content-color))"},".btn-primary:hover,\n.btn-danger:hover":{"backgroundColor":"color-mix(in oklab, oklch(var(--button-color)), black 10%)","borderColor":"color-mix(in oklab, oklch(var(--button-color)), black 10%)"},".btn:focus-visible":{"@apply outline outline-2 outline-offset-2 outline-primary":true},".btn-sm":{"-ButtonHeight":"1.5rem","@apply px-[0.5rem] text-[0.75rem]":true},".btn-lg":{"-ButtonHeight":"3.5rem","@apply px-[1.5rem] text-[1rem]":true},".btn-square":{"@apply w-[var(--button-height)] p-[unset]":true},".btn:active:hover,\n.btn-outline:active:hover,\n.btn-ghost:active:hover":{"backgroundColor":"color-mix(\n    in oklab,\n    oklch(var(--button-color)) 25%,\n    transparent\n  )"},".btn-primary:active:hover,\n.btn-primary:active:focus,\n.btn-danger:active:hover,\n.btn-danger:active:focus":{"backgroundColor":"color-mix(in oklab, oklch(var(--button-color)), black 17%)","borderColor":"color-mix(in oklab, oklch(var(--button-color)), black 17%)"},".btn:active:hover,\n.btn:active:focus":{"transform":"scale(var(--btn-pressed-scale, 0.97))"},"input[type=\"checkbox\"].toggle":{"-ToggleBase":"oklch(var(--primary))","-ToggleContrast":"oklch(var(--text-color))","-ToggleSurroundings":"oklch(var(--page))","-ToggleBorderUnchecked":"var(--toggle-contrast)","-ToggleBorderChecked":"var(--toggle-base)","-ToggleUnchecked":"color-mix(\n    in oklab,\n    var(--toggle-contrast) 10%,\n    var(--toggle-surroundings) 30%\n  )","-ToggleDisabledCheckedBg":"color-mix(\n    in oklab,\n    var(--toggle-surroundings) 20%,\n    var(--toggle-base) 20%\n  )","-ToggleDisabledUncheckedBg":"var(--toggle-surroundings)","-ToggleDisabledCheckedKnob":"var(--toggle-surroundings)","-ToggleDisabledUncheckedKnob":"color-mix(\n    in oklab,\n    var(--toggle-surroundings) 20%,\n    var(--toggle-contrast) 20%\n  )","-ToggleKnob":"var(--toggle-contrast)","-ToggleBgChecked":"var(--toggle-base)","-ToggleKnobChecked":"var(--toggle-surroundings)","WebkitAppearance":"none","MozAppearance":"none","appearance":"none","backgroundColor":"var(--toggle-unchecked)","borderRadius":"72px","flexShrink":"0","height":"20px","margin":"0","position":"relative","width":"30px","borderWidth":"2px","borderColor":"var(--toggle-border-unchecked)","cursor":"pointer"},"input[type=\"checkbox\"].toggle::before":{"bottom":"-6px","content":"\"\"","left":"-6px","position":"absolute","right":"-6px","top":"-6px"},"input[type=\"checkbox\"].toggle::after":{"transition":"all 100ms ease-out","backgroundColor":"var(--toggle-knob)","borderRadius":"50%","content":"\"\"","height":"14px","width":"14px","position":"absolute","left":"1px","top":"1px"},"input[type=\"checkbox\"].toggle:checked":{"backgroundColor":"var(--toggle-bg-checked)","borderColor":"var(--toggle-border-checked)"},"input[type=\"checkbox\"].toggle:checked::after":{"backgroundColor":"var(--toggle-knob-checked)","left":"11px"},"input[type=\"checkbox\"].toggle:focus-visible":{"@apply outline outline-2 outline-offset-2 outline-primary":true},"input[type=\"checkbox\"].toggle:disabled":{"borderColor":"var(--toggle-disabled-unchecked-knob)","backgroundColor":"var(--toggle-disabled-unchecked-bg)","cursor":"not-allowed"},"input[type=\"checkbox\"].toggle:disabled::after":{"backgroundColor":"var(--toggle-disabled-unchecked-knob)"},"input[type=\"checkbox\"].toggle:disabled:checked::after":{"backgroundColor":"var(--toggle-disabled-checked-knob)"},"input[type=\"checkbox\"].toggle:disabled:checked":{"backgroundColor":"var(--toggle-disabled-checked-bg)","borderColor":"var(--toggle-disabled-checked-bg)"},"input[type=\"checkbox\"].toggle.toggle-sm":{"height":"16px","width":"26px"},"input[type=\"checkbox\"].toggle.toggle-sm::after":{"height":"10px","width":"10px"}};