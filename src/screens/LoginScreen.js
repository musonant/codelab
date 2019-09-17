import React from 'react';
import { AuthSession } from 'expo';
import { Text, Button, View, AsyncStorage } from 'react-native';

export default class Login extends React.Component {
  componentDidMount() {
    this.signup();
  }

  state = {
    REDIRECT_URL: AuthSession.getRedirectUrl(),
    github: {
      id: '2ce25d19ba518a6bc3bf',
      secret: '8a17397a799b5b54ef4ede5991373dfa14ce4d1e',
    },
    githubFields: ['user', 'public_repo'],
  };

  signup = async () => {
    const { github, githubFields } = this.state;

    const { params } = await AuthSession.startAsync({
      authUrl: this.authUrlWithId(github.id, githubFields),
    });

    const { access_token } = await this.createTokenWithCode(params.code);
    AsyncStorage.setItem('userToken', access_token);

    this.props.navigation.navigate('Loading');
  };

  authUrlWithId = (id, fields) => {
    return (
      `https://github.com/login/oauth/authorize` +
      `?client_id=${id}` +
      `&redirect_uri=${encodeURIComponent(this.state.REDIRECT_URL)}` +
      `&scope=${encodeURIComponent(fields.join(' '))}`
    );
  };

  createTokenWithCode = async code => {
    const { github } = this.state;
    const url =
      `https://github.com/login/oauth/access_token` +
      `?client_id=${github.id}` +
      `&client_secret=${github.secret}` +
      `&code=${code}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return res.json();
  };

  render() {
    return (
      <View>
        <Text>Login {this.state.newStuff && 'what'} Here</Text>
        <Button
          title="Back Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
