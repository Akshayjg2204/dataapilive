import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import FAQContactSection from "@/components/FAQContactSection";

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-[#0f0728] overflow-x-hidden">
            <Navbar />
            <div className="pt-24">
                <FAQSection />
                <FAQContactSection />
            </div>
            <Footer />
        </main>
    );
}
