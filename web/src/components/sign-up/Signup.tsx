"use client";
import { SignUpDocument } from "@/generated/graphql";
import { useMutation } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  email: string;
  password: string;
  terms: boolean;
}

interface Stat {
  label: string;
  value: string;
}

const SignupPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    terms: false,
  });
  const [signupMutate, { loading }] = useMutation(SignUpDocument, {
    onCompleted(data) {
      toast.success(data.signUp);
      router.push("/login");
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const stats: Stat[] = [
    { label: "Success Rate", value: "93%" },
    { label: "Avg. Salary Increase", value: "+35%" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    console.log("Form submitted:", formData);
    if (!formData.email || !formData.password || !formData.name) {
      toast.error("Please fill all required fields");
      return;
    }
    const signup = await signupMutate({
      variables: {
        createUserInput: {
          email: formData.email,
          name: formData.name,
          password: formData.password,
        },
      },
    });
  };

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen w-full flex-row bg-gray-50">
      {/* Left Side: Form Section */}
      <div className="flex w-full flex-col justify-center bg-white px-4 py-12 sm:px-6 lg:w-1/2 lg:px-20 xl:px-24 border-r border-gray-100">
        {/* Logo Header */}
        <div className="flex items-center gap-2 mb-10 lg:mb-16">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
            <span className="material-symbols-outlined text-[20px]">
              auto_graph
            </span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            CareerAI
          </h2>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Create your account
            </h2>
            <p className="text-base text-gray-600">
              Join thousands of professionals using AI to land their dream job.
            </p>
          </div>

          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900 mb-2"
              >
                Full Name
              </label>
              <div className="relative rounded-lg shadow-sm">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full rounded-lg border-0 py-3.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  placeholder="e.g. Jane Doe"
                />
              </div>
            </div>

            {/* Work Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 mb-2"
              >
                Work Email
              </label>
              <div className="relative rounded-lg shadow-sm">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full rounded-lg border-0 py-3.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900 mb-2"
              >
                Password
              </label>
              <div className="relative rounded-lg shadow-sm group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full rounded-lg border-0 py-3.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  placeholder="Min. 8 characters"
                />
                <div
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-400 hover:text-gray-600"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? "visibility" : "visibility_off"}
                  </span>
                </div>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start">
              <div className="flex h-6 items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="terms" className="font-normal text-gray-500">
                  By signing up, I agree to the{" "}
                  <a
                    href="#"
                    className="font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                onClick={handleSubmit}
                type="button"
                disabled={loading}
                className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
              >
                {loading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-neutral-tertiary animate-spin fill-brand"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "  Create Account"
                )}
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>

      {/* Right Side: Feature Visual */}
      <div className="hidden lg:flex w-1/2 relative bg-blue-600/5 items-center justify-center overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-[20%] -right-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-blue-600/20 to-purple-500/20 blur-3xl"></div>
          <div className="absolute top-[40%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-blue-400/20 to-blue-600/10 blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full max-w-lg px-8">
          <div className="bg-white/60 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
                <img
                  alt="Professional woman smiling in business attire"
                  className="h-full w-full rounded-full object-cover border-2 border-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5hTZaYwCVfX9PpY3eSBGxp2d7lz2r4BDasYQUVX4gw6nl2r8Fu6bYHztw-GZo1Prdny5ANphBqnAZ2UIKGA-NNdv5WTKCz821Q0OdQMGNFMkMTs4oiVfdDGRTrOE-Jb5pmVx1lIJ3qsb0J0kuknkYssh_BnwOPRCTleu3z6vED5HcCUefF1sfPXgMcGWKx2yRy_6Qd4CBFG4AsT9YbTrUa321ZgCjkxSmquGQKDtxx7f9UoZ5dG0imm4UkLTizZAL5xh62qP1VNDB"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Sarah Jenkins
                </h3>
                <p className="text-sm text-gray-500">Senior Product Manager</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-lg text-gray-700 italic leading-relaxed">
                "CareerAI transformed my job search. The AI resume optimization
                helped me land interviews at 3 top tech companies within weeks.
                It's like having a personal career coach 24/7."
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {stat.label}
                  </span>
                  <span className="text-xl font-bold text-blue-600">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract floating elements */}
          <div className="absolute -z-10 -right-12 top-10 bg-white p-4 rounded-lg shadow-lg rotate-6 animate-pulse">
            <span className="material-symbols-outlined text-blue-600 text-3xl">
              work_outline
            </span>
          </div>
          <div className="absolute -z-10 -left-8 bottom-10 bg-white p-4 rounded-lg shadow-lg -rotate-3">
            <span className="material-symbols-outlined text-purple-500 text-3xl">
              trending_up
            </span>
          </div>
        </div>
      </div>

      {/* Material Symbols CDN */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default SignupPage;
