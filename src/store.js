// stores.js

import { writable } from "svelte/store";

// Create a writable store for managing the current section
export const section = writable("about");
