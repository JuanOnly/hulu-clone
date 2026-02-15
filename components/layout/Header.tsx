import {
  CheckBadgeIcon,
  HomeIcon,
  InformationCircleIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import Image from "next/image";
import HeaderItem from "../ui/HeaderItem";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between
        items-center h-auto" role="banner">
      <nav className="flex flex-grow justify-evenly max-w-2xl" aria-label="Main navigation">
        <HeaderItem title='HOME' Icon={HomeIcon} href='/' />
        <HeaderItem title='TRENDING' Icon={BoltIcon} />
        <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon} />
        <HeaderItem title='SEARCH' Icon={MagnifyingGlassIcon} />
        <HeaderItem title='ABOUT' Icon={InformationCircleIcon} href='/about' />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </nav>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="Hulu Logo"
        priority
      />
    </header>
  )
}

export default Header
