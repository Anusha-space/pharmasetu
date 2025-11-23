import { useState } from "react";

const ProfessionalForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    university: "",
    registrationId: "",
    letter: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "letter") {
      setFormData({...formData, letter: e.target.files[0] });
    } else {
      setFormData({...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-5 text-center">
        Professional Enrollment Form
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="font-semibold">Student Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="font-semibold">University Name</label>
          <input
            type="text"
            name="university"
            required
            value={formData.university}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="font-semibold">Registration ID</label>
          <input
            type="text"
            name="registrationId"
            required
            value={formData.registrationId}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label className="font-semibold">Letter of Declaration (PDF)</label>
          <input
            type="file"
            name="letter"
            accept="application/pdf"
            required
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProfessionalForm;
