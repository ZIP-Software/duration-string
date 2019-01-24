interface DurationObject {
    hours: number,
    minutes: number,
    seconds: number,
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

export default function durationToString(durationInSeconds: number): string {
    const duration: DurationObject = getDurationObject(durationInSeconds)
    const durationString = `${createDurationString(String(duration.hours))}:${createDurationString(String(duration.minutes))}:${createDurationString(String(duration.seconds))}`
    return durationString
}