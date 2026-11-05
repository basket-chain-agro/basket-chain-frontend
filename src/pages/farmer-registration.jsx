import {useNavigate} from "react-router-dom"
import { useState } from "react";
import { Check, ChevronDown, Sprout } from "lucide-react";
import "../Login.css"

// Registration progress labels.
const steps = ["Personal details", "Farm details", "Crop details"];

// Available crop categories.
const cropOptions = ["Cereals", "Tubers", "Vegetables", "Fruits"];

export default function Login() {
  // Store all form input values.
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ fullName: "", phone: "", password: "", farmName: "", state: "", lga: "", address: "", category: "", crop: "" });

  // Store validation error messages.
  const [errors, setErrors] = useState({});

  const navigate = useNavigate()
  // Update the corresponding input whenever the user types.
  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  // Validate the fields belonging to the current registration step.
  const validate = () => {
    const next = {};

    if (step === 0) {
      if (!form.fullName.trim()) next.fullName = "Enter your full name.";
      if (!form.phone.trim()) next.phone = "Enter Your phone number.";
      else if (!/^\+?[0-9\s()-]{7,20}$/.test(form.phone)) next.phone = "Enter a valid phone number."
      if (form.password.length < 6) next.password = "Use at least 6 characters.";
    } else if (step === 1) {
      if (!form.farmName.trim()) next.farmName = "Enter your farm name.";
      if (!form.state) next.state = "Choose a state.";
      if (!form.lga.trim()) next.lga = "Enter your LGA.";
      if (!form.Landmark.trim()) next.farmSize = "Enter your farm size.";
    } else {
      if (!form.category) next.category = "Choose a crop category.";
      if (!form.crop.trim()) next.crop = "Enter a crop you grow.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  // Validate the current step before moving forward.
  const nextStep = (event) => {
    event.preventDefault();
    if (!validate()) return;

    if (step < 2) {
      setStep((current) => current + 1);
    } else {
      // Replace this alert with a backend request when authentication is connected.
      navigate("/")
      alert("Registration Completed.");
    }
  };

  // Reusable input field with an optional validation message.
  const input = (name, placeholder, type = "text") => (
    <div className="field-wrap">
      <input name={name} type={type} placeholder={placeholder} value={form[name]} onChange={update} aria-invalid={Boolean(errors[name])} />
      {errors[name] && <small className="error">{errors[name]}</small>}
    </div>
  );

  return (
    <main className="page">
      <section className="signup-card" aria-label="Basket Chain Network registration">

        {/* LEFT SIDE: registration form and progress indicator. */}
        <div className="form-panel">

          {/* Show which registration step the user is currently completing. */}
          <div className="progress" aria-label={`Step ${step + 1} of 3`}>
            {steps.map((label, index) => (
              <div className={`progress-step ${index <= step ? "active" : ""}`} key={label}>
                <div className="step-line">
                  <span className="step-dot">{index < step ? <Check size={13} strokeWidth={3} /> : index + 1}</span>
                </div>
                <span className="step-label">{label}</span>
              </div>
            ))}
          </div>

          {/* Submit the current step and validate its fields. */}
          <form onSubmit={nextStep} noValidate>

            {/* STEP 1: personal information. */}
            {step === 0 && (
              <>
                <h1>Join the Basket Chain Network</h1>
                <p className="intro">Create a free to start selling your produce to verified buyers.</p>
                <div className="fields">
                  {input("fullName", "Your Full Name")}
                  {input("phone", "Phone Number(WhatsApp preferred)", "tel")}
                  {input("password", "Password", "password")}
                </div>
              </>
            )}

            {/* STEP 2: farm location and size. */}
            {step === 1 && (
              <>
                <h1>Where is your farm located?</h1>
                <p className="intro">This helps logistics partners pick up your harvest easily</p>
                <div className="fields">
                  <label className="field-label">Farm/Business Name</label>
                  {input("farmName", "e.g. Musa & Sons Farms")}
                  <label className="field-label">State</label>
                  <div className="field-wrap select-wrap">
                    <select name="state" value={form.state} onChange={update} aria-invalid={Boolean(errors.state)}>
                      <option value="">Select from list</option>
                      {["Abia", "Akwa Ibom", "Anambra", "Cross River", "Delta", "Enugu", "Kaduna", "Kano", "Lagos", "Ogun", "Oyo", "Rivers"].map((state) => <option key={state} value={state}>{state}</option>)}
                    </select>
                    <ChevronDown size={16} />
                    {errors.state && <small className="error">{errors.state}</small>}
                  </div>
                  <label className="field-label">LGA</label>
                  {input("lga", "Local Government Area")}
                  <label className="field-label">Town / village</label>
                  {input("address", "e.g. Calabar South")}
                  <label className="field-label">Nearest Landmark</label>
                  {input("Landmark", "e.g. Behind Central Mosque")}
                </div>
              </>
            )}

            {/* STEP 3: crop category and specific product. */}
            {step === 2 && (
              <>
                <h1>What do you grow?</h1>
                <p className="intro">Select the category that best describes what you produce.</p>
                <label className="field-label">Select crop category</label>
                <div className="crop-grid">
                  {cropOptions.map((option) => (
                    <button type="button" key={option} className={`crop-option ${form.category === option ? "selected" : ""}`} onClick={() => { setForm((current) => ({ ...current, category: option })); setErrors((current) => ({ ...current, category: "" })); }}>{option}</button>
                  ))}
                </div>
                {errors.category && <small className="error">{errors.category}</small>}
                <label className="field-label crop-label">Specific product</label>
                {input("crop", "e.g. spinach, cassava, tomatoes")}
                <p className="privacy-note">You can add more crops and products to your profile later.</p>
              </>
            )}

            {/* Back button appears only after the first step. */}
            <div className="form-actions">
              {step > 0 && <button type="button" className="back-button" onClick={() => setStep((current) => current - 1)}>Back</button>}
              <button type="submit" className="next-button">{step === 2 ? "Complete registration" : "Next"}</button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE: an image that changes with each registration step. */}
        <div className={`visual-panel visual-step-${step}`}>
          <img src={["https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1592982537447-6f2a6a0a1d5b?auto=format&fit=crop&w=1200&q=85"][step]} alt={["Farmer smiling outdoors", "Green farm fields and crops", "Freshly harvested green vegetables"][step]} />
          <div className="image-shade" />
          <div className="image-caption">
            <p>{["Growing together, from farm to market.", "Your farm. Your story. Your network.", "Let your harvest reach more people."][step]}</p>
            <span className="caption-subtitle">A stronger chain starts with you.</span>
          </div>
          <div className="image-pagination"><span className={step === 0 ? "current" : ""} /><span className={step === 1 ? "current" : ""} /><span className={step === 2 ? "current" : ""} /></div>
        </div>
      </section>

    </main>
  );
}