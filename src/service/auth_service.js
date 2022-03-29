// Authdontication에 관련된 일 (longin/longout같은것들 )
import { getAuth, signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.githubProvider = new GithubAuthProvider();
    this.googleProvider = new GoogleAuthProvider();
  }

  login(providerName) {
    return signInWithPopup(this.firebaseAuth, this.githubProvider);
  }
}

export default AuthService;
