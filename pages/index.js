import { useAuth } from '../lib/auth'

export default function Index() {
  const { user, loading, signinWithGitHub, signout } = useAuth()

  if (loading) return <div>Loading</div>

  return user ? (
    <div>
      <p>Email: {user.email}</p>
      <button onClick={(e) => signout()}>Sign Out</button>
    </div>
  ) : (
    <div>
      <button onClick={(e) => signinWithGitHub()}>Sign In with Github</button>
    </div>
  )
}
