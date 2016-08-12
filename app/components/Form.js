var
  React = require('react'),
  PropTypes = require('react').PropTypes;

function Form(props) {
  return(
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              onChange={props.onUpdateUser}
              className="form-control"
              placeholder="Github Username"
              value={props.username}
              type="text" />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
                Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Form.propTypes = {
    header: PropTypes.string.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
};

module.exports = Form;