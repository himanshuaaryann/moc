import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import VisitFarm from "../components/VisitFarm";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  return (
    <Layout>
      <PageHero
        image="https://images.pexels.com/photos/20527467/pexels-photo-20527467.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000"
        label="Contact"
        heading="Come Grow With Us"
        subtitle="Reach out for vegetables, fruits, pulses, farm plots or any general enquiry."
      />
      <VisitFarm />
      <ContactSection />
    </Layout>
  );
}
