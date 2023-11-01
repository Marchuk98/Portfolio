import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={110} height={110} {...props}>
        <circle cx={52.883} cy={53.5} r={51.28} stroke="#0F9" strokeWidth={3.205} />
        <g filter="url(#a)">
            <path
                fill="#0F9"
                d="M44.336 62.047c-.587 0-1.09-.21-1.51-.628a2.053 2.053 0 0 1-.627-1.509V47.09c0-.588.21-1.09.629-1.51a2.054 2.054 0 0 1 1.508-.627H61.43c.587 0 1.09.21 1.51.629.418.418.627.921.626 1.508v12.82c0 .588-.21 1.09-.628 1.51a2.053 2.053 0 0 1-1.508.627H44.336Zm8.547-7.479 8.547-5.341V47.09l-8.547 5.342-8.547-5.342v2.137l8.547 5.341Z"
            />
        </g>
        <defs>
            <filter
                id="a"
                width={47.007}
                height={42.734}
                x={29.379}
                y={32.133}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset />
                <feGaussianBlur stdDeviation={6.41} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.6 0 0 0 0.55 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_214_136" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_214_136"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)
const Email = memo(SvgComponent)
export { Email }