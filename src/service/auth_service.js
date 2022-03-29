// Authdontication에 관련된 일 (longin/longout같은것들 )
import {
  getAuth,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';

class AuthService {
  constructor(firebaseApp) {
    this.firebaseApp = firebaseApp;
    this.firebaseAuth = getAuth(this.firebaseApp);
    this.githubProvider = new GithubAuthProvider();
    this.googleProvider = new GoogleAuthProvider();
  }

  login(providerName) {
    const authProvider = this.checkProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  onAuthChange(onUserChange) {
    onAuthStateChanged(this.firebaseAuth, (user) => {
      onUserChange(user);
    });
  }

  logout() {
    signOut(this.firebaseAuth);
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
