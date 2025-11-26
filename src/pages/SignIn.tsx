import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  const [role, setRole] = useState("student");
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // reset success message after 4 seconds
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Sign In / Registration</h1>

      <form
        onSubmit={handleSubmit}
        className="border p-6 rounded-xl shadow-sm space-y-5 bg-white"
      >
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            required
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        {/* DOB */}
        <div>
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            required
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            required
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Role Selector */}
        <div>
          <label className="block text-sm font-medium mb-1">You are a</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="student">Student</option>
            <option value="professional">Professional</option>
          </select>
        </div>

        {/* Conditional Inputs */}
        {role === "student" ? (
          <>
            {/* University */}
            <div>
              <label className="block text-sm font-medium mb-1">University / College</label>
              <input
                type="text"
                required
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your institution name"
              />
            </div>

            {/* Declaration Letter Upload */}
            <div>
              <label className="block text-sm font-medium mb-1">
                University Declaration Letter (PDF/JPG/PNG)
              </label>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                required
                onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                className="w-full border rounded-md px-3 py-2 file:mr-4 file:py-2 file:px-4 
                file:rounded-md file:border-0 file:bg-blue-600 file:text-white cursor-pointer"
              />

              {fileName && (
                <p className="text-xs text-gray-600 mt-1">
                  ✅ Uploaded: {fileName}
                </p>
              )}

              <p className="text-xs text-red-500 mt-1 font-medium">
                * Must be reuploaded every academic year
              </p>
            </div>
          </>
        ) : (
          <div>
            <label className="block text-sm font-medium mb-1">
              Organization / Workplace
            </label>
            <input
              type="text"
              required
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your company/organization name"
            />
          </div>
        )}

        {/* Submit Button */}
        <Button type="submit" className="w-full rounded-full bg-gradient-primary">
          Submit
        </Button>
      </form>

      {/* Success Message */}
      {submitted && (
        <p className="text-green-600 text-center font-medium mt-4">
          ✅ Form submitted successfully!
        </p>
      )}
    </div>
  );
};

export default SignIn;
