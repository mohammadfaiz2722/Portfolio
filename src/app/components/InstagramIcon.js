import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';

const InstagramIcon = () => {
  return (
    <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-gray-300 hover:text-gray-100" />
  );
};

export default InstagramIcon;
