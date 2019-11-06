import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

import _Button from "@clearscore/rainbow.button"

import "./button.css"

// Open Preview: Command + P
// Learn more: https://framer.com/api

const types = {
    PRIMARY: "PRIMARY",
    SECONDARY: "SECONDARY",
    TERTIARY: "TERTIARY",
}
const sizes = {
    TINY: "TINY",
    SMALL: "SMALL",
    LARGE: "LARGE",
}
const themes = {
    LIGHT: "LIGHT",
    DARK: "DARK",
}

export function Button(props) {
    const { text, type, size, theme, disabled, fullWidth, narrow, flat, loading } = props

    return (
        <React.Fragment>
            <div className="button">
                <_Button
                  type={type}
                  size={size}
                  theme={theme}
                  isDisabled={disabled}
                  isWide={fullWidth}
                  isNarrow={narrow}
                  isFlat={flat}
                  isLoading={loading}
                >
                    {text}
                </_Button>
            </div>
        </React.Fragment>
    )
}

Button.defaultProps = {
    height: 50,
    width: 327,
    text: "Rainbow Button!",
    type: "PRIMARY",
    size: "SMALL",
    theme: "LIGHT",
    disabled: false,
    fullWidth: false,
    narrow: false,
    flat: false,
    loading: false,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Button, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Button",
    },
    type: {
        title: "Type",
        type: ControlType.Enum,
        defaultValue: "PRIMARY",
        options: Object.keys(types),
        optionTitles: Object.keys(types),
    },
    size: {
        title: "Size",
        type: ControlType.Enum,
        defaultValue: "SMALL",
        options: Object.keys(sizes),
        optionTitles: Object.keys(sizes),
    },
    theme: {
        title: "Theme",
        type: ControlType.Enum,
        defaultValue: "LIGHT",
        options: Object.keys(themes),
        optionTitles: Object.keys(themes),
    },
    disabled: {
      title: "Disabled",
      type: ControlType.Boolean,
      defaultValue: false,
    },
    fullWidth: {
      title: "Full width",
      type: ControlType.Boolean,
      defaultValue: false,
      hidden(props) {
        return props.narrow === true
      }
    },
    narrow: {
      title: "Narrow",
      type: ControlType.Boolean,
      defaultValue: false,
      hidden(props) {
        return props.fullWidth === true
      }
    },
    flat: {
      title: "Flat",
      type: ControlType.Boolean,
      defaultValue: false,
    },
    loading: {
      title: "Loading",
      type: ControlType.Boolean,
      defaultValue: false,
    },
})
