import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Privacy Policy</h1>
      
      <div className="card">
        <div className="card-body">
          <h4 className="mb-3">1. Information We Collect</h4>
          <p>
            We collect information you provide directly to us when you register 
            for an account, make a booking, or contact our customer support.
          </p>
          
          <h4 className="mb-3 mt-4">2. How We Use Your Information</h4>
          <p>
            We use the information we collect to provide, maintain, and improve 
            our services, process your transactions, and communicate with you.
          </p>
          
          <h4 className="mb-3 mt-4">3. Information Sharing</h4>
          <p>
            We do not sell, trade, or rent your personal identification information 
            to others. We may share generic aggregated demographic information not 
            linked to any personal identification information regarding visitors 
            and users with our business partners and advertisers.
          </p>
          
          <h4 className="mb-3 mt-4">4. Data Security</h4>
          <p>
            We implement appropriate data collection, storage, and processing 
            practices and security measures to protect against unauthorized access, 
            alteration, disclosure, or destruction of your personal information.
          </p>
          
          <h4 className="mb-3 mt-4">5. Cookies</h4>
          <p>
            Our website may use "cookies" to enhance user experience. You may 
            choose to set your web browser to refuse cookies, or to alert you when 
            cookies are being sent.
          </p>
          
          <h4 className="mb-3 mt-4">6. Changes to This Privacy Policy</h4>
          <p>
            HostelBook has the discretion to update this privacy policy at any time. 
            We encourage users to frequently check this page for any changes to stay 
            informed about how we are helping to protect the personal information 
            we collect.
          </p>
          
          <div className="mt-4">
            <h5>Contact Us</h5>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@hostelbook.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;