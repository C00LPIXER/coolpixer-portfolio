'use client';

import { useState, useEffect } from 'react';
import { Flex, Button, Input, Textarea } from '@/once-ui/components';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode, SiTryhackme } from 'react-icons/si';
import { AnimatedTooltip } from '@/components/AnimatedTooltip';
import { IconType } from 'react-icons';
import emailjs from '@emailjs/browser';

interface SocialLink {
  icon: IconType;
  url: string;
  label: string;
  platform: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: FaGithub,
    url: 'https://github.com/C00lPIXER',
    label: 'GitHub',
    platform: 'github'
  },
  {
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/amalkrishanp/',
    label: 'LinkedIn',
    platform: 'linkedin'
  },
  {
    icon: FaYoutube,
    url: 'https://www.youtube.com/@living_aquatic_',
    label: 'YouTube',
    platform: 'youtube'
  },
  {
    icon: FaInstagram,
    url: 'https://www.instagram.com/kr_i_s_h__/',
    label: 'Instagram',
    platform: 'instagram'
  },
  {
    icon: SiLeetcode,
    url: 'https://leetcode.com/u/kr_i_s_h__/',
    label: 'LeetCode',
    platform: 'leetcode'
  },
  {
    icon: SiTryhackme,
    url: 'https://tryhackme.com/r/p/coolpixer',
    label: 'TryHackMe',
    platform: 'tryhackme'
  },
  {
    icon: FaWhatsapp,
    url: 'https://wa.me/9778574627',
    label: 'WhatsApp',
    platform: 'whatsapp'
  }
];

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [iconSize, setIconSize] = useState(20);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setIconSize(mobile ? 16 : 20);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    const nameRegex = /^[A-Za-z\s]{2,50}$/;
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = 'Name must be 2-50 characters long and contain only letters and spaces';
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      isValid = false;
    } else if (formData.message.trim().length > 500) {
      newErrors.message = 'Message must not exceed 500 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_dauv8km', 
        'template_njd38rr', 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'AMAL KRISHNA',
        },
        'Q5O1_C7sezEoO1L4d'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Flex 
      direction={isMobile ? 'column' : 'row'} 
      gap="48" 
      style={{ 
        width: '100%',
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: isMobile ? '20px' : '40px',
        minHeight: isMobile ? 'auto' : '80vh',
        alignItems: 'stretch',
        justifyContent: 'center'
      }}
    >
      {/* Left Side - Social Links */}
      <Flex 
        direction="column" 
        gap="24" 
        style={{ 
          flex: '1',
          width: '100%',
          maxWidth: isMobile ? '100%' : '400px',
          alignSelf: isMobile ? 'center' : 'flex-start'
        }}
      >
        <Flex direction="column" gap="16" alignItems={isMobile ? 'center' : 'flex-start'}>
          <h2 className="text-2xl font-bold">Connect With Me</h2>
          <p className={`text-gray-400 ${isMobile ? 'text-center' : ''}`}>Let's connect and discuss opportunities!</p>
        </Flex>

        {/* Social Links */}
        <Flex 
          direction="column" 
          gap="16" 
          style={{ 
            width: '100%',
            padding: isMobile ? '20px' : '24px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            height: 'fit-content'
          }}
        >
          <h3 className={`text-xl font-semibold ${isMobile ? 'text-center' : ''}`}>Social Media</h3>
          <Flex 
            wrap 
            gap={isMobile ? '12' : '16'} 
            justifyContent={isMobile ? 'center' : 'flex-start'}
            style={{
              margin: '0 auto',
              width: '100%'
            }}
          >
            {socialLinks.map((link, index) => (
              <AnimatedTooltip key={index} text={link.label} platform={link.platform}>
                <Button
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: isMobile ? '6px' : '8px',
                    height: isMobile ? '36px' : '44px',
                    width: isMobile ? '36px' : '44px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.2s ease, background-color 0.2s ease'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    if (!isMobile) {
                      const target = e.currentTarget;
                      target.style.transform = 'translateY(-2px)';
                      target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                    }
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    if (!isMobile) {
                      const target = e.currentTarget;
                      target.style.transform = 'translateY(0)';
                      target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }
                  }}
                >
                  <link.icon size={isMobile ? 18 : 24} style={{ verticalAlign: 'middle' }} />
                </Button>
              </AnimatedTooltip>
            ))}
          </Flex>
        </Flex>
      </Flex>

      {/* Right Side - Contact Form */}
      <Flex 
        direction="column" 
        gap="24" 
        style={{ 
          flex: '1',
          width: '100%',
          maxWidth: isMobile ? '100%' : '500px',
          padding: isMobile ? '24px' : '32px',
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
          height: 'fit-content',
          alignSelf: isMobile ? 'center' : 'flex-start'
        }}
      >
        <h2 className={`text-2xl font-bold ${isMobile ? 'text-center' : ''}`}>
          {isMobile ? 'Send a Message' : 'Send Me a Message'}
        </h2>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Flex direction="column" gap="16">
            <Flex direction="column" gap="8">
              <Input
                id="name"
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.02)',
                  width: '100%'
                }}
              />
              <Input
                id="email"
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.02)',
                  width: '100%'
                }}
              />
              <Textarea
                id="message"
                name="message"
                label="Message"
                value={formData.message}
                onChange={handleInputChange}
                error={errors.message}
                lines={isMobile ? 4 : 6}
                resize="vertical"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.02)',
                  width: '100%'
                }}
              />
            </Flex>
            <Button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: isSubmitting ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)',
                color: '#fff',
                borderRadius: '8px',
                transition: 'background-color 0.2s ease'
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
            {submitStatus === 'success' && (
              <div style={{ color: '#4CAF50', textAlign: 'center', marginTop: '8px' }}>
                Message sent successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div style={{ color: '#f44336', textAlign: 'center', marginTop: '8px' }}>
                Failed to send message. Please try again.
              </div>
            )}
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
}
