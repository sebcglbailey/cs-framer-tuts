import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

import _Input from "@clearscore/rainbow.text-input"
import _Label from "@clearscore/rainbow.label"

// Open Preview: Command + P
// Learn more: https://framer.com/api

const types = {
    email: "Email",
    number: "Number",
    password: "Password",
    text: "Text",
    date: "Date",
    tel: "Tel",
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

interface Props {
    label: string
    placeholder: string
    type: string
    theme: string
    prepend: string
    suffix: string
    error: string
    dirty: boolean
    disabled: boolean
    invalid: boolean
    valid: boolean
    onValueChange: (value: string) => void
}

export class Input extends React.Component<Partial<Props>> {
    static defaultProps = {
        height: 86,
        width: 327,
        label: "Label",
        placeholder: "Placeholder",
        type: "text",
        theme: "LIGHT",
        prepend: "",
        suffix: "",
        // error: "",
        dirty: false,
        disabled: false,
        invalid: false,
        valid: false,
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const element = event.nativeEvent.target as HTMLInputElement
        const value = element.value
        this.setState({ value })
        if (this.props.onValueChange) this.props.onValueChange(value)
    }

    render() {
        const {
            label,
            placeholder,
            type,
            theme,
            prepend,
            suffix,
            error,
            dirty,
            disabled,
            invalid,
            valid,
        } = this.props

        return (
            <React.Fragment>
                <_Label>{label}</_Label>
                <_Input
                    placeholder={placeholder}
                    type={type}
                    theme={theme}
                    prepend={prepend}
                    suffix={suffix}
                    // errorMessage={error}
                    isDirty={dirty}
                    isDisabled={disabled}
                    isInvalid={invalid}
                    isValid={valid}
                    onChange={value => this.onChange(value)}
                />
            </React.Fragment>
        )
    }
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Input, {
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "Label",
    },
    type: {
        title: "Type",
        type: ControlType.Enum,
        defaultValue: "PRIMARY",
        options: Object.keys(types),
        optionTitles: Object.keys(types),
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "Placeholder",
    },
    theme: {
        title: "Theme",
        type: ControlType.Enum,
        defaultValue: "LIGHT",
        options: Object.keys(themes),
        optionTitles: Object.keys(themes),
    },
    prepend: {
        title: "Prepend",
        type: ControlType.String,
        defaultValue: "",
    },
    suffix: {
        title: "Suffix",
        type: ControlType.String,
        defaultValue: "",
    },
    // error: {
    //     title: "Error message",
    //     type: ControlType.String,
    //     defaultValue: "",
    // },
    dirty: {
        title: "Dirty",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    invalid: {
        title: "Invalid",
        type: ControlType.Boolean,
        defaultValue: false,
        hidden(props) {
            return props.valid
        },
    },
    valid: {
        title: "Valid",
        type: ControlType.Boolean,
        defaultValue: false,
        hidden(props) {
            return props.invalid
        },
    },
})
