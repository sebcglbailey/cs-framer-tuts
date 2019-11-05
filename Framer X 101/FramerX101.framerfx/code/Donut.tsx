import * as React from "react"
import {
    PropertyControls,
    ControlType,
    Frame,
    addPropertyControls,
} from "framer"

const frameStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: "100%",
    background: null,
    WebkitBackdropFilter: "blur(20px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}
const scoreStyle: React.CSSProperties = {
    color: "#fff",
    fontWeight: 100,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
}
const scoreLabelsStyle: React.CSSProperties = {
    fontSize: 16,
    color: "#fff",
    fontWeight: 300,
    margin: 0,
}
const svgStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    transform: "rotate(-90deg)",
    overflow: "visible",
}
const outlineStyle: React.CSSProperties = {
    stroke: "#fff",
    strokeWidth: 1,
    fill: "none",
}
const ringStyle: React.CSSProperties = {
    stroke: "#fff",
    fill: "none",
    strokeLinecap: "round",
}

const bands = {
    alpha: {
        color: "#FFCC9C",
        max: 320,
    },
    beta: {
        color: "#F7DF71",
        max: 375,
    },
    gamma: {
        color: "#C9DE81",
        max: 415,
    },
    delta: {
        color: "#76E8A9",
        max: 490,
    },
    epsilon: {
        color: "#A4E1EB",
    },
}

// Define type of property
interface Props {
    score: number
    width: number
    height: number
    simple: boolean
}

export function Donut(props) {
    const { width, score, simple } = props

    const offset =
        Math.PI * (width - width * 0.06) -
        Math.PI * (width - width * 0.06) * (score / 700)
    const color =
        score < bands.alpha.max
            ? bands.alpha.color
            : score < bands.beta.max
            ? bands.beta.color
            : score < bands.gamma.max
            ? bands.gamma.color
            : score < bands.delta.max
            ? bands.delta.color
            : score >= bands.delta.max
            ? bands.epsilon.color
            : "#fff"

    return (
        <Frame style={frameStyle}>
            <div style={{ ...scoreStyle, fontSize: width * 0.25 }}>
                {!simple ? (
                    <p style={{ ...scoreLabelsStyle, fontSize: width * 0.05 }}>
                        Your credit score is
                    </p>
                ) : null}
                {score}
                {!simple ? (
                    <p style={{ ...scoreLabelsStyle, fontSize: width * 0.05 }}>
                        out of 700
                    </p>
                ) : null}
            </div>
            <svg style={svgStyle}>
                <circle
                    style={{
                        ...ringStyle,
                        strokeDasharray: Math.PI * (width - width * 0.06),
                        strokeDashoffset: offset,
                        stroke: color,
                        strokeWidth: width * 0.013,
                    }}
                    cx={width / 2}
                    cy={width / 2}
                    r={width / 2 - width * 0.03}
                />
                <circle
                    style={outlineStyle}
                    cx={width / 2}
                    cy={width / 2}
                    r={width / 2}
                />
            </svg>
        </Frame>
    )
}

Donut.defaultProps = {
    width: 300,
    height: 300,
    score: 380,
    simple: false,
}

addPropertyControls(Donut, {
    score: { type: ControlType.Number, title: "Score", min: 0, max: 700 },
    simple: { type: ControlType.Boolean, title: "Simple" },
})
