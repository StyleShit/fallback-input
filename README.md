# Fallback Input

Type in any language and get a fallback value in English!

Enhancing the built-in `<input />` tag with the ability to get the English equivalent of the typed word
when a user forgets to change the typing language.

[Demo](https://evyatar.tk/fallback-input/demo.html)


## Usage

```HTML
<!-- Polyfill for Safari -->
<script src="https://unpkg.com/@ungap/custom-elements"></script>
<script src="./src/fallback-input.min.js"></script>

<input is="fallback-input" type="text" placeholder="Type something" />

<script>
    fallbackInput.addEventListener( 'keyup', ( e ) => {
        console.log( e.target.fallbackValue );
    } );
</script>
```


## Notes / Known Issues:

- In order to determine the pressed key, the code uses `e.keyCode` which is depreated and might be removed in the future.

- The "most accurate" fallback value is available only after a `keyup` event.

- Access the fallback value using `input.fallbackValue` in your code.

- The fallback value might not always be accurate and this code doesn't cover all of the use-cases, but in a real-world scenario we've found it to be very useful and usable *as a fallback*.