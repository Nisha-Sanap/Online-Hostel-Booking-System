import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Terms of Service</h1>
      
      <div className="card">
        <div className="card-body">
          <h4 className="mb-3">1. Acceptance of Terms</h4>
          <p>
            By accessing and using HostelBook, you accept and agree to be bound 
            by the terms and provision of this agreement.
          </p>
          
          <h4 className="mb-3 mt-4">2. User Responsibilities</h4>
          <p>
            You are responsible for maintaining the confidentiality of your account 
            and password and for restricting access to your computer. You agree to 
            accept responsibility for all activities that occur under your account 
            or password.
          </p>
          
          <h4 className="mb-3 mt-4">3. Booking and Cancellation</h4>
          <p>
            All bookings are subject to availability. Cancellation policies vary 
            by hostel and are displayed during the booking process. Please review 
            them carefully before confirming your booking.
          </p>
          
          <h4 className="mb-3 mt-4">4. Payment Terms</h4>
          <p>
            Prices are shown per bed per night. Additional charges such as taxes 
            and service fees will be displayed before booking confirmation. We 
            accept various payment methods as indicated on our payment page.
          </p>
          
          <h4 className="mb-3 mt-4">5. Limitation of Liability</h4>
          <p>
            HostelBook shall not be liable for any direct, indirect, incidental, 
            special, or consequential damages resulting from the use or inability 
            to use our services.
          </p>
          
          <h4 className="mb-3 mt-4">6. Modifications to Service</h4>
          <p>
            We reserve the right to modify or discontinue, temporarily or 
            permanently, the service (or any part thereof) with or without notice.
          </p>
          
          <h4 className="mb-3 mt-4">7. Governing Law</h4>
          <p>
            These terms shall be governed by and construed in accordance with the 
            laws of the jurisdiction in which our company is registered.
          </p>
          
          <div className="mt-4">
            <h5>Contact Information</h5>
            <p>
              For any questions regarding these Terms of Service, please contact:
              <br />
              Email: legal@hostelbook.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;