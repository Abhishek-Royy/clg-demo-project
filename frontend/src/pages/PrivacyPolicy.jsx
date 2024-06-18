import React from 'react'

function PrivacyPolicy() {
  return (
    <>
      <div className="pp-main w-full sm:pb-20 sm:pt-20 pb-[10%] pt-36 md:px-[20px] lg:px-[150px] sm:px-[150px] px-5 bg-gradient-to-t from-[#d5e8fe] to-[#7CADF0]">
        <div className="part-1 mb-16">
          <p className="font-semibold text-3xl mb-5">happyCoding Privacy Policy</p>
          <p>
            At happyCoding™, we are committed to protecting the privacy and
            security of our users. This Privacy Policy outlines how we collect,
            use, disclose, and safeguard the personal information you provide
            when using our mobile application, website, and services.
          </p>
        </div>

        <div className="part-2 mb-16">
          <p className="font-semibold text-xl mb-5">Information We Collect</p>
          <ul className="list-decimal">
            <li>
              <span className="font-semibold">Personal Information: </span>We
              may collect personal information such as your name, date of birth,
              contact details (email address, phone number), educational
              background, and academic records when you register for our
              services, participate in our programs, or provide it voluntarily.
            </li>
            <li>
              <span className="font-semibold">Assessment Data: </span>We may
              collect and process your responses, scores, and other data related
              to the assessments, exams, or evaluations you participate in
              through our platform.
            </li>
            <li>
              <span className="font-semibold">Usage Data: </span>We may collect
              information about how you use our application and services,
              including your interactions with various features, device
              information, and log data.
            </li>
            <li>
              <span className="font-semibold">
                Cookies and Tracking Technologies:{" "}
              </span>
              We may use cookies and similar tracking technologies to enhance
              your experience, analyze usage patterns, and gather analytics
              data.
            </li>
          </ul>
        </div>

        <div className="part-3 mb-16">
          <p className="font-semibold mb-5 text-xl">
            How We Use Your Information
          </p>
          <ul className="list-decimal">
            <li>
              <span className="font-semibold">Service Delivery: </span>We use
              your personal information to provide our educational programs,
              assessments, counseling sessions, mentorship services, and
              personalized recommendations.
            </li>
            <li>
              <span className="font-semibold">Communication: </span>We may use
              your contact information to send you important updates,
              notifications, and promotional materials related to our services.
            </li>
            <li>
              <span className="font-semibold">Analytics and Improvement: </span>
              We analyze usage data and assessment results to understand how our
              application and services are being used, identify trends, and
              improve our offerings.
            </li>
            <li>
              <span className="font-semibold">
                Compliance and Legal Purposes:{" "}
              </span>
              We may use and disclose your information as necessary to comply
              with applicable laws, regulations, legal processes, or enforceable
              governmental requests.
            </li>
          </ul>
        </div>

        <div className="part-4 mb-16">
          <p className="font-semibold text-xl mb-5">Sharing Your Information</p>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share your information with trusted
            partners and service providers who assist us in operating our
            application, conducting our business, or servicing you, as long as
            they agree to keep this information confidential and adhere to our
            privacy standards.
          </p>
        </div>

        <div className="part-5 mb-16">
          <p className="font-semibold text-xl mb-5">Data Security</p>
          <p>
            We implement reasonable physical, technical, and administrative
            safeguards to protect your personal information from unauthorized
            access, use, or disclosure. However, no method of transmission over
            the Internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </div>

        <div className="part-6 mb-16">
          <p className="font-semibold mb-5 text-xl">Children&#39;s Privacy</p>
          <p>
            Our services are not directed toward children under the age of 5. We
            do not knowingly collect personal information from children under 5.
            If we become aware that a child under 5 has provided us with
            personal information, we will take steps to delete such information
            from our servers.
          </p>
        </div>

        <div className="part-7 mb-16">
          <p className="font-semibold mb-5 text-xl">User Rights and Choices</p>
          <p>
            You have the right to access, correct, or delete your personal
            information collected by us. You may also opt-out of receiving
            promotional communications from us at any time. To exercise these
            rights or for any privacy-related inquiries, please contact us at
            [insert contact email or address].
          </p>
        </div>

        <div className="part-8">
          <p className="font-semibold mb-5 text-xl">
            Changes to This Privacy Policy
          </p>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on our website
            and application. By using our application, website, and services,
            you acknowledge that you have read and understood this Privacy
            Policy and agree to its terms and conditions.
          </p>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
