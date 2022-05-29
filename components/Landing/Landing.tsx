/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          teal: colors.teal,
          cyan: colors.cyan,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


import Footer from './Footer'
import BlogSection from './BlogSection'
import CTASection from './CTASection'
import TestimonialSection from './TestimonialSection'
import FeatureSectionWithScreenshot from './FeatureSectionWithScreenshot'
import FeatureSectionWithGrid from './FeatureSectionWithGrid'
import NavBar from './NavBar'
import MainSection from './MainSection'


export default function Landing() {
    return (
        <div className="bg-white">
            <div className="relative overflow-hidden">
                <NavBar />
                <main>
                    <MainSection />
                    <FeatureSectionWithScreenshot />
                    <FeatureSectionWithGrid />
                    <TestimonialSection />
                    <BlogSection />
                    <CTASection />
                </main>
                <Footer />
            </div>
        </div>
    )
}