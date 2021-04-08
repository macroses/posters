import { writable } from 'svelte/store';

let pricesRange = {
    min: 0,
    max: 0
}

export const pricesRangeStore = writable(pricesRange);