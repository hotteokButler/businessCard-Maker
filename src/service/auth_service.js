// Authdontication에 관련된 일 (longin/longout같은것들 )
import { getAuth, signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.githubProvider = new GithubAuthProvider();
    this.googleProvider = new GoogleAuthProvider();
  }

  login(providerName) {
    const authProvider = this.checkProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  checkProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return this.googleProvider;
      case 'Github':
        return this.githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
