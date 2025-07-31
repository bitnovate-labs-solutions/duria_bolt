import TeamCard from '@/components/cards/TeamCard';
import MediaCard from '@/components/cards/MediaCard';
import { Globe, Users, Award, Truck } from 'lucide-react';

const teamMembers = [
  {
    name: 'David Lim',
    position: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    bio: 'With over 20 years in the durian industry, David founded Duria with a vision to share premium durians globally. His expertise in cultivation and export has made the company a trusted name worldwide.'
  },
  {
    name: 'Sarah Chen',
    position: 'Head of Quality Assurance',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
    bio: 'Sarah ensures every durian meets our strict quality standards. Her background in food science and 15 years of experience guarantee the authenticity and safety of our products.'
  },
  {
    name: 'Michael Wong',
    position: 'International Sales Director',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
    bio: 'Michael leads our global expansion efforts, building relationships with distributors and retailers worldwide. His multilingual skills and cultural understanding drive our international success.'
  },
  {
    name: 'Lisa Tan',
    position: 'Operations Manager',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
    bio: 'Lisa oversees our supply chain and logistics operations, ensuring timely and safe delivery of our products. Her operational excellence keeps our global customers satisfied.'
  }
];

const mediaArticles = [
  {
    title: 'Duria Exports Premium Fruits to 15 Countries',
    image: 'https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg',
    excerpt: 'Local durian export company reaches new milestone in international expansion, bringing Southeast Asian delicacy to global markets.',
    source: 'Food & Beverage News',
    date: '2024-01-15',
    link: '#'
  },
  {
    title: 'The Rise of Premium Durian Exports',
    image: 'https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg',
    excerpt: 'Industry report highlights the growing demand for high-quality durians in international markets, featuring Duria as a leading exporter.',
    source: 'Asia Trade Magazine',
    date: '2023-12-08',
    link: '#'
  },
  {
    title: 'Sustainable Durian Farming Practices',
    image: 'https://images.pexels.com/photos/5737486/pexels-photo-5737486.jpeg',
    excerpt: 'Duria partners with local farmers to implement sustainable farming practices, ensuring quality while protecting the environment.',
    source: 'Green Agriculture Today',
    date: '2023-11-22',
    link: '#'
  }
];

const exportCountries = [
  { name: 'Singapore', flag: '🇸🇬' },
  { name: 'Malaysia', flag: '🇲🇾' },
  { name: 'China', flag: '🇨🇳' },
  { name: 'Hong Kong', flag: '🇭🇰' },
  { name: 'Japan', flag: '🇯🇵' },
  { name: 'South Korea', flag: '🇰🇷' },
  { name: 'Australia', flag: '🇦🇺' },
  { name: 'United States', flag: '🇺🇸' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'Netherlands', flag: '🇳🇱' },
  { name: 'UAE', flag: '🇦🇪' },
  { name: 'New Zealand', flag: '🇳🇿' }
];

const stats = [
  { icon: Globe, number: '15+', label: 'Export Countries' },
  { icon: Users, number: '500+', label: 'Partner Farmers' },
  { icon: Award, number: '25+', label: 'Quality Awards' },
  { icon: Truck, number: '10,000+', label: 'Shipments Delivered' }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
              <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Duria
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are passionate about bringing the world's finest durians from Southeast Asia to your table, 
              combining traditional expertise with modern export excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Founder's Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey began in 2005 when David Lim, a third-generation durian farmer, 
                recognized the untapped potential of sharing premium Southeast Asian durians with the world. 
                What started as a family orchard in Malaysia has grown into an international export business 
                spanning 15 countries.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                David's vision was simple yet ambitious: to preserve the authentic taste and quality of 
                traditional durians while making them accessible to durian enthusiasts globally. 
                This commitment to authenticity and quality remains at the heart of everything we do.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, Duria partners with over 500 experienced farmers across Southeast Asia, 
                ensuring a sustainable supply chain that benefits both our customers and the local communities 
                that have perfected durian cultivation for generations.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4253313/pexels-photo-4253313.jpeg"
                alt="David Lim in durian orchard"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Senior Management */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who drive our mission to deliver 
              the world's finest durians to your doorstep.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Export Countries */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Global Reach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We proudly export our premium durians to customers across the globe, 
              bringing the authentic taste of Southeast Asia to these countries.
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6">
            {exportCountries.map((country) => (
              <div key={country.name} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-2">{country.flag}</div>
                <div className="text-sm font-medium text-gray-900">{country.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Press */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Media & Press
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what the industry is saying about Duria and our commitment 
              to quality and innovation in durian exports.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaArticles.map((article, index) => (
              <MediaCard key={index} {...article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}