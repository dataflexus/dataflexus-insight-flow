import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Dataflexus ("Service"), you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to these Terms of Service, please do not use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Description of Service</h2>
            <p>
              Dataflexus provides data analytics, business intelligence solutions, and digital marketing services. 
              We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate, complete, and current information. 
              Failure to do so constitutes a breach of the Terms, which may result in immediate termination of 
              your account.
            </p>
            <p className="mt-2">
              You are responsible for safeguarding the password and for all activities that occur under your account. 
              You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are owned by Dataflexus and are 
              protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Third-Party Services</h2>
            <p>
              Our Service may contain links to third-party websites or services, including but not limited to 
              TikTok, Facebook, Google, and other social media platforms. We are not responsible for the content, 
              privacy policies, or practices of any third-party websites or services.
            </p>
            <p className="mt-2">
              When using our Service in connection with TikTok or other third-party platforms, you agree to comply 
              with their respective terms of service and policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Data Usage and Analytics</h2>
            <p>
              You grant us permission to access and use data from connected platforms (including TikTok) for 
              analytics and reporting purposes as described in our Privacy Policy. We will handle all data in 
              accordance with applicable laws and platform policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Prohibited Uses</h2>
            <p>You agree not to use the Service:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>In any way that violates any applicable law or regulation</li>
              <li>To transmit any malicious code, viruses, or harmful data</li>
              <li>To attempt to gain unauthorized access to our systems or networks</li>
              <li>To violate the terms of service of any connected third-party platform</li>
              <li>To engage in any automated data collection without explicit permission</li>
              <li>To impersonate or misrepresent your affiliation with any person or entity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Payment and Billing</h2>
            <p>
              Certain aspects of the Service may be provided for a fee. You agree to pay all fees associated with 
              your use of paid features. All fees are non-refundable unless otherwise stated. We reserve the right 
              to change our pricing at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without prior notice 
              or liability, for any reason, including breach of these Terms. Upon termination, your right to use 
              the Service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Limitation of Liability</h2>
            <p>
              In no event shall Dataflexus, its directors, employees, partners, agents, suppliers, or affiliates be 
              liable for any indirect, incidental, special, consequential, or punitive damages, including loss of 
              profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Disclaimer</h2>
            <p>
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" 
              basis without warranties of any kind, either express or implied.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in 
              which Dataflexus operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any 
              material changes by posting the new Terms on this page and updating the "Last updated" date. 
              Your continued use of the Service after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">14. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-2">
              Email: info@dataflexus.com<br />
              Address: 123 Business Street, Suite 100, City, State 12345
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
