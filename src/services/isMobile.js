import { mobileThreshold } from '../components/StyledComponents';

export default function isMobile() {
  return typeof window !== 'undefined' ? window.innerWidth < mobileThreshold : true;
}