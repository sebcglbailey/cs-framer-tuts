import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

import "./text.css"

/* ============================
    COMPONENT
============================ */

export function Text(props) {
  const { text, type } = props
  
  return (
    <React.Fragment>
      <div
        className={type}
      >
        {text}
      </div>
    </React.Fragment>
  )
}

/* ============================
    PROPERTIES
============================ */

const types = {
  h1: "H1",
  h2: "H2",
  h3: "H3",
  h4: "H4",
  body: "Body",
  bodySmall: "Body [Small]",
  overline: "Overline",
}

Text.defaultProps = {
  text: "Text",
  width: 320,
  type: "H1",
}

addPropertyControls(Text, {
  text: {
    type: ControlType.String,
    title: "Text",
    defaultValue: "Text",
  },
  type: {
    type: ControlType.Enum,
    title: "Type",
    options: Object.keys(types),
    optionTitles: Object.keys(types).map(type => types[type]),
  },
})