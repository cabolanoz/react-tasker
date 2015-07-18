'use strict';

class NewTaskForm extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    }

    this._bind('onTitleChange', 'onDescriptionChange');
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  render() {
    return(
      <form className="form-horizontal">
        <fieldset>
          <legend>New Task</legend>
          <div className="form-group">
            <label className="col-lg-2 control-label" htmlFor="title">Title</label>
            <div className="col-lg-10">
              <input className="form-control" id="title" onChange={ this.onTitleChange } placeholder="Title" type="text" value={ this.state.title } />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label" htmlFor="description">Description</label>
            <div className="col-lg-10">
              <input className="form-control" id="description" onChange={ this.onDescriptionChange } placeholder="Description" type="text" value={ this.state.description } />
            </div>
          </div>
        </fieldset>
      </form>
    );
  }

}
