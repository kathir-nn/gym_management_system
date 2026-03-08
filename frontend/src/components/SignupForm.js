import { useState } from "react";

const SignupForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      firstName: name,
      lastName: "",
      mobileNumber: email,
      password: password
    };

    try {
      const response = await fetch("http://localhost:8082/gym/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      const data = await response.json();
      console.log(data);

      alert("User Registered Successfully");

    } catch (error) {
      console.error(error);
      alert("Error while registering");
    }
  };

  return (
    <div className="selection:bg-indigo-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-indigo-600">
                Create account
              </h1>

              <form className="mt-12" onSubmit={handleSubmit}>

                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className="peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
                    placeholder="Name"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-600 text-sm">
                    Name
                  </label>
                </div>

                {/* Email */}
                <div className="mt-10 relative">
                  <input
                    type="text"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
                    placeholder="Email"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-600 text-sm">
                    Email address
                  </label>
                </div>

                {/* Password */}
                <div className="mt-10 relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
                    placeholder="Password"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-600 text-sm">
                    Password
                  </label>
                </div>

                <input
                  type="submit"
                  value="Sign up"
                  className="mt-20 px-8 py-4 uppercase rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold w-full cursor-pointer"
                />

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;