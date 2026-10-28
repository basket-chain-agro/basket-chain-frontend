import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

// MOCK ONLY: replace with the real API call once the backend is ready
function mockLogin(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'buyer@test.com' && password === 'password123') resolve()
      else reject(new Error('Invalid credentials'))
    }, 1500)
  })
}

const labelClass = 'block text-sm text-gray-700 mb-1'
const inputClass =
  'w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

 async function handleSubmit(event) {
    event.preventDefault()
    if (loading) return // stops repeat submits

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (password === '') {
      setError('Please enter your password.')
      return
    }
   try {
    await mockLogin(email, password)
    navigate(ROUTES.dashboard)
  } catch {
    setError('Login failed. Please check your details and try again.')
  } finally {
    setLoading(false)
  }
 }

  return (
    <div className="bg-gray-50 min-h-screen p-6">

      {/* Top row: Home button + Brand name */}
      <div className="grid grid-cols-3 items-center">
        <Link to={ROUTES.home} className="justify-self-start bg-green-200 text-green-600 px-5 py-2 rounded-xl text-base font-medium hover:bg-green-300 cursor-pointer">
          ← Home
        </Link>
        <h1 className="text-xl font-medium text-gray-800 text-center">
          Basket Chain
        </h1>
      </div>

      {/* Main row: form | image */}
      <div className="grid grid-cols-1 md:grid-cols-[480px_1fr] items-start mt-6">

        {/* LEFT column */}
        <div className="w-full p-6">
          <h2 className="text-3xl font-semibold text-green-600 text-center mb-2">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            Log in to your buyer account to continue
            <br />
            sourcing quality produce.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-6">
              <label htmlFor="email" className={labelClass}>Email Address</label>
              <input
                className={inputClass}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className={labelClass}>Password</label>
              <input
                className={inputClass}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                />
                <Link to="forgot-password" className="block text-xs text-red-500 mt-2 hover:underline">Forgot Password?</Link>
            </div>

              <div className="flex items-center gap-3 mb-6">
                <input className="w-4 h-4 accent-green-600"
                 type="checkbox"
                 id="remember"
                 name="remember"
                 checked={rememberMe} 
                 onChange={(event) => setRememberMe (event.target.checked) }
                 />
                 <label htmlFor="remember" className="text-xs text-gray-500">Remember Me</label>
              </div>

                {error && (
              <p role="alert" className="text-sm text-red-500 mb-4">
                {error}
              </p>
                )
              }
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-4 rounded-xl text-base font-semibold hover:bg-green-700 cursor-pointer"
            >
              Login
            </button>

            <p className="text-sm text-gray-500 text-center mt-5">
              New User?{" "}
              <Link to={ROUTES.register} className="text-green-600 font-semibold hover:underline">
               Sign up
             </Link>
            </p>
          </form>
        </div>

        {/* RIGHT column: image */}
        <div className="hidden md:flex items-center justify-center">
          <img
            className="w-full max-w-md max-h-[80vh] object-contain"
            src="/Fruit-basket.png"
            alt="A man holding a basket of fruits"
          />
        </div>

      </div>
    </div>
  )
}

export default Login