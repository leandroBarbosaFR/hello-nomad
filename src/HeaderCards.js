import { WifiIcon, BuildingStorefrontIcon, HashtagIcon } from '@heroicons/react/24/outline'
import './headerCards.style.css';

const supportLinks = [
  {
    name: 'Slack Community',
    href: '#',
    description:
      'Join us on Slack to connect with other digital nomads, share resources, and collaborate with each other.',
    icon: HashtagIcon,
  },
  {
    name: 'Offices',
    href: '#',
    description:
      'Looking for a place to work? We have a list of coworking spaces and offices around the world.',
    icon: WifiIcon,
  },
  {
    name: 'Are you a host?',
    href: '#',
    description:
      'If you have a coworking space or office that you would like to list on our site, please contact us.',
    icon: BuildingStorefrontIcon,
  },
]

export default function HeaderCards() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Slack Community</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
          "Welcome to our Slack community for digital nomads! This is a place for nomads to connect,
           share resources, and collaborate with each other. Whether you're a seasoned pro or new to the nomad lifestyle,
           we invite you to join the conversation and contribute to our growing network of like-minded professionals."
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8" aria-labelledby="contact-heading">
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute square-cards top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 p-5 shadow-lg">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a href={link.href} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                  Go<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
