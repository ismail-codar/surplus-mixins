export type SAttributeType = {
    [k: string]: any
}

export default function attrs(...args: SAttributeType[]) {
    return function attrs(node: HTMLElement) {
        if (args) {
            args.forEach((arg: SAttributeType) => {
                for (const key in arg) {
                    const val: any = (arg as any)[key]
                    const value = typeof val == "function" ? val() : val
                    if (value != undefined)
                        node.setAttribute(key, value)
                }
            })
        }
    }
}
