import * as React from "react"
import { PropertyControls, ControlType } from "framer"

import { Text } from "./Text"

import "./input.css"

const types = {
  date: "Date",
  email: "Email",
  month: "Month",
  number: "Number",
  password: "Password",
  tel: "Tel",
  text: "Text",
  time: "Time",
  url: "URL",
  week: "Week",
}

interface Props {
  placeholder: string
  disabled: boolean
  label: string
  type: string
  onValueChange: (value: string) => void
}

interface State {
  value: string
}

/* ============================
    COMPONENT
============================ */

export class Input extends React.Component<Partial<Props>, State> {

  static defaultProps = {
    placeholder: "Input",
    width: 320,
    height: 76,
    disabled: false,
    label: "Label",
    value: null,
  }

  static propertyControls: PropertyControls<Props> = {
    label: {
      type: ControlType.String,
      title: "Label",
      defaultValue: "Label",
    },
    placeholder: {
      type: ControlType.String,
      title: "Placeholder",
      defaultValue: "Input",
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
  }

  state = {
    value: Input.defaultProps.value
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.nativeEvent.target as HTMLInputElement
    const value = element.value
    this.setState({ value })
    if (this.props.onValueChange) this.props.onValueChange(value)
  }
  
  render() {
    const { placeholder, disabled, label, type } = this.props
    
    return (
      <React.Fragment>
        <Text
          type={"h3"}
          className="label"
          text={label}
        />
        <input
          onChange={this.onChange}
          className="input"
          disabled={disabled}
          placeholder={placeholder}
          type={type}
        />
      </React.Fragment>
    )
  }
}