let subscriber = null

function signal(value) {
    const subscriptions = new Set()

    return {
        get value() {
            if (subscriber) {
                subscriptions.add(subscriber)
            }
            return value
        },
        set value(updated) {
            value = updated
            subscriptions.forEach((fn) => fn())
        },
    }
}

function effect(fn) {
    subscriber = fn
    fn()
    subscriber = null
}

function derived(fn) {
    const derived = signal()
    effect(() => {
        derived.value = fn()
    })
    return derived
}

// =================================
// Mit Deps Tracking
// =================================

const depsMap = new Map()

function removeEffect(fn) {
    depsMap.forEach((deps) => {
        if (deps.has(fn)) {
            deps.delete(fn)
        }
    })
}

function signal2(value) {
    const refObject = {
        get value() {
            if (subscriber) {
                if (!depsMap.has(refObject)) {
                    depsMap.set(refObject, new Set())
                }
                depsMap.get(refObject).add(subscriber)
            }
            return value
        },
        set value(updated) {
            value = updated
            depsMap.get(refObject).forEach((fn) => fn())
        },
    }

    return refObject
}
