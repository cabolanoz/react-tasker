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
        </fieldset>
      </form>
    );
  }

}
