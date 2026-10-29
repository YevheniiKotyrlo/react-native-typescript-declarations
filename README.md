# React Native TypeScript declarations reproducer

Made from the React Native reproducer template. `ReproducerApp` runs `react-native@0.89.0-nightly-20261029-25b05acd7` with TypeScript 7.0.2 and `@types/react` 19.3.0, and each check below type-checks a one-line import of `react-native` with `skipLibCheck: false` and `strict: true`.

```sh
cd ReproducerApp
yarn install
```

| Command | What it shows |
| --- | --- |
| `yarn check:declarations` | `types_generated` fails its own check with `lib: ["ES2024"]`: TS2411 in `AnimatedProps.d.ts`, TS2344 in `VirtualizedList.d.ts`, TS2416 in `ReactNativeDocument.d.ts` |
| `yarn check:dom` | the same program with `lib: ["ES2024", "DOM", "DOM.Iterable"]`: `src/types/globals.d.ts`, which `types_generated/index.d.ts` references, redeclares `fetch`, `FormData`, `Blob`, `URL`, `WebSocket`, `AbortController` and more, against `lib.dom.d.ts` |
| `yarn check:resolve-asset-source` and `yarn jest __tests__/resolveAssetSource-test.ts` | `Image.resolveAssetSource` is declared to return `ImageResolvedAssetSource \| undefined`, so `declarations/resolve-asset-source.ts` type-checks with only `undefined` ruled out; at runtime the function returns `null` for an unknown asset id and that code throws `TypeError: Cannot read properties of null (reading 'uri')` |
