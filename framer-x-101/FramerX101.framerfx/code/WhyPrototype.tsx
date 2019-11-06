import * as React from "react"
import { Override, Data } from "framer"

// Learn more: https://framer.com/docs/overrides/

const data = Data({
    show: null,
    visible: [""],
})

export function Show(props): Override {
    const { id } = props
    const isVisible = data.show === id
    return {
        variants: {
            visible: {
                opacity: 1,
            },
            hidden: {
                opacity: 0,
            },
        },
        initial: "hidden",
        animate: isVisible
            ? "visible"
            : data.visible.includes(id)
            ? "visible"
            : "hidden",
        onTap: () => {
            data.show = id
            data.visible.push(id)
        },
    }
}
