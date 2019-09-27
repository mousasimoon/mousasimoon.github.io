import React, {Component} from 'react';
import './App.css';
import Main from './components/main';
import Footer_section from './components/footer';
import { Spinner, Layout, Header, Navigation, Button, Dialog, DialogTitle, DialogContent, DialogActions} from 'react-mdl';
import GoogleLogin from 'react-google-login';
import {Link} from 'react-router-dom';
import  { Redirect } from 'react-router-dom'


class App extends Component{
  constructor() {
    super();
    this.state = {
      scrolled: false,
      loading: false,
      isAuthenticated: false,
      user: null,
      user_id: null,
      token: null
    };
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  logout = () => {
        window.location.pathname = '/';
        this.setState({isAuthenticated: false,
        user: null,
        user_id: null,
        token: null});
  };


  googleResponse = (response) => {
    this.setState({loading: true});
    const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
    console.log(tokenBlob);
    const options = {
        method: 'POST',
        body: tokenBlob,
        mode: 'cors',
        cache: 'default',
    };

    fetch('http://ec2-13-209-26-92.ap-northeast-2.compute.amazonaws.com/auth/', options).then(r => {
      r.json().then(data => {
        console.log(data);
        const token= data["jwt_token"];
        const user = data["user"];
        const user_id = data["id"];
        if (token && user) {
            this.setState({isAuthenticated: true, user, user_id, token})
        }
        this.setState({loading: false});
      });
    })
  };

  handleOpenDialog() {
    if (!this.state.isAuthenticated) {
      this.setState({
        openDialog: true
      });
    }
  };

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  };


  onFailure = (error) => {
    alert(error);
  };

  render() {
    let content = !!this.state.isAuthenticated ?
        (
          <div>
            <div class ="mdl-navigation__link">
                <button onClick={this.logout} className="button logout">
                    Log out
                </button>
            </div>
          </div>
        ) :
        (   !!this.state.loading ?
            (
              <div class="spin"><Spinner/></div>
            ):
            (
              <div>
                  <GoogleLogin
                      clientId="363229411229-r81jnpf96k2v8o1a19ate9ccc674ko0f.apps.googleusercontent.com"
                      buttonText="Login"
                      onSuccess={this.googleResponse}
                      onFailure={this.googleResponse}
                  />
              </div>
            )
        );
    return (
      <div class="bg">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <header class={this.state.scrolled ? 'nav scrolled' : 'nav'}>
          <div class="mdl-layout__header-row">
            <span class="mdl-layout-title"><Link class="daimo_title" to={{pathname: '/', user_id:this.state.user_id}}>DAIMŌ</Link></span>
            <div class="spacer"> </div>
            <nav class="mdl-navigation">
              <Dialog open={this.state.openDialog}>
                <DialogTitle>Please Login</DialogTitle>
                <DialogContent>
                  <p>Please login to continue</p>
                </DialogContent>
                <DialogActions>
                  <Button type='button' onClick={this.handleCloseDialog}>OK</Button>
                </DialogActions>
              </Dialog>
              <Link class= "mdl-navigation__link" to={{pathname: this.state.isAuthenticated ? '/service' : '/', token: this.state.token, user_id: this.state.user_id}} onClick={this.handleOpenDialog}> Service </Link>
              <Link class= "mdl-navigation__link favorites" to={{pathname: this.state.isAuthenticated ? '/favorites' : '/', token: this.state.token, user_id: this.state.user_id}} onClick={this.handleOpenDialog}> Favorites </Link>
              <a class= "mdl-navigation__link none" href="#docs">Docs</a>
              <a class= "mdl-navigation__link none" href="#footer">Contact</a>
                {content}
            </nav>
          </div>
        </header>
        <Main/>
        <div id="footer">
          <Footer_section/>
        </div>
      </div>
    );
  }
}

export default App;
