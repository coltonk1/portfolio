import * as React from "react";
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 1920 241"
        height="auto"
        preserveAspectRatio="none"
        fill="none"
        {...props}
    >
        <g strokeWidth={3} clipPath="url(#a)" opacity={0.15}>
            <path
                stroke="url(#b)"
                d="M0 120.867c240-80 480 80 720 0s480-80 720 0 240 80 480 0"
            />
            <path
                stroke="url(#c)"
                d="M0 120.867c240 80 480-80 720 0s480 80 720 0 240-80 480 0"
                opacity={0.9}
            />
            <path
                stroke="url(#d)"
                d="M0 130.867c240-80 480 80 720 0s480-80 720 0 240 80 480 0"
                opacity={0.5}
            />
            <path
                stroke="url(#e)"
                d="M0 110.867c240 80 480-80 720 0s480 80 720 0 240-80 480 0"
                opacity={0.4}
            />
            <path
                stroke="url(#f)"
                d="M0 125.867c240-65 480 65 720 0s480-65 720 0 240 65 480 0"
                opacity={0.3}
            />
            <path
                stroke="url(#g)"
                d="M0 115.867c240 65 480-65 720 0s480 65 720 0 240-65 480 0"
                opacity={0.3}
            />
            <path
                stroke="url(#h)"
                d="M0 135.867c240-65 480 75 720 0s480-65 720 0 240 75 480 0"
                opacity={0.2}
            />
        </g>
        <defs>
            <linearGradient
                id="b"
                x1={0}
                x2={192000}
                y1={60.867}
                y2={60.867}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#3E8BE3" />
                <stop offset={1} stopColor="#A76FE3" />
            </linearGradient>
            <linearGradient
                id="c"
                x1={0}
                x2={192000}
                y1={60.867}
                y2={60.867}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#A76FE3" />
                <stop offset={1} stopColor="#3E8BE3" />
            </linearGradient>
            <linearGradient
                id="d"
                x1={0}
                x2={192000}
                y1={70.867}
                y2={70.867}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#3E8BE3" />
                <stop offset={1} stopColor="#A76FE3" />
            </linearGradient>
            <linearGradient
                id="e"
                x1={0}
                x2={192000}
                y1={50.867}
                y2={50.867}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#A76FE3" />
                <stop offset={1} stopColor="#3E8BE3" />
            </linearGradient>
            <linearGradient
                id="f"
                x1={0}
                x2={192000}
                y1={77.117}
                y2={77.117}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#3E8BE3" />
                <stop offset={1} stopColor="#A76FE3" />
            </linearGradient>
            <linearGradient
                id="g"
                x1={0}
                x2={192000}
                y1={67.117}
                y2={67.117}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#A76FE3" />
                <stop offset={1} stopColor="#3E8BE3" />
            </linearGradient>
            <linearGradient
                id="h"
                x1={0}
                x2={192000}
                y1={83.3}
                y2={83.3}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#3E8BE3" />
                <stop offset={1} stopColor="#A76FE3" />
            </linearGradient>
            <clipPath id="a">
                <path fill="#fff" d="M0 .867h1920v240H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgComponent;
