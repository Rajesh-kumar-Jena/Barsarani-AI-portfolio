"use client";

import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", { method: "POST", body: formData });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong.");
      form.reset();
      setStatus("success");
      setMessage("Thanks — your message has been sent. I’ll get back to you soon.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your message right now.");
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container-shell">
          <div className="compact-section-title"><Mail size={14} /><h2>Get in Touch</h2></div>
          <p className="contact-intro">I’m open to new opportunities and exciting projects.<br /><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-fields">
              <label>Name<input name="name" required minLength={2} placeholder="Your name" /></label>
              <label>Email<input name="email" type="email" required placeholder="your@email.com" /></label>
            </div>
            <label>Subject<input name="subject" required minLength={3} placeholder="AI Engineer opportunity" /></label>
            <label>Message<textarea name="message" required minLength={20} rows={2} placeholder="Tell me about your project or opportunity..." /></label>
            <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="contact-submit">
              <p aria-live="polite" className={`contact-status ${status}`}>{message}</p>
              <button disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send Message"} <Send size={12} /></button>
            </div>
          </form>
      </div>
    </section>
  );
}
