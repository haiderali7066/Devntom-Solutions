"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (res.ok) {
      setSuccess("Message sent successfully!");
      e.currentTarget.reset();
    }

    setLoading(false);
  }

  return (
    <section className="bg-[#e6e6e6] py-20 text-black">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-medium mb-4">Contact Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input name="name" placeholder="Name" required className="input" />
            <input name="phone" placeholder="Phone" className="input" />
            <input
              name="email"
              placeholder="Email"
              required
              className="input"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input name="country" placeholder="Country" className="input" />
            <input name="title" placeholder="Title" className="input" />
            <input name="company" placeholder="Company" className="input" />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
            className="input resize-none "
          />

          <label className="flex items-center gap-2 text-sm text-black">
            <input type="checkbox" />I want to receive SSI News & Updates by
            email & SMS
          </label>

          {/* Fake recaptcha UI (same as screenshot) */}
          <div className="bg-white text-black w-[300px] p-4 flex items-center gap-4">
            <input type="checkbox" />
            <span>I'm not a robot</span>
            <span className="ml-auto text-xs">reCAPTCHA</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-sky-600 px-8 py-2 rounded text-white hover:bg-sky-700"
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {success && <p className="text-green-400">{success}</p>}
        </form>

        {/* RIGHT INFO */}
        <div className="text-black space-y-6">
          <p>
            Delivering the best-in-class experience to our users faster, without
            compromising quality.
          </p>

          <div className="flex items-center gap-6">
            <img src="/certs/iso.png" className="h-14" />
            <img src="/certs/azure.png" className="h-14" />
            <img src="/certs/safe.png" className="h-14" />
          </div>

          <img src="/certs/aws.png" className="h-16 mt-4" />
        </div>
      </div>

      {/* INPUT STYLES */}
      <style jsx>{`
        .input {
          background: transparent;
          border: 1px solid #9ca3af;
          padding: 10px;
          border-radius: 6px;
          color: white;
          outline: none;
        }
        .input::placeholder {
          color: #cbd5e1;
        }
      `}</style>
    </section>
  );
}
