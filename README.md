# Bun Crash Course | JavaScript Runtime, Bundler & Transpiler

## About

This is me following Brad Traversy's [youtube video](https://youtu.be/U4JVw8K19uY)

Year 2023

## Official website

https://bum.sh

## Very fast backend framework built to be used with bum

https://elysiajs.com

## Commands I run in order

Init bun app

```zsh
bun init
```

Run .ts file

```zsh
bun run index.ts
```

Run .ts file in watch mode

```zsh
bun --watch index.ts
```

Run .ts file in hot mode

```zsh
bun --hot index.ts
```

There is bunx the the there is npx

```zsh
bunx cowsay Hello Bun
```

Run tests

```zsh
bunx test
```

Run build

```zsh
bun build ./src/index.ts --outfile=./dist/bundle.js
```

## Auto generated readme with bum init

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.4. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
