// import { Inter } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] })

import { HomepageHero } from './components/Homepage';

export default function Home() {
  return (
    <div>
      <div className="mt-12">
        <HomepageHero />
      </div>
    </div>
  );
}
