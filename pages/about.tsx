import Head from 'next/head';
import Header from '../components/layout/Header';
import {
  CodeBracketIcon,
  CubeIcon,
  CircleStackIcon,
  GlobeAltIcon,
  BoltIcon,
  ServerStackIcon,
} from '@heroicons/react/24/outline';

const technologies = [
  { name: 'Next.js', icon: GlobeAltIcon, description: 'React framework for production' },
  { name: 'React', icon: CodeBracketIcon, description: 'UI component library' },
  { name: 'Tailwind CSS', icon: BoltIcon, description: 'Utility-first CSS framework' },
  { name: 'TMDB API', icon: CircleStackIcon, description: 'Movie & TV database' },
  { name: 'Server-Side Rendering', icon: ServerStackIcon, description: 'Dynamic data fetching' },
  { name: 'Next.js Image', icon: CubeIcon, description: 'Image optimization' },
];

const socialLinks = [
  {
    name: 'Portfolio',
    url: 'https://portfolio-one-nu-94.vercel.app',
    icon: '🌐',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Juandg16',
    icon: '🐙',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/juan-gabriel-garcia-sanchez',
    icon: '💼',
  },
];

export default function About() {
  return (
    <div className="bg-[#06202A] min-h-screen text-white">
      <Head>
        <title>About - Hulu 2.0 Clone</title>
        <meta name="description" content="A streaming platform interface showcasing modern web development skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Hulu 2.0 Clone - By Juan Gabriel Garcia Sanchez" />
        <meta property="og:description" content="A streaming platform interface built to showcase modern React development skills" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-emerald-400">
            Hulu 2.0 Clone
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A streaming platform interface built to demonstrate modern web development skills
            and creativity in building responsive, data-driven applications.
          </p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-8 mb-12 border border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-emerald-400 flex items-center justify-center gap-3">
            <CodeBracketIcon className="h-8 w-8" />
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <tech.icon className="h-10 w-10 text-emerald-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-white">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-8 mb-12 border border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-emerald-400 text-center">
            Skills Demonstrated
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'React Component Architecture',
              'Server-Side Rendering (SSR)',
              'Responsive Design',
              'API Integration',
              'Image Optimization',
              'State Management',
              'Tailwind CSS Styling',
              'Dark Mode UI Design',
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center space-x-3 p-3 bg-emerald-900/20 rounded-lg border border-emerald-800/50"
              >
                <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-gray-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl p-8 border border-emerald-700/50">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Created By
          </h2>
          <div className="text-center">
            <div className="inline-block p-6 bg-gray-800/80 rounded-full mb-6">
              <span className="text-5xl">👨‍💻</span>
            </div>
            <h3 className="text-2xl font-semibold text-emerald-400 mb-2">
              Juan Gabriel Garcia Sanchez
            </h3>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Full-stack web developer passionate about building beautiful,
              functional web applications. This project is part of my personal
              portfolio to showcase my skills in modern web development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 
                                           rounded-full font-semibold transition-all duration-300 hover:scale-105 
                                           hover:shadow-lg hover:shadow-emerald-500/30"
                >
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 
                               rounded-full font-semibold transition-all duration-300 hover:scale-105 
                               border border-gray-600 hover:border-emerald-400"
          >
            <span>←</span>
            <span>Back to Movies</span>
          </a>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Hulu 2.0 Clone. Built for portfolio demonstration.</p>
      </footer>
    </div>
  );
}
