'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Loader, AlertCircle } from 'lucide-react';

interface ConsultationFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  serviceType: string;
  budget: string;
  timeline: string;
  message: string;
}

interface ConsultationFormProps {
  onSuccess?: () => void;
}

export default function ConsultationForm({ onSuccess }: ConsultationFormProps) {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    serviceType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ConsultationFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Partial<ConsultationFormData> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    else if (!/^\+?[0-9]{10,}$/.test(formData.phoneNumber.replace(/\D/g, ''))) newErrors.phoneNumber = 'Invalid phone number';
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service';
    if (!formData.timeline) newErrors.timeline = 'Please select a timeline';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof ConsultationFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Log form data (replace with actual API call)
      console.log('Consultation Form Data:', formData);

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        serviceType: '',
        budget: '',
        timeline: '',
        message: '',
      });

      // Close modal after success
      setTimeout(() => {
        onSuccess?.();
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 px-4"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <CheckCircle className="h-16 w-16 text-green-500" />
        </motion.div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
        <p className="text-slate-600 text-center">
          Your consultation request has been received. We'll contact you shortly with property options tailored to your needs.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Full Name */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          className={`w-full rounded-lg border px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${
            errors.fullName
              ? 'border-red-300 focus:ring-red-500'
              : 'border-slate-300 focus:ring-[#f66b05]'
          }`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
        )}
      </motion.div>

      {/* Email */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className={`w-full rounded-lg border px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${
            errors.email
              ? 'border-red-300 focus:ring-red-500'
              : 'border-slate-300 focus:ring-[#f66b05]'
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </motion.div>

      {/* Phone Number */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="+91 98765 43210"
          className={`w-full rounded-lg border px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${
            errors.phoneNumber
              ? 'border-red-300 focus:ring-red-500'
              : 'border-slate-300 focus:ring-[#f66b05]'
          }`}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
        )}
      </motion.div>

      {/* Service Type */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          What are you looking for? <span className="text-red-500">*</span>
        </label>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${
            errors.serviceType
              ? 'border-red-300 focus:ring-red-500'
              : 'border-slate-300 focus:ring-[#f66b05]'
          }`}
        >
          <option value="">Select an option</option>
          <option value="buy">Buy a property</option>
          <option value="rent">Rent a property</option>
          <option value="sell">Sell a property</option>
          <option value="investment">Investment consultation</option>
        </select>
        {errors.serviceType && (
          <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>
        )}
      </motion.div>

      {/* Budget (conditional) */}
      {(formData.serviceType === 'buy' || formData.serviceType === 'rent') && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Budget Range
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-[#f66b05]"
          >
            <option value="">Select range</option>
            <option value="below50">Below 50 Lakhs</option>
            <option value="50-100">50-100 Lakhs</option>
            <option value="1-2cr">1-2 Crores</option>
            <option value="2-5cr">2-5 Crores</option>
            <option value="5plus">5+ Crores</option>
          </select>
        </motion.div>
      )}

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          When do you need this? <span className="text-red-500">*</span>
        </label>
        <select
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${
            errors.timeline
              ? 'border-red-300 focus:ring-red-500'
              : 'border-slate-300 focus:ring-[#f66b05]'
          }`}
        >
          <option value="">Select timeline</option>
          <option value="immediate">Immediate</option>
          <option value="1month">Within 1 month</option>
          <option value="3months">1-3 months</option>
          <option value="6months">3-6 months</option>
          <option value="exploring">Exploring (no timeline)</option>
        </select>
        {errors.timeline && (
          <p className="text-red-500 text-xs mt-1">{errors.timeline}</p>
        )}
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Additional Requirements (Optional)
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your specific needs, preferences, or requirements..."
          rows={3}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-[#f66b05] resize-none"
        />
      </motion.div>

      {/* Submit Button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-gradient-to-r from-[#f66b05] to-[#e65f03] px-6 py-3 text-white font-semibold transition hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Get Free Consultation'
        )}
      </motion.button>

      {/* Error message */}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-red-700"
        >
          <AlertCircle className="h-4 w-4" />
          <p className="text-sm">Something went wrong. Please try again.</p>
        </motion.div>
      )}
    </form>
  );
}
