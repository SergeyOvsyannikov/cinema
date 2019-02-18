export class LoginFormVisible {
  static loginVisible = false;

 public static toggleVisible() {
    LoginFormVisible.loginVisible = !LoginFormVisible.loginVisible;
  }
}
