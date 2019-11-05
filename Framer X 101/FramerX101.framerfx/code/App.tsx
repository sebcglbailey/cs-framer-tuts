import { Override, Data } from "framer"

// Learn more: https://framer.com/docs/overrides/

const appState = Data({
    emailError: "BLANK_INPUT",
    passwordError: true,
    score: 512,
    userEmail: "",
})

const users = {
    "awesome@clearscore.com": {
        score: 512,
        password: "Pa55word",
    },
    "okay@clearscore.com": {
        score: 380,
        password: "Test1234",
    },
    "bad@clearscore.com": {
        score: 123,
        password: "ScoreyMcScoreFace",
    },
}

export function EmailInput(): Override {
    return {
        onValueChange: (value: string) => {
            appState.emailError =
                value.length === 0
                    ? "BLANK_INPUT"
                    : !value.includes("@") || !value.includes(".com")
                    ? "WRONG_FORMAT"
                    : Object.keys(users).map(user => {
                          return value === user
                      }).length === 0
                    ? "INVALID_USER"
                    : ""
            appState.userEmail = value
        },
    }
}

export function PasswordInput(): Override {
    return {
        onValueChange: (value: string) => {
            appState.passwordError =
                users[appState.userEmail] == undefined ||
                (users[appState.userEmail] &&
                    value !== users[appState.userEmail].password)
            console.log(appState.passwordError)
            appState.score = users[appState.userEmail]
                ? users[appState.userEmail].score
                : null
        },
    }
}

export function LoginButton(): Override {
    return {
        disabled: appState.emailError || appState.passwordError,
    }
}

export function LoginLink(): Override {
    return {
        visible: !appState.passwordError,
    }
}

export function DonutScore(): Override {
    return {
        score: appState.score,
    }
}
