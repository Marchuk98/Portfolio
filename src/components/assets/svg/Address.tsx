import * as React from "react"
import {SVGProps, memo} from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={110} height={110} {...props}>
        <g filter="url(#a)">
            <path
                fill="#0F9"
                d="M60.752 49.163c0 4.133-7.469 14.108-7.469 14.108s-7.468-9.976-7.468-14.108a7.469 7.469 0 1 1 14.937 0Z"
            />
            <path
                stroke="#0F9"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.66}
                d="M60.752 49.163c0 4.133-7.469 14.108-7.469 14.108s-7.468-9.976-7.468-14.108a7.469 7.469 0 1 1 14.937 0Z"
            />
        </g>
        <g filter="url(#b)">
            <path
                fill="#146B48"
                d="M53.283 51.652a2.49 2.49 0 1 0 0-4.979 2.49 2.49 0 0 0 0 4.98Z"
            />
        </g>
        <circle
            cx={52.883}
            cy={52.883}
            r={51.28}
            stroke="#0F9"
            strokeWidth={3.205}
        />
        <defs>
            <filter
                id="a"
                width={42.238}
                height={48.877}
                x={32.165}
                y={28.044}
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
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_214_135"/>
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_214_135"
                    result="shape"
                />
            </filter>
            <filter
                id="b"
                width={30.619}
                height={30.619}
                x={37.974}
                y={33.853}
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
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_214_135"/>
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_214_135"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)
const Address = memo(SvgComponent)
export { Address }
