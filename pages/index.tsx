import Background from '@/components/Background';
import Footer from '@/components/home-ui/Footer';
import Hero from '@/components/home-ui/Hero';
import Meta from '@/components/Meta';
import { useUser } from '@/utils/useUser';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function PricingPage() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    }
  }, [user]);

  return (
    <Background>
      <Meta />
      <Hero />
      <Footer />
    </Background>
  );
}
