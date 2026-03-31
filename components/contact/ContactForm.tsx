'use client';

import { Mail, Phone, MapPin, Clock, Send, Loader } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 9876543210',
    subtext: 'Mon-Sat, 9 AM - 7 PM IST',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@realsutra.com',
    subtext: 'We respond within 2 hours',
  },
  {
    icon: MapPin,
    title: 'Head Office',
    content: 'Bangalore, India',
    subtext: '35+ offices across major cities',
  },
  {
    icon: Clock,
    title: 'Availability',
    content: '24/7 Support',
    subtext: 'Emergency assistance available',
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      {/* Contact Info Cards */}
      <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:shadow-lg"
            >
              <div className="mb-4 inline-block rounded-lg bg-gradient-to-br from-[#2c1d14] to-[#7f5d43] p-3">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#2f3a4a]">
                {info.title}
              </h3>
              <p className="mb-1 font-medium text-[#f66b05]">{info.content}</p>
              <p className="text-sm text-slate-500">{info.subtext}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Contact Form */}
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm"
        >
          <h3 className="mb-6 text-2xl font-bold text-[#2f3a4a]">
            Send us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-lg border border-slate-200 px-4 py-3 text-slate-900 transition duration-300 placeholder:text-slate-400 focus:border-[#f66b05] focus:outline-none focus:ring-2 focus:ring-[#f66b05]/20"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-lg border border-slate-200 px-4 py-3 text-slate-900 transition duration-300 placeholder:text-slate-400 focus:border-[#f66b05] focus:outline-none focus:ring-2 focus:ring-[#f66b05]/20"
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 transition duration-300 placeholder:text-slate-400 focus:border-[#f66b05] focus:outline-none focus:ring-2 focus:ring-[#f66b05]/20"
            />

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 transition duration-300 focus:border-[#f66b05] focus:outline-none focus:ring-2 focus:ring-[#f66b05]/20"
            >
              <option value="">Select Subject</option>
              <option value="buy">I want to Buy</option>
              <option value="rent">I want to Rent</option>
              <option value="sell">I want to Sell</option>
              <option value="invest">Development Investment</option>
              <option value="other">Other Inquiry</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 transition duration-300 placeholder:text-slate-400 focus:border-[#f66b05] focus:outline-none focus:ring-2 focus:ring-[#f66b05]/20"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-[#f66b05] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#e55a00] disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader className="h-4 w-4 animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </span>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="rounded-lg bg-green-50 p-4 text-green-700">
                Thank you! We'll get back to you within 2 hours.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="rounded-lg bg-red-50 p-4 text-red-700">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}
          </form>
        </motion.div>

        {/* FAQ / Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <h3 className="mb-4 text-2xl font-bold text-[#2f3a4a]">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {[
                {
                  q: 'How long does the buying process take?',
                  a: 'Typically 4-8 weeks, depending on legal verification and financing approval.',
                },
                {
                  q: 'Do you charge any hidden fees?',
                  a: 'No. We believe in complete transparency. All costs are clearly communicated upfront.',
                },
                {
                  q: 'What areas do you cover?',
                  a: 'We have presence in 35+ cities across India with offices in major metros and growing cities.',
                },
                {
                  q: 'Is there a guarantee on property quality?',
                  a: 'Yes. Every property is thoroughly verified legally and structurally before listing.',
                },
                {
                  q: 'Can I get financing assistance?',
                  a: 'Yes. We assist with bank loan approvals and can recommend trusted lenders.',
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-lg border border-slate-200 bg-white p-4 transition duration-300 hover:border-[#f66b05]"
                >
                  <summary className="flex cursor-pointer items-center justify-between font-semibold text-[#2f3a4a]">
                    {faq.q}
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-3 text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-[#f9eee2] p-6">
            <h4 className="mb-3 font-semibold text-[#2f3a4a]">
              💡 Pro Tips
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>✓ Have your budget and requirements ready for quick consultation</li>
              <li>✓ Request property documents and legal clearance details upfront</li>
              <li>✓ Get pre-approved for home loan before starting the buying process</li>
              <li>✓ Schedule site visits during daylight for better assessment</li>
              <li>✓ Negotiate terms early in the process for better outcomes</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
