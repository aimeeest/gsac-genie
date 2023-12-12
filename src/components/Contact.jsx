import React from 'react';

const Contact = () => {
  const contactInfo = [
    { location: 'Main Branch', email: 'gubat@gsac.coop', phone: '+63(945) 657 6069' },
    { location: 'Sorsogon', email: 'sorsogon@gsac.coop', phone: '+63(929) 796 4764' },
    { location: 'Bulan', email: 'bulan@gsac.coop', phone: '+63(908) 320 7055' },
    { location: 'Irosin', email: 'irosin@gsac.coop', phone: '+63(912) 115 3037' },
    { location: 'Legazpi', email: 'legazpi@gsac.coop', phone: '+63(951) 952 6988' },
    { location: 'Tabaco', email: 'tabaco@gsac.coop', phone: '+63(948) 046 5600' },
    { location: 'Ligao', email: 'ligao@gsac.coop', phone: '+63(946) 755 6056' },
    { location: 'Naga', email: 'naga@gsac.coop', phone: '+63(948) 323 6726' },
    { location: 'Catarman', email: 'catarman@gsac.coop', phone: '+63(912) 037 4239' },
    { location: 'Iriga', email: 'iriga@gsac.coop', phone: '+63(917) 144 2515' },
    { location: 'Pilar', email: 'pilar@gsac.coop', phone: '+63(930) 594 1710' },
    { location: 'Magallanes', email: 'magallanes@gsac.coop', phone: '+63(915) 405 0072' },
    { location: 'Bulusan', email: 'bulusan@gsac.coop', phone: '+63(946) 706 7889' },
    { location: 'Donsol', email: 'donsol@gsac.coop', phone: '+63(907) 014 0843' },
    { location: 'Allen', email: 'allen@gsac.coop', phone: '09462910702' },
    { location: 'Castilla', email: 'castilla@gsac.coop', phone: '09560181521' }, 
  ];

  return (
    <div className="contact-container">
      <h2 className='contact-title'>Contact Us</h2>
      <div className="contact-grid">
        {contactInfo.map((contact, index) => (
          <div key={index} className="contact-item">
            <h3>{contact.location}</h3>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
