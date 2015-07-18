'use strict';

class ReactInputWithLabel extends BaseComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="form-group">
        <label className="col-lg-2 control-label" htmlFor={ this.props.id }>{ this.props.labelText }</label>
        <div className="col-lg-10">
          <input
            className="form-control"
            id={ this.props.id }
            onChange={ this.props.onChange }
            placeholder={ this.props.labelText }
            type="text"
            value={ this.props.value } />
        </div>
      </div>
    );
  }

}
