# cypress-fail-on-console-error

### Installation

`npm install cypress-fail-on-console-error --save-dev`

### Usage

cypress/support/index.ts

```
import failOnConsoleError from 'cypress-fail-on-console-error'

failOnConsoleError();
```

### Config (optional)

use `excludeMessages:string[]` to exclude console messages by regex from throwing assertionError.<br/>
Default value is `undefined`.<br/><br/>
use `includeConsoleTypes:ConsoleType[]` to overwrite console types.<br/>
Default value is `[ConsoleType.ERROR]`.

```
const config:Config = {
    excludeMessages: ["foo", "^bar-regex.*$"],
    includeConsoleTypes: [Console.ERROR, ConsoleType.WARN, ConsoleType.INFO],
};

failOnConsoleError(config);
```
