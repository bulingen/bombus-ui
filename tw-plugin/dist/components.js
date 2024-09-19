module.exports = {".btn":{"-ButtonColor":"var(--outline)","-ButtonHeight":"2.5rem","@apply inline-flex font-semibold px-md rounded box-border border border-transparent transition-all text-primary text-[0.875rem]":true,"@apply h-[var(--button-height)] items-center justify-center gap-x-sm":true,"transitionProperty":"color, background-color, border-color, opacity,\n    box-shadow, transform"},".btn:hover,\n.btn-outline:hover,\n.btn-ghost:hover":{"backgroundColor":"color-mix(\n    in oklab,\n    oklch(var(--button-color)) 12.5%,\n    transparent\n  )"},".btn-outline":{"-ButtonColor":"var(--outline)","@apply border border-outline text-outline-content":true},".btn-ghost":{"-ButtonColor":"var(--outline)","@apply text-outline":true},".btn-danger":{"-ButtonColor":"var(--danger)","-ContentColor":"var(--danger-content)"},".btn-primary":{"-ButtonColor":"var(--primary)","-ContentColor":"var(--primary-content)"},".btn-primary,\n.btn-danger":{"backgroundColor":"oklch(var(--button-color))","borderColor":"oklch(var(--button-color))","color":"oklch(var(--content-color))"},".btn-primary:hover,\n.btn-danger:hover":{"backgroundColor":"color-mix(in oklab, oklch(var(--button-color)), black 10%)","borderColor":"color-mix(in oklab, oklch(var(--button-color)), black 10%)"},".btn:focus-visible":{"@apply outline outline-2 outline-offset-2 outline-primary":true},".btn-sm":{"-ButtonHeight":"1.5rem","@apply px-[0.5rem] text-[0.75rem]":true},".btn-lg":{"-ButtonHeight":"3.5rem","@apply px-[1.5rem] text-[1rem]":true},".btn-square":{"@apply w-[var(--button-height)] p-[unset]":true},".btn:active:hover,\n.btn-outline:active:hover,\n.btn-ghost:active:hover":{"backgroundColor":"color-mix(\n    in oklab,\n    oklch(var(--button-color)) 25%,\n    transparent\n  )"},".btn-primary:active:hover,\n.btn-primary:active:focus,\n.btn-danger:active:hover,\n.btn-danger:active:focus":{"backgroundColor":"color-mix(in oklab, oklch(var(--button-color)), black 17%)","borderColor":"color-mix(in oklab, oklch(var(--button-color)), black 17%)"},".btn:active:hover,\n.btn:active:focus":{"transform":"scale(var(--btn-pressed-scale, 0.97))"}};