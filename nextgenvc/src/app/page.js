"use client";
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Herotest from '@/components/Herotest'
import Services from '@/components/Services';
import Work from '@/components/Work';
import Plans from '@/components/Plans';
import TestimonialSlider from "@/components/TestimonialSlider"
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
    <Navbar />
    <Herotest />
    <Services />
    <Work />
    <Plans />
    <TestimonialSlider />
    <Footer />
    </>
  )
}
