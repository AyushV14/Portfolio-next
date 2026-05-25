'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, User, Mail, MessageSquare, ArrowRightCircle } from 'lucide-react';

// Sign up free at https://web3forms.com/ and paste your access key here.
// Until then the form falls back to opening your mail client via mailto:.
const WEB3FORMS_ACCESS_KEY = '';
const FALLBACK_EMAIL = 'vikharankarayush14@gmail.com';

const Form = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(form.subject || 'Portfolio contact')}&body=${body}`;
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...form }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={onSubmit}>
      <div className="relative flex items-center">
        <Input type="text" name="name" id="name" placeholder="Full Name" value={form.name} onChange={onChange} required />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="email" name="email" id="email" placeholder="Email Address" value={form.email} onChange={onChange} required />
        <Mail className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="text" name="subject" id="subject" placeholder="Subject" value={form.subject} onChange={onChange} />
        <MessageSquare className="absolute right-6" size={20} />
      </div>
      <Textarea name="message" id="message" placeholder="Type your message here." value={form.message} onChange={onChange} required />
      <Button className="flex items-center gap-x-1 max-w-[166px]" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Lets Talk'}
        <ArrowRightCircle size={20} />
      </Button>
      {status === 'sent' && (
        <p className="text-sm text-primary">Thanks! Your message is on its way.</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-500">Something went wrong. Please email me directly at {FALLBACK_EMAIL}.</p>
      )}
    </form>
  );
};

export default Form;
