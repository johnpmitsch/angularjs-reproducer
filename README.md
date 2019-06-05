This is to set up a reproducer of an error I'm running into with webpack + angularjs

I followed [this tutorial](https://medium.com/@zamarrowski/angular-1-x-component-based-application-with-webpack-and-es6-dfab450f2df4)

and I'm getting this error:

```
Uncaught Error: [$injector:modulerr] Failed to instantiate module pokemonPoc due to:
Error: [$injector:modulerr] Failed to instantiate module {"_invokeQueue":[],"_configBlocks":[["$injector","invoke",{}]],"_runBlocks":[],"requires":["ui.router"],"name":"pokemonPoc.pokemons"} due to:
Error: [ng:areq] Argument 'module' is not a function, got Object


https://errors.angularjs.org/1.7.8/$injector/modulerr?p0=pokemonPoc&p1=Error%3A%20%5B%24injector%3Amodulerr%5D%20Failed%20to%20instantiate%20module%20%7B%22_invokeQueue%22%3A%5B%5D%2C%22_configBlocks%22%3A%5B%5B%22%24injector%22%2C%22invoke%22%2C%7B%7D%5D%5D%2C%22_runBlocks%22%3A%5B%5D%2C%22requires%22%3A%5B%22ui.router%22%5D%2C%22name%22%3A%22pokemonPoc.pokemons%22%7D%20due%20to%3A%0AError%3A%20%5Bng%3Aareq%5D%20Argument%20'module'%20is%20not%20a%20function%2C%20got%20Object%0A%0Ahttps%3A%2F%2Ferrors.angularjs.org%2F1.7.8%2F%24injector%2Fmodulerr%3Fp0%3D%257B%2522_invokeQueue%2522%253A%255B%255D%252C%2522_configBlocks%2522%253A%255B%255B%2522%2524injector%2522%252C%2522invoke%2522%252C%257B%257D%255D%255D%252C%2522_runBlocks%2522%253A%255B%255D%252C%2522requires%2522%253A%255B%2522ui.router%2522%255D%252C%2522name%2522%253A%2522pokemonPoc.pokemons%2522%257D%26p1%3DError%253A%2520%255Bng%253Aareq%255D%2520Argument%2520'module'%2520is%2520not%2520a%2520function%252C%2520got%2520Object%250Ahttps%253A%252F%252Ferrors.angularjs.org%252F1.7.8%252Fng%252Fareq%253Fp0%253Dmodule%2526p1%253Dnot%252520a%252520function%25252C%252520got%252520Object%250A%2520%2520%2520%2520at%2520http%253A%252F%252Flocalhost%253A3000%252Fbin%252Fapp.bundle.js%253A12428%253A12%250A%2520%2520%2520%2520at%2520assertArg%2520(http%253A%252F%252Flocalhost%253A3000%252Fbin%252Fapp.bundle.js%253A14384%253A11)%250A%2520%2520%2520%2520at%2520assertArgFn%2520(http%253A%252F%252Flocalhost%253A3000%252Fbin%252Fapp.bundle.js%253A14394%253A3)%250A%2520%2520%2520%2520at%2520http%253A%252F%252Flocalhost%253A3000%252Fbin%252Fapp.bundle.js%253A17336%253A11%250A%2520%2520%2520%2520at%2520forEach%2520(http%253A%252F%252Flocalhost%253A3000%252Fbin%252Fapp.bundle.js%253A12677%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(http%253A%252F%252Flocalhost%253A3000%252Fbin%252Fapp.bundle.js%253A17310%253A5)%250A%2520%2520%2520%2520at%2520http%253A%252F%252Flocalhost%253A3000%252Fbin%252Fapp.bundle.js%253A17328%253A40%250A%2520%2520%2520%2520at%2520forEach%2520(http%253A%252F%252Flocalhost%253A3000%252Fbin%252Fapp.bundle.js%253A12677%253A20)%250A%2520%2520%2520%2520at%2520loadModules%2520(http%253A%252F%252Flocalhost%253A3000%252Fbin%252Fapp.bundle.js%253A17310%253A5)%250A%2520%2520%2520%2520at%2520createInjector%2520(http%253A%252F%252Flocalhost%253A3000%252Fbin%252Fapp.bundle.js%253A17227%253A19)%0A%20%20%20%20at%20http%3A%2F%2Flocalhost%3A3000%2Fbin%2Fapp.bundle.js%3A12428%3A12%0A%20%20%20%20at%20http%3A%2F%2Flocalhost%3A3000%2Fbin%2Fapp.bundle.js%3A17350%3A15%0A%20%20%20%20at%20forEach%20(http%3A%2F%2Flocalhost%3A3000%2Fbin%2Fapp.bundle.js%3A12677%3A20)%0A%20%20%20%20at%20loadModules%20(http%3A%2F%2Flocalhost%3A3000%2Fbin%2Fapp.bundle.js%3A17310%3A5)%0A%20%20%20%20at%20http%3A%2F%2Flocalhost%3A3000%2Fbin%2Fapp.bundle.js%3A17328%3A40%0A%20%20%20%20at%20forEach%20(http%3A%2F%2Flocalhost%3A3000%2Fbin%2Fapp.bundle.js%3A12677%3A20)%0A%20%20%20%20at%20loadModules%20(http%3A%2F%2Flocalhost%3A3000%2Fbin%2Fapp.bundle.js%3A17310%3A5)%0A%20%20%20%20at%20createInjector%20(http%3A%2F%2Flocalhost%3A3000%2Fbin%2Fapp.bundle.js%3A17227%3A19)%0A%20%20%20%20at%20doBootstrap%20(http%3A%2F%2Flocalhost%3A3000%2Fbin%2Fapp.bundle.js%3A14250%3A20)%0A%20%20%20%20at%20bootstrap%20(http%3A%2F%2Flocalhost%3A3000%2Fbin%2Fapp.bundle.js%3A14271%3A12)
    at angular.js:138
    at angular.js:5060
    at forEach (angular.js:387)
    at loadModules (angular.js:5020)
    at createInjector (angular.js:4937)
    at doBootstrap (angular.js:1960)
    at bootstrap (angular.js:1981)
    at angularInit (angular.js:1866)
    at angular.js:36430
    at HTMLDocument.trigger (angular.js:3520)
```

To reproduce:

- git clone this repo
- npm i
- npm start
