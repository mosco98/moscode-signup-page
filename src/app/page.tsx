"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import PasswordInput from "./components/PasswordInput";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checksPassed, setChecksPassed] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) return null;

    if (checksPassed) {
      console.log({ email, password });
    } else {
      console.log("SOME/ALL CHECKS DID NOT PASS");
      alert("SOME/ALL CHECKS DID NOT PASS");
    }
  };

  return (
    <>
      <motion.div
        className="min-h-screen grid place-items-center py-8 px-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[380px] w-full">
          <div className="text-left">
            <h1 className="text-2xl font-semibold text-white">
              Find your dream house
            </h1>
            <p className="mt-1 text-sm">
              Start your journey to owning your dream house
            </p>
          </div>

          <form className="mt-12" onSubmit={handleSubmit}>
            <div className="space-y-2 text-sm mb-6">
              <label className="font-medium" htmlFor="email">
                Email address
              </label>

              <input
                className="h-12 block w-full outline-none border border-transparent bg-white p-[14px] rounded-lg focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:border-purple-600 text-[#0D0D0D] placeholder:text-[#0D0D0D]/60 transition-all duration-300 ease-in-out"
                type="email"
                placeholder="you@email.com"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <PasswordInput
              value={password}
              onChange={(value) => setPassword(value)}
              updateChecksPassed={(value) => setChecksPassed(value)}
            />

            <div className="mt-10 space-y-3">
              <div className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879L5 4.60434ZM12 11C10.6193 11 9.5 9.88071 9.5 8.5C9.5 7.11929 10.6193 6 12 6C13.3807 6 14.5 7.11929 14.5 8.5C14.5 9.88071 13.3807 11 12 11ZM7.52746 16C7.77619 13.75 9.68372 12 12 12C14.3163 12 16.2238 13.75 16.4725 16H7.52746Z" />
                </svg>

                <p className="flex-1 text-[13px]">
                  By signing up, you agree to the{" "}
                  <span className="underline font-medium">
                    Terms of service
                  </span>{" "}
                  and{" "}
                  <span className="underline font-medium">Privacy Policy</span>
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 3.04879L5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879ZM16.4524 8.22183L17.8666 9.63604L11.5026 16L7.25999 11.7574L8.67421 10.3431L11.5019 13.1709L16.4524 8.22183Z" />
                </svg>

                <p className="flex-1 text-[13px]">
                  This form is protected by reCAPTCHA and the google{" "}
                  <span className="underline font-medium">Privacy Policy</span>{" "}
                  and{" "}
                  <span className="underline font-medium">
                    Terms of Service
                  </span>{" "}
                  apply.
                </p>
              </div>
            </div>

            <div className="mt-10 text-sm font-medium space-y-2.5">
              <button
                className={cn(
                  "h-11 bg-purple-600 text-white w-full rounded-3xl hover:opacity-85 transition shadow-md",
                  (!checksPassed || !password) &&
                    "bg-purple-400 opacity-80 pointer-events-none"
                )}
                disabled={!checksPassed || !password}
              >
                Create account
              </button>

              <button
                type="button"
                className="h-11 bg-zinc-100 text-black w-full rounded-3xl hover:opacity-85 transition flex items-center justify-center gap-2"
              >
                <svg
                  id="Слой_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="-380.2 274.7 65.7 65.8"
                  className="w-5 h-5"
                >
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".st0{fill:#e0e0e0}.st1{fill:#fff}.st2{clip-path:url(#SVGID_2_);fill:#000000}.st3{clip-path:url(#SVGID_4_);fill:#000000}.st4{clip-path:url(#SVGID_6_);fill:#000000}.st5{clip-path:url(#SVGID_8_);fill:#000000}"
                    }}
                  />
                  <circle className="st0" cx="-347.3" cy="307.6" r="32.9" />
                  <circle className="st1" cx="-347.3" cy="307.1" r="32.4" />
                  <g>
                    <defs>
                      <path
                        id="SVGID_1_"
                        d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                      />
                    </defs>
                    <clipPath id="SVGID_2_">
                      <use xlinkHref="#SVGID_1_" overflow="visible" />
                    </clipPath>
                    <path className="st2" d="M-370.8 320.3v-26l17 13z" />
                    <defs>
                      <path
                        id="SVGID_3_"
                        d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use xlinkHref="#SVGID_3_" overflow="visible" />
                    </clipPath>
                    <path
                      className="st3"
                      d="M-370.8 294.3l17 13 7-6.1 24-3.9v-14h-48z"
                    />
                    <g>
                      <defs>
                        <path
                          id="SVGID_5_"
                          d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                        />
                      </defs>
                      <clipPath id="SVGID_6_">
                        <use xlinkHref="#SVGID_5_" overflow="visible" />
                      </clipPath>
                      <path
                        className="st4"
                        d="M-370.8 320.3l30-23 7.9 1 10.1-15v48h-48z"
                      />
                    </g>
                    <g>
                      <defs>
                        <path
                          id="SVGID_7_"
                          d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                        />
                      </defs>
                      <clipPath id="SVGID_8_">
                        <use xlinkHref="#SVGID_7_" overflow="visible" />
                      </clipPath>
                      <path
                        className="st5"
                        d="M-322.8 331.3l-31-24-4-3 35-10z"
                      />
                    </g>
                  </g>
                </svg>
                Continue with Google
              </button>

              <button
                type="button"
                className="h-11 bg-zinc-100 text-black w-full rounded-3xl hover:opacity-85 transition flex items-center justify-center gap-2"
              >
                <svg
                  className="w-[18px] h-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -3.552713678800501e-15 820 950"
                >
                  <path d="M404.345 229.846c52.467 0 98.494-20.488 138.08-61.465s59.38-88.626 59.38-142.947c0-5.966-.472-14.444-1.414-25.434-6.912.942-12.096 1.727-15.552 2.355-48.383 6.908-90.954 30.615-127.713 71.12-36.758 40.506-55.137 83.838-55.137 129.996 0 5.337.785 14.13 2.356 26.375zM592.379 950c37.387 0 78.701-25.59 123.943-76.772S796.122 761.915 820 692.836c-88.912-45.844-133.368-111.626-133.368-197.348 0-71.591 35.973-132.82 107.92-183.688-49.954-62.486-115.931-93.729-197.931-93.729-34.56 0-66.134 5.181-94.724 15.543l-17.908 6.594-24.035 9.42c-15.709 5.966-30.004 8.95-42.885 8.95-10.054 0-23.25-3.455-39.586-10.363l-18.38-7.536-17.436-7.065c-25.449-10.676-52.782-16.014-82-16.014-78.23 0-141.065 26.376-188.506 79.128C23.72 349.479 0 419.03 0 505.379c0 121.517 38.015 233.772 114.046 336.763C166.828 914.047 215.054 950 258.724 950c18.537 0 36.916-3.611 55.138-10.833l23.092-9.42 18.38-6.594c25.762-9.106 49.482-13.659 71.16-13.659 22.935 0 49.326 5.81 79.173 17.427l14.609 5.652C550.75 944.191 574.786 950 592.379 950z" />
                </svg>
                Continue with Apple
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      <motion.div
        className="fixed bottom-2 right-2 z-50 text-xs bg-black px-3 py-1.5 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 1 }}
      >
        <p>
          Created by{" "}
          <a
            href="https://x.com/meandchimso"
            target="_blank"
            className="underline underline-offset-1"
          >
            @meandchimso
          </a>
        </p>
      </motion.div>
    </>
  );
};

export default HomePage;
