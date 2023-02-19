import Image from 'next/image';
import clsx from 'clsx';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

import styles from './HomepageHero.module.css';

import { PrimaryButton } from '@/shared/ui';

type THomepageHeroProps = {};

type TItem = {
  title: string;
  description: string;
  icon: {
    src: string;
    width: number;
    height: number;
  };
};
const items: TItem[] = [
  {
    title: 'Discover your obsessions',
    description:
      'What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics.',
    icon: {
      src: '/img/homepage/stats.svg',
      width: 80,
      height: 74,
    },
  },
  {
    title: 'Bring AniList anywhere',
    description:
      'Keep track of your progress on-the-go with one of many AniList apps across iOS, Android, macOS, and Windows.',
    icon: {
      width: 80,
      height: 96,
      src: '/img/homepage/apps.svg',
    },
  },
  {
    title: 'Join the conversation',
    description:
      'Share your thoughts with our thriving community, make friends, socialize, and receive recommendations.',
    icon: {
      width: 80,
      height: 85,
      src: '/img/homepage/social.svg',
    },
  },
  {
    title: 'Tweak it to your liking',
    description:
      'Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode.',
    icon: {
      width: 80,
      height: 81,
      src: '/img/homepage/custom.svg',
    },
  },
];

export const HomepageHero: React.FC<THomepageHeroProps> = () => {
  return (
    <main className="container rounded-2 py-6 px-8 bg-slate-900">
      <h1 className="text-white font-bold text-3.2 text-center mb-2">
        <span className="hidden">Anilist: </span>
        The next-generation anime platform
      </h1>
      <h2 className="text-center text-sky-300 text-2 w-full max-w-[370px] mx-auto">
        Track, share, and discover your favorite anime and manga with AniList.
      </h2>
      <div
        className={clsx(
          styles['items-container'],
          'grid justify-center mt-8 mb-5.6'
        )}
      >
        {items.map((item, index) => (
          <div key={`${index}-${item.title}`} className={clsx(styles.item)}>
            <div>
              <Image alt={item.title} {...item.icon} />
            </div>
            <div>
              <span className="text-1.8 text-white mb-0.8 block">
                {item.title}
              </span>
              <p className="text-1.4 text-sky-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-[-78px]">
        <PrimaryButton
          href="/signup/"
          className={clsx(
            styles.button,
            'w-20 transition-shadow duration-300 ease-linear'
          )}
          rounded
        >
          <span className="text-1.8 text-center">Join Now</span>
          <IoIosArrowDroprightCircle className="text-4" />
        </PrimaryButton>
      </div>
    </main>
  );
};

export default HomepageHero;
