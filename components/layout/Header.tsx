import {
  CheckBadgeIcon,
  HomeIcon,
  InformationCircleIcon,
  BoltIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import HeaderItem from "../ui/HeaderItem";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between
        items-center h-auto" role="banner">
      <nav className="flex flex-grow justify-evenly max-w-2xl" aria-label="Main navigation">
        <HeaderItem title='HOME' Icon={HomeIcon} href='/' />
        <HeaderItem title='TRENDING' Icon={BoltIcon} />
        <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon} />
        <HeaderItem title='ABOUT' Icon={InformationCircleIcon} href='/about' />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </nav>
    </header>
  )
}

export default Header
