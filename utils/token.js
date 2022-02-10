const  atob = require('atob');
export class TokenUtil {
  static accessToken = null;
  static refreshToken = null;
  static primaryColor = null;
  static secondaryColor = null;

  static loadToken() {
    if (typeof window === "undefined") {
      return;
    }

    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    if (accessToken) {
      TokenUtil.setAccessToken(accessToken);
    }

    if(refreshToken) {
      TokenUtil.setRefreshToken(refreshToken);
    }
  }

  static persistToken() {
    if(TokenUtil.accessToken != null) {
      localStorage.setItem('access_token', TokenUtil.accessToken);
    } else {
      localStorage.removeItem('access_token');
    }

    if (TokenUtil.refreshToken != null) {
      localStorage.setItem('refresh_token', TokenUtil.refreshToken);
    } else {
      localStorage.removeItem('refresh_token');
    }

  }

  static persistColorToken() {
    if (TokenUtil.primaryColor != null && TokenUtil.secondaryColor != null) {
      localStorage.setItem('primary_color', TokenUtil.primaryColor);
      localStorage.setItem('secondary_color', TokenUtil.secondaryColor);
    } else {
      localStorage.removeItem('primary_color');
      localStorage.removeItem('secondary_color');
    }
  }

  static setAccessToken(accessToken) {
    TokenUtil.accessToken = accessToken;
  }

  static setColorTheme(color) {
    TokenUtil.primaryColor = color.primary;
    TokenUtil.secondaryColor = color.secondary;
    console.log(color, 'isinya apa')
  }

  static clearColorTheme() {
    TokenUtil.primaryColor = null;
    TokenUtil.secondaryColor = null;
  }

  static setRefreshToken(refreshToken) {
    TokenUtil.refreshToken = refreshToken;
  }

  static clearAccessToken() {
    TokenUtil.accessToken = null;
  }

  static clearRefreshToken() {
    TokenUtil.accessToken = null;
  }

  static decodedToken() {
    return JSON.parse(atob(TokenUtil.accessToken.split('.')[1]));
  }
}
