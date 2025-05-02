import { writable } from "svelte/store";
import type { Todo } from "./types";

export const todoList = writable([] as Todo[]);