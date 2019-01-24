interface DurationObject {
    days: number
    hours: number
    minutes: number
    seconds: number
}

interface VisibilityOptionsType {
    forceShowDays: boolean
    forceShowHours: boolean
    forceShowMinutes: boolean
}

function createDurationString(input: string): string {
    return (input.length === 2) ? input : '0' + input
}

function getDurationObject(durationInSeconds: number): DurationObject {
    const times: DurationObject = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    times.days = Math.floor(durationInSeconds / 60 / 60 / 24)
    if (times.days) durationInSeconds -= (times.days * 60 * 60 * 24)
    times.hours = Math.floor(durationInSeconds / 60 / 60)
    if (times.hours) durationInSeconds -= (times.hours * 60 * 60)
    times.minutes = Math.floor(durationInSeconds / 60)
    if (times.minutes) durationInSeconds -= (times.minutes * 60)
    times.seconds = Math.floor(durationInSeconds)

    return times
}

export default function durationToString(durationInSeconds: number, visibilityOptions: VisibilityOptionsType): string {
    const defaultVisibilityOptions: VisibilityOptionsType = {
        forceShowDays: false,
        forceShowHours: true,
        forceShowMinutes: true,
    }
    const mergedVisibilityOption: VisibilityOptionsType = (!visibilityOptions) ? defaultVisibilityOptions : Object.assign(defaultVisibilityOptions, visibilityOptions)

    const duration: DurationObject = getDurationObject(durationInSeconds)
    let durationString = ``

    if (duration.days || (duration.days === 0 && mergedVisibilityOption.forceShowDays)) {
        durationString += `${createDurationString(String(duration.days))}:`
    }
    
    if (duration.hours || (duration.hours === 0 && mergedVisibilityOption.forceShowHours)) {
        durationString += `${createDurationString(String(duration.hours))}:`
    }

    if (duration.minutes || (duration.minutes === 0 && mergedVisibilityOption.forceShowMinutes)) {
        durationString += `${createDurationString(String(duration.minutes))}:`
    }

    durationString += `${createDurationString(String(duration.seconds))}`

    return durationString
}