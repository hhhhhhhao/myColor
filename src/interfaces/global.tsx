export interface GlobalModelIF {
    fold: boolean,
    test: any,
}

export interface EffectsPCEIF {
    put: Function
    call: Function
    select: Function
}

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string,
}