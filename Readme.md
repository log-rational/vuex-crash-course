# Vuex Crash Course - Traversy Media

[https://youtu.be/5lVQgZzLMHc](https://youtu.be/5lVQgZzLMHc)

## Why use vuex?

- Components needs to share state in many cases.
- Vuex provides a single source of truth for all data/state.
- No need to pass events up and props down through multiple components.
- Global state is **reactive**.

## How it works?

![screenshot1](Assets/screenshot-1.png)

## Vuex Terms

- **State** - App - level state/data (todos, posts, token etc)
- **Getters** - Get pieces of state or computed values from state
- **Actions** - Called from components to commit a mutation
- **Mutation** - Mutate the state (update data, etc)
- **Modules** - Each modules can have its own state, getters, actions and mutations (posts module, auth module, etc)
