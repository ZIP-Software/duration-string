# duration-string

This package takes a value defined in seconds and converts it to a readable string.

```js
import durationString from 'duration-string'

durationString(3600)
// output: 01:00:00

durationString(300)
// output: 00:05:00

durationString(243, {
    forceShowDays: false,
    forceShowHours: false,
    forceShowMinutes: false,
})
// output: 243

durationString(100000, {
    forceShowDays: true,
})
// output: 01:03:46:40
```

## Installation

```
npm install @zip-software/duration-string --save
```