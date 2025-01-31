import { BodyText, Button } from '@/components/common';
import { registrationLink } from '@/constants';
import { currentYear, isRegistrationsOpen } from '@/constants/status';
import { Bashaway } from '@/icons';
import { CountDown } from '.';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-5 lg:gap-y-4 2xl:gap-y-8 min-h-[calc(100lvh-160px)] lg:min-h-[calc(100lvh-70px)]">
      <Bashaway className="w-[280px] sm:w-[400px] h-[40px] sm:h-[68px] lg:h-[60px] 2xl:h-[70px]" />
      <BodyText className="lg:text-center max-w-5xl px-8">
        A unique competition that keeps the coders around the island on their toes. Welcome to Bashaway {currentYear},
        the third edition of the first-ever scripting and automation competition in Sri Lanka!
      </BodyText>
      <CountDown />
      <Button
        to={`${registrationLink}`}
        target="_blank"
        className="mt-1 sm:text-[22px] px-6 py-2 rounded-full tracking-[0.44px] z-30"
        disabled={!isRegistrationsOpen}>
        {isRegistrationsOpen ? 'Register Now' : 'Registration Closed'}
      </Button>
    </div>
  );
};

export default Hero;
