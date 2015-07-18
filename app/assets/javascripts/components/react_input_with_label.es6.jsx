'use strict';

class ReactInputWithLabel extends BaseComponent {

  constructor(props) {
    super(props);
  }

  tagType() {
    return {
      'input': this.props.inputType,
      'textarea': null
    }[ this.props.elementType ];
  }

  render() {
    return(
      <div className="form-group">
        <label className="col-lg-2 control-label" htmlFor={ this.props.id }>{ this.props.labelText }</label>
        <div className="col-lg-10">
          <this.props.elementType
            className="form-control"
            id={ this.props.id }
            onChange={ this.props.onChange }
            placeholder={ this.props.labelText }
            type={ this.tagType() }
            value={ this.props.value } />
        </div>
      </div>
    );
  }

}

ReactInputWithLabel.defaultProps = {
  elementType: 'input',
  inputType: 'text'
};
