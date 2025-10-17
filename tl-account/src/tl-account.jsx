import React, { useState, useEffect } from 'react';

export default function TAccountMicrosite() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    businessType: '',
    serviceInterest: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown Timer - Set to 10 days from now
  useEffect(() => {
    const now = new Date();
    const targetDate = new Date(now.getTime() + (10 * 24 * 60 * 60 * 1000));
    targetDate.setHours(23, 59, 59, 999);
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Thank You Page
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            ขอบคุณที่ส่งข้อมูล
          </h1>
          
          <p className="text-lg text-blue-800 mb-8">
            ทีมงาน TL Account จะติดต่อกลับเร็ว ๆ นี้
          </p>
          
          <a
            href="https://line.me/ti/p/ezYv4INWNp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors w-full sm:w-auto"
          >
            แอดไลน์เพื่อติดตามสิทธิ์ทันที
          </a>
      
          <div className="mt-6">
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-blue-900 underline hover:text-orange-500 transition-colors text-base"
              >
                กลับสู่หน้าหลัก
              </button>
            </div>
        </div>
      </div>
    );
  }

  // Main Landing Page
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          {/* Brand Name */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-blue-900">
              สำนักงานบัญชี ทีแอล แอคเคานท์
            </h1>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-3"></div>
          </div>

          {/* Headline */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              <span className="text-orange-500">ฟรีค่าทำบัญชีเดือนแรก</span> สำหรับธุรกิจ SME ทั่วไทย
            </h2>
          </div>

          {/* Countdown Timer */}
          <div className="bg-orange-500 rounded-lg p-6 mb-6">
            <p className="text-white text-center text-lg font-medium mb-4">
              โปรโมชั่นหมดเขต 30 พฤศจิกายน 2567
            </p>
            <p className="text-white text-center text-base mb-3">
              เหลือเวลา
            </p>
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-900">
                  {timeLeft.days}
                </div>
                <div className="text-xs sm:text-sm text-blue-800 mt-1">วัน</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-900">
                  {timeLeft.hours}
                </div>
                <div className="text-xs sm:text-sm text-blue-800 mt-1">ชั่วโมง</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-900">
                  {timeLeft.minutes}
                </div>
                <div className="text-xs sm:text-sm text-blue-800 mt-1">นาที</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-900">
                  {timeLeft.seconds}
                </div>
                <div className="text-xs sm:text-sm text-blue-800 mt-1">วินาที</div>
              </div>
            </div>
            <p className="text-white text-center text-5xl sm:text-7xl font-black mt-6">
              จำกัด 50 สิทธิ์แรก
            </p>
          </div>

          {/* CTA Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border-2 border-orange-500">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              ข้อมูลให้เราติดต่อกลับ
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-blue-900 font-medium mb-2">
                  ชื่อ
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-blue-900"
                  placeholder="กรอกชื่อ"
                  required
                />
              </div>

              <div>
                <label className="block text-blue-900 font-medium mb-2">
                  เบอร์ติดต่อกลับ
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-blue-900"
                  placeholder="0xx-xxx-xxxx"
                  required
                />
              </div>

              <div>
                <label className="block text-blue-900 font-medium mb-3">
                  ประเภทธุรกิจ
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="serviceInterest"
                      value="audit"
                      checked={formData.serviceInterest === 'audit'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-orange-500 focus:ring-orange-500 border-gray-300"
                      required
                    />
                    <span className="ml-2 text-blue-900 text-base">ร้านค้า</span>
                  </label>
                  
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="serviceInterest"
                      value="accounting"
                      checked={formData.serviceInterest === 'accounting'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-orange-500 focus:ring-orange-500 border-gray-300"
                    />
                    <span className="ml-2 text-blue-900 text-base">อาหารและเครื่องดื่ม</span>
                  </label>
                  
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="serviceInterest"
                      value="tax"
                      checked={formData.serviceInterest === 'tax'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-orange-500 focus:ring-orange-500 border-gray-300"
                    />
                    <span className="ml-2 text-blue-900 text-base">ความงามและสุขภาพ</span>
                  </label>
                  
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="serviceInterest"
                      value="all"
                      checked={formData.serviceInterest === 'all'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-orange-500 focus:ring-orange-500 border-gray-300"
                    />
                    <span className="ml-2 text-blue-900 text-base">ท่องเที่ยวและที่พัก</span>
                  </label>

                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="serviceInterest"
                      value="all"
                      checked={formData.serviceInterest === 'all'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-orange-500 focus:ring-orange-500 border-gray-300"
                    />
                    <span className="ml-2 text-blue-900 text-base">บริการทั่วไป</span>
                  </label>

                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="serviceInterest"
                      value="all"
                      checked={formData.serviceInterest === 'all'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-orange-500 focus:ring-orange-500 border-gray-300"
                    />
                    <span className="ml-2 text-blue-900 text-base">ก่อสร้างและซ่อมบำรุง</span>
                  </label>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors mt-6"
              >
                ส่งข้อมูลเพื่อรับสิทธิ์ฟรี
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose T Account */}
      <div className="bg-blue-900 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            ทำไมต้องเลือก TL Account
          </h3>
          
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-sm sm:text-lg font-bold text-blue-900 mb-1 sm:mb-2">
                ผู้เชี่ยวชาญ
              </h4>
              <p className="text-xs sm:text-base text-blue-800">
                ด้านบัญชีและภาษีสำหรับ SME
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-sm sm:text-lg font-bold text-blue-900 mb-1 sm:mb-2">
                รวดเร็ว ตรงเวลา
              </h4>
              <p className="text-xs sm:text-base text-blue-800">
                พร้อมให้คำปรึกษาออนไลน์
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-sm sm:text-lg font-bold text-blue-900 mb-1 sm:mb-2">
                ปลอดภัย เชื่อถือได้
              </h4>
              <p className="text-xs sm:text-base text-blue-800">
                บริการทั่วไทย
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Offer Details */}
      <div className="bg-orange-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-8">
            รายละเอียดโปรโมชั่น
          </h3>
          
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-orange-500">
            <div className="space-y-4 text-blue-900">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg">
                  <span className="font-bold">ฟรี</span> ตรวจสุขภาพบัญชี + เดือนแรกฟรี
                </p>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg">
                  จำกัด <span className="font-bold text-orange-500">50 สิทธิ์แรก</span>
                </p>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg">
                  สำหรับ <span className="font-bold">SME ไทย</span> ที่สนใจตรวจงบปีเก่า
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-900 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white text-sm">
            © 2025 TL Account. บริการด้านบัญชีและภาษีครบวงจร
          </p>
        </div>
      </div>
    </div>
  );
}