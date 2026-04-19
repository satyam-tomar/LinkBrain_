import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast'; // ✅ NEW: Import Toast

const FloatingInput = ({ 
  id, 
  label, 
  type = "text", 
  icon, 
  value, 
  onChange, 
  focusedInput, 
  setFocusedInput, 
  itemVariants,
  error 
}) => {
  const isFocused = focusedInput === id;
  const isTextArea = type === "textarea";
  const InputComponent = isTextArea ? 'textarea' : 'input';

  return (
    <motion.div variants={itemVariants} className="relative mb-6">
      <div className={`relative w-full border transition-all duration-500 rounded-2xl ${
        error 
          ? 'border-red-500 bg-red-50/10' 
          : isFocused 
            ? 'border-purple-600 bg-white shadow-[0_10px_30px_rgba(147,51,234,0.08)]' 
            : 'border-purple-100 bg-purple-50/20 group-hover:border-purple-200'
      }`}>
        <div className={`absolute left-4 ${isTextArea ? 'top-5' : 'top-1/2 -translate-y-1/2'} transition-colors duration-300 ${error ? 'text-red-500' : isFocused ? 'text-purple-600' : 'text-slate-400'}`}>
          {icon}
        </div>
        <InputComponent
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocusedInput(id)}
          onBlur={(e) => !e.target.value && setFocusedInput(null)}
          className={`w-full bg-transparent pl-12 pr-4 pt-8 pb-3 outline-none font-medium text-slate-900 ${
            isTextArea ? 'h-40 resize-none overflow-y-auto custom-scrollbar' : 'h-20'
          }`}
        />
        <label htmlFor={id} className={`absolute left-12 transition-all duration-300 pointer-events-none ${
            isFocused || value 
              ? 'top-2.5 text-[10px] font-black tracking-widest text-purple-600 uppercase' 
              : `text-base text-slate-500 ${isTextArea ? 'top-5' : 'top-1/2 -translate-y-1/2'}`
          } ${error ? 'text-red-400' : ''}`}>
          {label}
        </label>
      </div>
      
      <AnimatePresence>
        {error && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-500 text-xs font-bold mt-2 ml-2 tracking-wide uppercase"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    mobile: "",
    description: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (errors[id]) {
      setErrors(prev => {
        const newErrs = {...prev};
        delete newErrs[id];
        return newErrs;
      });
    }
    setFormData((prev) => ({
      ...prev,
      [id === "name" ? "firstName" :
       id === "phone" ? "mobile" :
       id === "message" ? "description" :
       id]: value
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.name = "Full name is required";
    if (!formData.email) tempErrors.email = "Secure email is required";
    if (!formData.mobile) tempErrors.phone = "Direct line is required";
    if (!formData.description) tempErrors.message = "Project details are required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

   toast.dismiss('contact-form');

  // ✅ VALIDATION CHECK with ID
  if (!validate()) {
    toast.error("Please fill in all required fields.", { id: 'contact-form' });
    return;
  }

  // ✅ LOADING TOAST with ID
  // This ensures that even if they click multiple times, only one loading bar shows
  toast.loading("Sending your message...", { id: 'contact-form' });

  const payload = {
    name: formData.firstName,
    email: formData.email,
    mobile: formData.mobile,
    description: formData.description
  };

  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (res.ok && data.success) {
      // ✅ SUCCESS TOAST replaces the loading/error toast using the same ID
      toast.success(data.message || "Message established!", { id: 'contact-form' });
      setFormData({ firstName: "", email: "", mobile: "", description: "" });
      setErrors({});
    } else {
      toast.error(data.message || "Failed to establish connection.", { id: 'contact-form' });
    }
  } catch (error) {
    console.error(error);
    toast.error("Server is currently unreachable.", { id: 'contact-form' });
  }
};

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 lg:px-10 bg-[#fbfaff] relative overflow-hidden antialiased">
      {/* ✅ Add Toaster component here */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="absolute inset-0 z-0 opacity-40" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(251, 250, 255, 1) 20%, rgba(251, 250, 255, 0) 60%), url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a855f7' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100% 100%, 40px 40px'
        }}
      />

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={itemVariants} className="mb-12">
          <span className="text-[10px] font-black tracking-[0.5em] text-purple-500 uppercase">System Hub</span>
          <h1 className="text-4xl md:text-6xl font-light text-slate-950 mt-4">Connect with <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">LinkBrain.</span></h1>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full grid lg:grid-cols-[1.4fr,1fr] rounded-[3.5rem] overflow-hidden bg-white/40 backdrop-blur-3xl border border-white/60 shadow-2xl">
          <div className="p-8 md:p-16 bg-white/70">
            <h2 className="text-2xl font-bold text-slate-900 mb-10 flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
              Initialize Project Brief
            </h2>

            <form onSubmit={handleSubmit} noValidate>
              <FloatingInput 
                id="name" 
                label="Full Name" 
                value={formData.firstName} 
                onChange={handleChange}
                focusedInput={focusedInput}
                setFocusedInput={setFocusedInput}
                itemVariants={itemVariants}
                error={errors.name}
              />
              
              <div className="grid md:grid-cols-2 gap-4">
                <FloatingInput 
                  id="email" 
                  label="Secure Email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  focusedInput={focusedInput}
                  setFocusedInput={setFocusedInput}
                  itemVariants={itemVariants}
                  error={errors.email}
                />
                <FloatingInput 
                  id="phone" 
                  label="Direct Line" 
                  type="tel" 
                  value={formData.mobile} 
                  onChange={handleChange}
                  focusedInput={focusedInput}
                  setFocusedInput={setFocusedInput}
                  itemVariants={itemVariants}
                  error={errors.phone}
                />
              </div>

              <FloatingInput 
                id="message" 
                label="Project Details" 
                type="textarea" 
                value={formData.description} 
                onChange={handleChange}
                focusedInput={focusedInput}
                setFocusedInput={setFocusedInput}
                itemVariants={itemVariants}
                error={errors.message}
              />

              <motion.button 
                type="submit" 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                className="w-full md:w-auto px-12 py-5 rounded-2xl bg-slate-950 text-white font-bold text-sm tracking-widest uppercase hover:bg-purple-700 transition-colors shadow-xl shadow-purple-200"
              >
                Establish Connection
              </motion.button>
            </form>
          </div>

          <div className="p-10 md:p-16 bg-gradient-to-br from-violet-600 to-indigo-700 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-32 -mt-32" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}