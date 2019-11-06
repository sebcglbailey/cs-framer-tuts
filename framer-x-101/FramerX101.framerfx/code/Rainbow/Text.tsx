import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

import _Text from "@clearscore/rainbow.text"
import "./text.css"

export function Text(props) {
  const { type, text, baseline } = props
  return (
    <div style={{color: "#263648"}}>
    <_Text
      {..._Text.presets[type]}
      useBaseline={baseline}
    >
      {text}
    </_Text>
    </div>
  )
}

Text.defaultProps = {
  type: "BODY1",
  text: "Text"
}

addPropertyControls(Text, {
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Text",
  },
  type: {
    title: "Type",
    type: ControlType.Enum,
    defaultValue: "BODY1",
    options: Object.keys(_Text.presets),
    optionTitles: Object.keys(_Text.presets),
  },
  baseline: {
    title: "Use baseline",
    type: ControlType.Boolean,
  }
})