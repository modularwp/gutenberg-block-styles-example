/**
 * Block Styles Example
 *
 * https://github.com/modularwp/gutenberg-block-styles-example
 */
( function() {
	var __                = wp.i18n.__; // The __() function for internationalization.
	var createElement     = wp.element.createElement; // The wp.element.createElement() function to create elements.
	var registerBlockType = wp.blocks.registerBlockType; // The registerBlockType() function to register blocks.
	var RichText          = wp.editor.RichText; // For creating editable elements.

	/**
	 * Register block
	 *
	 * @param  {string}   name     Block name.
	 * @param  {Object}   settings Block settings.
	 * @return {?WPBlock}          Block itself, if registered successfully,
	 *                             otherwise "undefined".
	 */
	registerBlockType(
		'mdlr/block-styles-example', // Block name. Must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
		{
			title: __( 'Block Styles Example' ), // Block title. __() function allows for internationalization.
			icon: 'admin-appearance', // Block icon from Dashicons. https://developer.wordpress.org/resource/dashicons/.
			category: 'common', // Block category. Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
			attributes: {
				content: {
					type: 'string',
					default: 'Block content styled with CSS...'
				},
			},

			// Defines the block within the editor.
			edit: function( props ) {
				var content = props.attributes.content;

				function onChangeContent( updatedContent ) {
					props.setAttributes( { content: updatedContent } );
				}

				return createElement(
					RichText,
					{
						tagName: 'p',
						className: props.className,
						value: content,
						onChange: onChangeContent
					},
				);
			},

			// Defines the saved block.
			save: function( props ) {
				var content = props.attributes.content;

				return createElement(
					'p',
					{
						className: props.className,
					},
					content
				);
			},
		}
	);
})();
