import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const COUNTRIES = [
  ['nigeria', 'Nigeria'],
  ['kenya', 'Kenya'],
  ['ghana', 'Ghana'],
  ['south-africa', 'South Africa'],
  ['gambia', 'Gambia'],
  ['cameroon', 'Cameroon'],
  ['united-kingdom', 'United Kingdom'],
  ['united-states', 'United States'],
  ['niger', 'Niger'],
  ['egypt', 'Egypt'],
]
function mockRegister() {
  return new Promise((resolve) => setTimeout(resolve, 1500))
}

function Buyerform() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const navigate = useNavigate()


    function validate() {
    const newErrors = {}

    if (!fullName.trim()) newErrors.fullName = 'Full name is required'

    if (!email.trim()) newErrors.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Enter a valid email address'

    if (phone && !/^\+?[0-9\s-]{7,15}$/.test(phone)) newErrors.phone = 'Enter a valid phone number'

    if (!location) newErrors.location = 'Please select your country'

    if (!password) newErrors.password = 'Password is required'
    else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters'

    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password'
    else if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match'

    if (!agreedToTerms) newErrors.terms = 'You must agree to continue'

    return newErrors
  }

   async function handleSubmit(event) {
  event.preventDefault()
  if (isLoading) return

  const newErrors = validate()
  setErrors(newErrors)
  if (Object.keys(newErrors).length > 0) return

  setIsLoading(true)
  setSubmitError('')

  try {
    await mockRegister()
    navigate('/login')
  } catch {
    setSubmitError('Something went wrong. Please try again.')
  } finally {
    setIsLoading(false)
  }
}

  return (
    <div className="bg-gray-50 min-h-screen p-6">

      {/* Top row: Home button + Brand name */}
      <div className="grid grid-cols-3 items-center">
        <Link className="justify-self-start bg-green-100 text-green-600 px-5 py-2 rounded-xl text-xs font-medium hover:bg-green-200 cursor-pointer">
          ← Home
        </Link>
        <h1 className="text-base font-medium text-gray-800 text-center">
          Basket Chain
        </h1>
      </div>

      {/* Main row: form | image */}
      <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] items-start mt-6">

        {/* LEFT column: header + form */}

        <div className="bg-white p-6 rounded-xl max-w-sm mx-auto w-full">
          <h2 className="text-2xl font-semibold text-green-600 text-center mb-2">Create Buyer Account</h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            Join our Marketplace and source quality produce
            <br />
            directly from verified farmers.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-xs text-gray-700 mb-1">Full Name / Business Name</label>
              <input className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your name or business name"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                required
              />
              {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-xs text-gray-700 mb-1">Email Address</label>
              <input className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                type="email"
                id="email"
                name="email"
                placeholder="yourname@mail.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-xs text-gray-700 mb-1">Phone Number</label>
              <input className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                type="tel"
                id="phone"
                name="phone"
                placeholder="+234 800 000 0000"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>} 
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="block text-xs text-gray-700 mb-1">Company/Organization (optional)</label>
              <input className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                type="text"
                id="company"
                name="company"
                placeholder="Your company name"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-xs text-gray-700 mb-1">Location</label>
              <select  className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                name="location"
                id="location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                required
              >
                <option value="">Select your country</option>
                {COUNTRIES.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
               {errors.location && <p className="text-xs text-red-500 mt-1">{errors.location}</p>}  
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-xs text-gray-700 mb-1">Password</label>
              <input className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                type="password"
                id="password"
                name="password"
                placeholder="Min 8 characters"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                minLength={8}
                required
              />
                {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>} 
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-xs text-gray-700 mb-1">Confirm Password</label>
              <input className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter previous password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
                {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Terms and Privacy Policy */}
            <div className="flex items-center gap-2 mb-4">
              <input className="h-4 w-4 accent-green-500"
                type="checkbox"
                id="terms"
                name="terms"
                checked={agreedToTerms}
                onChange={(event) => setAgreedToTerms(event.target.checked)}
                required
              />
              <label htmlFor="terms" className="text-xs text-gray-600 italic">
                I agree to the Terms of Service &amp; Privacy Policy
              </label>
            </div>
             {errors.terms && <p className="text-xs text-red-500 mb-2">{errors.terms}</p>} 

            {/* Feedback message */}
            {submitError && <p className="text-sm text-red-500 mb-2">{submitError}</p>}

            <button
  type="submit"
  disabled={isLoading}
  className="w-full bg-green-500 text-white py-3 rounded-xl text-sm font-semibold 
  hover:bg-green-600 cursor-pointer mt-2 disabled:opacity-60 disabled:cursor-not-allowed">

  {isLoading ? 'Creating account...' : 'Create Account'}
</button>

            <p className="text-xs text-gray-600 text-center mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-green-600 font-medium hover:underline">Log in</Link>
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

export default Buyerform