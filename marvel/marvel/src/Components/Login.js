import React from "react";


class Login extends React.Component {
 // inicialmente o estado é vazio, pois é antes de fazer qualquer introducao de nome
  state = {};
// quando é inserido o nome e clicar enter é atualizado novamente o estado para que as novas informacoes sejam atualizadas
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.name(this.state.name, false);
  };
  render() {
// formulario de iniciar o jogo inserindo o nome
    return (
      <div className="wrapper">
        <div className="login">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                className="form-control"
                onChange={this.handleChange}
              />
              <small className="form-text text-muted">
                This is a memory game
              </small>
            </div>

            <button onClick={this.handleClick} className="btn btn-danger">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
