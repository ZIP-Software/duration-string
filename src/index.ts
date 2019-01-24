interface DurationObject {
    hours: number,
    minutes: number,
    seconds: number,
}

interface VisibilityOptionsType {
    forceShowHours: boolean
    forceShowMinutes: boolean
}

function createDurationString(input: string): string {
    return (input.length === 2) ? input : '0' + input
}

function getDurationObject(durationInSeconds: number): DurationObject {
    const times: DurationObject = {
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    times.hours = Math.floor(durationInSeconds / 60 / 60)
    if (times.hours) durationInSeconds -= (times.hours * 60 * 60)
    times.minutes = Math.floor(durationInSeconds / 60)
    if (times.minutes) durationInSeconds -= (times.minutes * 60)
    times.seconds = Math.floor(durationInSeconds)

    return times
}

export default function durationToString(durationInSeconds: number, visibilityOptions: VisibilityOptionsType): string {
    const defaultVisibilityOptions: VisibilityOptionsType = {
        forceShowHours: true,
        forceShowMinutes: true,
    }
    const mergedVisibilityOption: VisibilityOptionsType = (!visibilityOptions) ? defaultVisibilityOptions : Object.assign(defaultVisibilityOptions, visibilityOptions)

    const duration: DurationObject = getDurationObject(durationInSeconds)
    let durationString = ``
    
    if (duration.hours || (duration.hours === 0 && mergedVisibilityOption.forceShowHours)) {
        durationString += `createDurationString(String(duration.hours))}:`
    }

    if (duration.minutes || (duration.minutes === 0 && mergedVisibilityOption.forceShowMinutes)) {
        durationString += `createDurationString(String(duration.minutes))}:`
    }

    durationString += `${createDurationString(String(duration.seconds))}`

    return durationString
}