import React from "react";
import {
  rightsData,
  infoData,
  infoUse,
  paymentData,
  securityData,
} from "../../Context/privacyData";
import { FaShieldAlt, FaInfoCircle, FaLock, FaMoneyBill, FaRegClipboard, FaRegEdit } from "react-icons/fa";
import { MdContacts, MdEmergency } from "react-icons/md";

const Privacy = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 mt-20">
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-gray-700">Privacy and Policy</h1>
        <p className="text-gray-600 mt-2">
          Learn about how we handle your data, security, and your rights.
        </p>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
        <Section title="Information We Collect" data={infoData} icon={<FaInfoCircle />} />
        
        <Section title="How We Use Information" data={infoUse} icon={<FaRegClipboard />} />
  
        <Section title="Data Security" data={securityData} icon={<FaShieldAlt />} />

        <Section title="Payments" data={paymentData} icon={<FaMoneyBill />} />
    
        <Section title="Your Rights" data={rightsData} icon={<FaLock />} />
        <Section title=" Emergency" data={[
            {title : 'Emergency Services Disclaimer', description : 'TALKMATEZ is not an emergency service provider and does not connect to emergency services (police, medical, etc.). Users are responsible for ensuring access to local emergency services independently.'}
        ]} icon={<MdEmergency />} />
        <Section title="Legal and Compliance" data={[
            {title : 'Legal and Compliance', description : 'All disputes are governed by Indian law under the jurisdiction of New Delhi courts. Arbitration may be pursued as per the Arbitration and Conciliation Act, 1996.'},
        ]} icon={<FaLock />} />
        <Section title=" Changes to This Policy" data={[
            {title : 'Changes to this Policy', description : 'We may periodically update this Privacy Policy. Any changes will be communicated via the app or email and will take effect from the indicated revision date.'},
        ]} icon={< FaRegEdit/>} />
        <Section title="Contact us" data={[
            {title : 'For any query ', description : `For questions or concerns about this Privacy Policy, please contact us at: TalkMatez Private Limited
4/381 Ground Floor, Muppatta Kunnummal Ekarool,
Unnikulam, Calicut 673574, India`},
        ]} icon={<MdContacts />} />

      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, data, icon }) => {
  return (
    <div className="bg-gray-100 shadow-sm rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="text-2xl text-[#15892e] mr-3">{icon}</div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index}>
            <h3 className="text-lg font-bold text-gray-700">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Privacy;
