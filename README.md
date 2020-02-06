# jsoncodegen-generator-typescript

> jsoncodegen JSON to TypeScript code generator.

Generates TypeScript interfaces from jsoncodegen interfaces. Enums are converted to TypeScript enums.

## Output directories

### `__type__`

Contains all the interfaces & enums.

### `__factory__`

Contains factory functions for each interface. It is recommended to use these factory functions to create instances of each interface, because they can fill in some properties automatically and also ensure strict type checks.

Factory functions can be called like this:

```TS
const myObject = makeMyObject({
  name: 'Budapest',
  flag: true,
  count: 3,
})
```

### `__union_type__`

Contains TypeScript union types that can be very useful when you need to identify a type based on a property.

*This folder is only generated if you have at least one interface that has an enum value property.*

Let's say you have multiple city interfaces defined like this:

**Budapest.json**

```JSON
{
  ".is": "interface",
  ".description": "The city of Budapest.",
  
  "cityId": "./CityID.Budapest"
}
```

And you have a CityID enum defined like this:

**CityID.json**

```JSON
{
  ".is": "enum",
  ".description": "City IDs.",

  "Boston": "Boston",
  "Budapest": "Budapest"
}
```

The `__union_type__` folder will contain `THas_cityId.ts`, and you can use it like this:

```TS
function workWithCity(city: THas_cityId) {
  switch (city.cityId) {
    case CityID.Boston:
      // city is now an instance of the Boston interface
      break
    case CityID.Budapest:
      // city is now an instance of the Budapest interface
      break
  }
}
```

### `__assert__`

Contains assertion functions. These functions validate an object and throw an `__assert_utility__/AssertionError` if the given object does not match the interface. They can be called like this:

```TS
const myObject = getMyObjectFromSomewhere()
try {
  assertMyObject(myObject)
  // myObject is now an instance of the MyObject interface
} catch (e) {
  if (e instanceof AssertionError) {
    // e.message indicates where the problem is
  }
}
```

### `__assert_utility__`

Contains functions and classes used by assertions in the `__assert__` folder.

## Install

```
npm i -D jsoncodegen-generator-typescript
```

## Config

Configuration can be put in jsoncodegen-generator-typescript.config.js and passed to jsoncodegen in the config parameter:

```
jsoncodegen --generator typescript --config jsoncodegen-generator-typescript.config.js ...
```

**jsoncodegen-generator-java-jackson.config.js**

```js
module.exports = {
  isMutable: false
}
```

### `isMutable?: boolean`

If `true`, emitted interface properties, arrays and maps will not be `readonly`.

## License

MIT

## History

1.0.0 Initial version.
