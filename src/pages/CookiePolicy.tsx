import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Cookie Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit our website. They help us provide 
              you with a better experience by remembering your preferences and understanding how you use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Cookies</h2>
            <p>Dataflexus uses cookies for several purposes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly, including authentication and security features</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously</li>
              <li><strong>Functionality Cookies:</strong> Remember your preferences and settings to enhance your experience</li>
              <li><strong>Marketing Cookies:</strong> Track your activity to deliver relevant advertisements and measure campaign effectiveness</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Types of Cookies We Use</h2>
            
            <div className="space-y-4 mt-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Session Cookies</h3>
                <p>Temporary cookies that expire when you close your browser. Used for authentication and navigation.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Persistent Cookies</h3>
                <p>Remain on your device for a set period or until you delete them. Used to remember your preferences and login status.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-foreground">First-Party Cookies</h3>
                <p>Set directly by Dataflexus to improve your experience on our website.</p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Third-Party Cookies</h3>
                <p>Set by external services we use, including analytics providers (Google Analytics), social media platforms (TikTok, Facebook), and advertising networks.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Cookies</h2>
            <p>We use services from third parties that may set their own cookies:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Google Analytics:</strong> Tracks website usage and performance</li>
              <li><strong>TikTok Pixel:</strong> Measures ad campaign effectiveness and user behavior</li>
              <li><strong>Facebook Pixel:</strong> Tracks conversions and optimizes ad delivery</li>
              <li><strong>Google Ads:</strong> Delivers targeted advertising</li>
            </ul>
            <p className="mt-2">
              These third parties have their own privacy policies governing their use of cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Managing Cookies</h2>
            <p>You have the right to decide whether to accept or reject cookies. You can:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings</li>
              <li><strong>Opt-Out Tools:</strong> Use industry opt-out tools like the Network Advertising Initiative opt-out page</li>
              <li><strong>Cookie Banner:</strong> Manage your preferences through our cookie consent banner when you first visit</li>
            </ul>
            <p className="mt-4">
              Please note that blocking certain cookies may impact your ability to use some features of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Cookie Lifespan</h2>
            <p>The duration cookies remain on your device varies:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Session cookies: Deleted when you close your browser</li>
              <li>Authentication cookies: Typically 30 days</li>
              <li>Preference cookies: Up to 1 year</li>
              <li>Analytics cookies: Up to 2 years</li>
              <li>Marketing cookies: Up to 2 years</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Do Not Track Signals</h2>
            <p>
              Some browsers include a "Do Not Track" (DNT) feature that signals websites you visit that you do not 
              want your online activity tracked. Currently, there is no industry standard for how to respond to DNT 
              signals, so we do not respond to them at this time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal 
              or regulatory reasons. We encourage you to review this page periodically for the latest information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us:
            </p>
            <p className="mt-2">
              Email: privacy@dataflexus.com<br />
              Address: 123 Business Street, Suite 100, City, State 12345
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
