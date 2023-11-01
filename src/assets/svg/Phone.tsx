import * as React from "react"
import {SVGProps, memo} from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={110} height={110} {...props}>
        <circle
            cx={52.883}
            cy={53.117}
            r={51.28}
            stroke="#0F9"
            strokeWidth={3.205}
        />
        <g filter="url(#a)">
            <path
                fill="#0F9"
                fillRule="evenodd"
                d="M57.234 62.73c-1.37-.051-5.25-.587-9.314-4.65-4.063-4.064-4.598-7.944-4.65-9.314-.076-2.088 1.524-4.116 3.371-4.908a1.396 1.396 0 0 1 1.374.15c1.521 1.11 2.571 2.787 3.473 4.106a1.43 1.43 0 0 1-.244 1.888L49.39 51.38a.457.457 0 0 0-.135.586c.42.763 1.168 1.9 2.024 2.756.856.856 2.047 1.653 2.863 2.12a.46.46 0 0 0 .613-.154l1.207-1.838a1.43 1.43 0 0 1 1.955-.315c1.338.926 2.9 1.958 4.042 3.42a1.398 1.398 0 0 1 .18 1.413c-.796 1.857-2.81 3.438-4.904 3.361Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <filter
                id="a"
                width={44.625}
                height={44.629}
                x={30.448}
                y={30.923}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset/>
                <feGaussianBlur stdDeviation={6.41}/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.6 0 0 0 0.55 0"/>
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_214_137"/>
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_214_137"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)
const Phone = memo(SvgComponent)
export { Phone }