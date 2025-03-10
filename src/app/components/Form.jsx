import React, { useState } from "react";

export default function InvestmentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.fullName || !formData.phone) {
      alert("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://api.telecrm.in/enterprise/67a30ac2989f94384137c2ff/autoupdatelead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TELECRM_API_KEY}`,
          },
          body: JSON.stringify({
            fields: {
              name: formData.fullName,
              phone: formData.phone,
            },
            source: "Dholera Times Website",
            tags: ["Dholera Investment", "Website Lead"],
          }),
        }
      );

      const responseText = await response.text();

      if (response.ok && (responseText === "OK" || responseText.toLowerCase().includes("success"))) {
        setFormData({ fullName: "", phone: "" });
        setIsSubmitted(true);
      } else {
        console.error("Response Error:", responseText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Error submitting form: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#071629] text-white p-10 rounded-xl max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-yellow-500 mb-4">INVEST IN FUTURE</h2>
      <p className="text-lg mb-6">Bringing a smart living for generations. <br /> India’s First Greenfield Industrial Smart City</p>

      {isSubmitted ? (
        <p className="text-green-400 text-lg">Thank you! Your details have been submitted successfully.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className="p-3 rounded-md text-black"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 rounded-md text-black"
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 text-black py-3 rounded-md font-semibold hover:bg-yellow-600 transition"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}
