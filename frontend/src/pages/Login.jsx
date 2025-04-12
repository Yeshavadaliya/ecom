import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("Login");

  const login = async () => {
    console.log("Login function executed", formData);
    let responseData;

    try {
      await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => (responseData = data));

      if (responseData?.success) {
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/");
      }
      else{
       console.log(responseData.errors);
       
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const signup = async () => {
    console.log("Signup function executed", formData);
    let responseData;

    try {
      await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => (responseData = data));

      if (responseData?.success) {
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/");
      }
      else{
       console.log(responseData.errors);
       
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  }; 

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.termsAccepted) {
      tempErrors.termsAccepted = "You must accept the terms and privacy policy";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <form
        onSubmit={handleSubmit}
        className="max-w-[555px] h-auto bg-white m-auto px-14 py-10 rounded-md"
      >
        <h3 className="h3">{state}</h3>
        <div className="flex flex-col gap-4 mt-7">
          {state === "Sign Up" ? (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
              value={formData.name}
              onChange={handleChange}
            />
          ) : (
            ""
          )}
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
          type="submit"
          className="btn_dark_rounded my-5 w-full !rounded-md"
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="text-black font-bold">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
              className="text-secondary underline cursor-pointer"
            >
              Login
            </span>
          </p>
        ) : (
          <p className="text-black font-bold">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
              className="text-secondary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}

        <div className="flexCenter mt-6 gap-3">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {errors.termsAccepted && (
          <p className="text-red-500">{errors.termsAccepted}</p>
        )}
      </form>
    </section>
  );
};

export default Login;
