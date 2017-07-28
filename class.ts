import { DataSignal } from 's-js';

//CSSStyleDeclaration keys
export type SClassType = {
    [k: string]: DataSignal<boolean> | boolean
}

export default function classes(...args: SClassType[]) {
    return function classes(node: any) {
        if (args) {
            const classNames: any[] = []
            args.forEach((arg:SClassType) => {
                for (const key in arg) {
                    const val: any = (arg as any)[key]
                    if (typeof val == "function" ? val() : val)
                        classNames.push(key)
                }
            })
            node.className = classNames.join(" ")
        }
    }
}



