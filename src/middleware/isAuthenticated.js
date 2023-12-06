export default function ({ store, redirect, $cookies }) {
  const isLoggedIn =  $cookies.get('isLoggedIn')
  if (!isLoggedIn) {
    return redirect('/auth/login')
  }
}
