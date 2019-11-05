import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

import "./button.css"

/* ============================
    COMPONENT
============================ */

export function Button(props) {
  const { text, type, disabled } = props
  const classNames = `buttonBase ${type}`
  
  return (
    <React.Fragment>
      <button
        className={classNames}
        disabled={disabled}
      >
        {text}
      </button>
    </React.Fragment>
  )
}

/* ============================
    PROPERTIES
============================ */

const types = {
  primary: "Primary",
  secondary: "Secondary",
  tertiary: "Tertiary",
}

Button.defaultProps = {
  text: "Button",
  type: "PRIMARY",
  width: 160,
  height: 48,
  disabled: false,
}

addPropertyControls(Button, {
  text: {
    type: ControlType.String,
    title: "Text",
    defaultValue: "Button",
  },
  type: {
    type: ControlType.Enum,
    title: "Type",
    options: Object.keys(types),
    optionTitles: Object.keys(types).map(type => types[type]),
  },
  disabled: {
    type: ControlType.Boolean,
    title: "Disabled",
    defaultValue: false,
  }
})