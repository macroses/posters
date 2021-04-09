import posts from '../moc/posts.json';
import {writable} from 'svelte/store';

export const allStores = writable(posts)