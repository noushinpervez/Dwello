import Accordion from '@/components/Home/Accordion/Accordion';
import Blog from '@/components/Home/Blog/Blog';
import FeaturedProperties from '@/components/Home/FeaturedProperties/FeaturedProperties';
import Hero from '@/components/Home/Hero/Hero';
import HomeProperties from '@/components/Home/HomeProperties/HomeProperties';
import PropertyCategory from '@/components/Home/PropertyCategory/PropertyCategory';
import PropertyInfoBoxes from '@/components/Home/PropertyInfo/PropertyInfoBoxes';
import SignInCard from '@/components/Home/SignInCard/SignInCard';

const HomePage = async () => {
  return (
    <>
      <Hero />
      <div className='px-4 max-w-7xl mx-auto mb-24'>
        <SignInCard />
        <PropertyInfoBoxes />
        <PropertyCategory />
        <FeaturedProperties />
        <HomeProperties />
        <Blog />
        <Accordion />
      </div>
    </>
  );
};

export default HomePage;