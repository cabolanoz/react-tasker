'use strict';

class NewTaskForm extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    }

    this._bind('onTitleChange', 'onDescriptionChange', 'onFormSubmit');
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    $.ajax({
      url: '/tasks.json',
      type: 'POST',
      dataType: 'JSON',
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({
        task: this.state
      })
    });
  }

  render() {
    return(
      <form action="/tasks" className="form-horizontal" method="post" onSubmit={ this.onFormSubmit }>
        <fieldset>
          <legend>New Task</legend>
          <ReactInputWithLabel
            id="title"
            labelText="Title"
            onChange={ this.onTitleChange }
            value={ this.state.title } />
          <ReactInputWithLabel
            elementType="textarea"
            id="description"
            labelText="Description"
            onChange={ this.onDescriptionChange }
            value={ this.state.description } />
        </fieldset>
        <div className="form-group">
          <div className="col-lg-10 col-lg-offset-2">
            <button className="btn btn-primary" type="submit">Save</button>
          </div>
        </div>
      </form>
    );
  }

}
