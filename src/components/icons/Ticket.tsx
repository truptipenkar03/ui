import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTicket } from '@fortawesome/free-solid-svg-icons/faTicket';

import { IconProps } from './types';

const Ticket: React.FunctionComponent<IconProps> = props => {
  return <FontAwesomeIcon icon={faTicket} {...props} />;
};

export default Ticket;
