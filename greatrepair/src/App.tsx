import userEvent from '@testing-library/user-event';
import React, { ProviderProps } from 'react';

export const Home: React.FC = () => {
  return <div><div>Hello world</div>
  <Profile name={'Arjen'} icon={''}/>
  </div>
}

type Props = {
  name: string;
  icon: string;
}

export const Profile: React.FC<Props> = (props) => {

  return <>{props.name} </>
}