/*******************************************************************************
*
* Name:         main.js
*
* Description:  Source script for the React.js ToDo List widget
*
* Author:       Raven N. Allan
*
* Date:         10.09.15
*
*******************************************************************************/
(function($)
{
	var TodoList = React.createClass({
		render: function() {
			var createItem = function(itemText, index) {
				return (
					<li data-id={index} key={index} className="has-children">
						<label htmlFor={index}>{itemText}</label>
					</li>
				);
			};
			return <ul className="cd-accordion-menu animated">{this.props.items.map(createItem)}</ul>;
		}
	});

	var TodoApp = React.createClass({
		
		getInitialState: function() {
			return {items: [], text: ''};
		},
		
		onChange: function(e) {
			this.setState({text: e.target.value});
		},
		
		handleSubmit: function(e) {
			e.preventDefault();
			var txt = this.state.text;

			// Don't accept empty/null/whitespace items; could also use HTML5 input restrictions or controller component defs...
			if (txt && txt.trim())
			{
				var nextItems = this.state.items.concat([txt]), nextText = '';
				this.setState({items: nextItems, text: nextText});
			}
		},

		render: function() {
			return (
				<div>
					<h1><a href="https://github.com/geekindapink/React-ToDoList" target="_blank">ToDo List</a></h1>
					<TodoList items={this.state.items} />
					<form onSubmit={this.handleSubmit}>
						<input onChange={this.onChange} value={this.state.text} />
						<p><button>{'Add Item #' + (this.state.items.length + 1)}</button></p>
					</form>
				</div>
			);
		}
	});

	ReactDOM.render(<TodoApp />, content);

}(jQuery));