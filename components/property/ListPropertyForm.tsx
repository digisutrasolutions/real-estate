'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Loader, AlertCircle } from 'lucide-react';

interface ListPropertyFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  propertyType: string;
  location: string;
  area: string;
  bedrooms: string;
  priceRange: string;
  description: string;
  timeline: string;
}

interface ListPropertyFormProps {
  onSuccess?: () => void;
}

export default function ListPropertyForm({ onSuccess }: ListPropertyFormProps) {
  const [formData, setFormData] = useState<ListPropertyFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    propertyType: '',
    location: '',
    area: '',
    bedrooms: '',
    priceRange: '',
    description: '',
    timeline: '',
  });

  const [errors, setErrors] = useState<Partial<ListPropertyFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Partial<ListPropertyFormData> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    else if (!/^\+?[0-9]{10,}$/.test(formData.phoneNumber.replace(/\D/g, ''))) newErrors.phoneNumber = 'Invalid phone number';
    if (!formData.propertyType) newErrors.propertyType = 'Please select property type';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.bedrooms) newErrors.bedrooms = 'Please select bedrooms';
    if (!formData.timeline) newErrors.timeline = 'Please select timeline';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof ListPropertyFormData]) {
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
      console.log('List Property Form Data:', formData);

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        propertyType: '',
        location: '',
        area: '',
        bedrooms: '',
        priceRange: '',
        description: '',
        timeline: '',
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
          We've received your property details. Our expert team will contact you within 2 hours to discuss your selling options.
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

      {/* Property Type */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Property Type <span className="text-red-500">*</span>
        </label>
        <select
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${
            errors.propertyType
              ? 'border-red-300 focus:ring-red-500'
              : 'border-slate-300 focus:ring-[#f66b05]'
          }`}
        >
          <option value="">Select property type</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="house">House</option>
          <option value="commercial">Commercial</option>
          <option value="plot">Plot/Land</option>
        </select>
        {errors.propertyType && (
          <p className="text-red-500 text-xs mt-1">{errors.propertyType}</p>
        )}
      </motion.div>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          City/Location <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g., Mumbai, Bangalore"
          className={`w-full rounded-lg border px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${
            errors.location
              ? 'border-red-300 focus:ring-red-500'
              : 'border-slate-300 focus:ring-[#f66b05]'
          }`}
        />
        {errors.location && (
          <p className="text-red-500 text-xs mt-1">{errors.location}</p>
        )}
      </motion.div>

      <div className="grid grid-cols-2 gap-3">
        {/* Bedrooms */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Bedrooms <span className="text-red-500">*</span>
          </label>
          <select
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${
              errors.bedrooms
                ? 'border-red-300 focus:ring-red-500'
                : 'border-slate-300 focus:ring-[#f66b05]'
            }`}
          >
            <option value="">Select</option>
            <option value="studio">Studio</option>
            <option value="1bhk">1 BHK</option>
            <option value="2bhk">2 BHK</option>
            <option value="3bhk">3 BHK</option>
            <option value="4bhk">4 BHK</option>
            <option value="5plus">5+ BHK</option>
          </select>
          {errors.bedrooms && (
            <p className="text-red-500 text-xs mt-1">{errors.bedrooms}</p>
          )}
        </motion.div>

        {/* Area */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Area (sq ft)
          </label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="1500"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-[#f66b05]"
          />
        </motion.div>
      </div>

      {/* Price Range */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Approximate Price Range (Optional)
        </label>
        <select
          name="priceRange"
          value={formData.priceRange}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-[#f66b05]"
        >
          <option value="">Select range (optional)</option>
          <option value="below50">Below 50 Lakhs</option>
          <option value="50-100">50-100 Lakhs</option>
          <option value="1-2cr">1-2 Crores</option>
          <option value="2-5cr">2-5 Crores</option>
          <option value="5plus">5+ Crores</option>
        </select>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          When do you want to sell? <span className="text-red-500">*</span>
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
          <option value="asap">ASAP</option>
          <option value="1month">Within 1 month</option>
          <option value="3months">1-3 months</option>
          <option value="6months">3-6 months</option>
          <option value="flexible">Flexible</option>
        </select>
        {errors.timeline && (
          <p className="text-red-500 text-xs mt-1">{errors.timeline}</p>
        )}
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
      >
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Property Condition (Optional)
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe property condition, recent renovations, or special features..."
          rows={2}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-[#f66b05] resize-none"
        />
      </motion.div>

      {/* Submit Button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
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
          'Get Free Valuation'
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
