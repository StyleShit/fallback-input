class FallbackInput extends HTMLInputElement {

    /**
     * Initialize the Custom Element.
     * 
     * @return {void}
     */
	constructor() {
		super();

		this.fallback = '';
	}

    /**
     * Invoked each time the Custom Element is appended into a document-connected element.
     * 
     * @return {void}
     */
	connectedCallback() {
		this.bindEvents();
	}

    /**
     * Bind default element events.
     * 
     * @return {void}
     */
	bindEvents() {
		this.addEventListener( 'keyup', this.onKeyUp.bind( this ) );
	}

    /**
     * Listen to key up event and set the fallback value.
     * 
     * @param {KeyboardEvent} e - Keyup event object.
     * 
     * @return {void}
     */
    onKeyUp( e ) {
        // Don't catch keyboard shortcuts.
		if ( e.shiftKey || e.ctrlKey || e.altKey ) {
			return;
		}

		// Reset fallback value if the input is empty or some chars were deleted.
		if ( ! e.currentTarget.value || e.currentTarget.value.length < this.fallback.length ) {
			this.fallback = '';
		}

		const isLetter = ( e.keyCode >= 65 && e.keyCode <= 90 )
        const isSpace = ( 32 === e.keyCode );

		if ( isLetter || isSpace ) {
			this.fallback += String.fromCharCode( e.keyCode ).toLowerCase();
		}
    }

}

customElements.define( 'fallback-input', FallbackInput, { extends: 'input' } );