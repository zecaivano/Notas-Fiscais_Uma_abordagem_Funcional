export const partialize = (fn, ...args) => 
    fn.bind(null, ...args)

export const compose = (...fns) => value => 
    fns.reduceRight((previouValue, fn) => 
        fn(previouValue), value)

export const pipe = (...fns) => value => 
    fns.reduce((previouValue, fn) => 
        fn(previouValue), value)

export const takeUntil = (times, fn) => 
    () => times-- > 0 && fn()

export const debounceTime = (miliseconds, fn) => {
    let timer = 0
    return () => {
        clearTimeout(timer)
        timer = setTimeout(fn, miliseconds)
    }
}