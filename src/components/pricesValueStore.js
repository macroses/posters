import { writable } from 'svelte/store';

let pricesRange = {
    min: "",
    max: ""
}

export const pricesRangeStore = writable(pricesRange);