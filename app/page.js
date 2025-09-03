```javascript
import Link from 'next/link';
import Image from 'next/image';

const SkillIcon = () => (
  <svg className="w-6 h-6 mr-3 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary text-center py-20 md:py-32">
        <div className="container mx-auto px-6">
          <Image 
            src="https://placehold.co/150x150/4299e1/FFFFFF/png?text=Pip" 
            alt="Pip Pipson, a distinguished bird"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-6 border-4 border-accent shadow-lg"
            priority
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Pip Pipson</h1>
          <p className="text-xl md:text-2xl text-light-gray">Avian Architect & Sonic Innovator</p>
          <p className="mt-4 max-w-2xl mx-auto text-light-gray">
            Crafting exceptional nests and melodies since last spring. I specialize in sustainable, predator-resistant architecture and award-winning dawn choruses.
          </p>
          <Link href="/projects" className="mt-8 inline