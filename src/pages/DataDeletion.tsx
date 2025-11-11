import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const DataDeletion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Data Deletion Instructions</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Right to Data Deletion</h2>
            <p>
              At Dataflexus, we respect your privacy and your right to control your personal data. 
              You have the right to request deletion of your personal data that we have collected through our services, 
              including data from connected platforms such as TikTok, Facebook, Google, and other third-party integrations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">What Data Can Be Deleted</h2>
            <p>You can request deletion of:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Account Information:</strong> Your email, name, profile information, and account credentials</li>
              <li><strong>Analytics Data:</strong> Dashboard data, reports, and analytics associated with your account</li>
              <li><strong>Connected Platform Data:</strong> Data synced from TikTok, Facebook, Google Ads, and other integrated platforms</li>
              <li><strong>Usage Data:</strong> Logs, cookies, and tracking data related to your use of our services</li>
              <li><strong>Communication Data:</strong> Messages, support tickets, and correspondence with our team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">How to Request Data Deletion</h2>
            <p>You can request data deletion through any of the following methods:</p>
            
            <div className="bg-muted/50 p-6 rounded-lg mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Method 1: Email Request</h3>
                <p className="mb-3">
                  Send an email to our data protection team with the subject line "Data Deletion Request":
                </p>
                <Button asChild variant="outline" className="gap-2">
                  <a href="mailto:privacy@dataflexus.com?subject=Data%20Deletion%20Request">
                    <Mail className="h-4 w-4" />
                    privacy@dataflexus.com
                  </a>
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Method 2: Account Settings</h3>
                <p>
                  Log in to your Dataflexus account, navigate to Settings → Privacy → Delete My Data, 
                  and follow the prompts to submit your deletion request.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Method 3: Contact Form</h3>
                <p>
                  Use our contact form on the website, select "Data Deletion Request" as the subject, 
                  and provide your account details for verification.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Information Required for Verification</h2>
            <p>To process your data deletion request, please provide:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Full name associated with the account</li>
              <li>Email address used for registration</li>
              <li>Account ID or username (if applicable)</li>
              <li>Verification of identity (government-issued ID may be required for security)</li>
              <li>Specific data categories you wish to delete (or "all data" for complete deletion)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Deletion Timeline</h2>
            <p>Once we receive your verified request:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Acknowledgment:</strong> We will confirm receipt within 2 business days</li>
              <li><strong>Verification:</strong> Identity verification may take 3-5 business days</li>
              <li><strong>Processing:</strong> Data deletion will be completed within 30 days of verification</li>
              <li><strong>Confirmation:</strong> You will receive confirmation once deletion is complete</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Important Considerations</h2>
            <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-foreground">Please Note:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Data deletion is permanent and cannot be undone</li>
                <li>Some data may be retained for legal, regulatory, or security purposes as required by law</li>
                <li>Aggregated or anonymized data used for analytics may be retained</li>
                <li>Data shared with third-party platforms (TikTok, Facebook, etc.) must be deleted separately through those platforms</li>
                <li>Backup copies may persist for up to 90 days before being permanently deleted</li>
                <li>Deleting your data will close your account and terminate access to all services</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Platform Data</h2>
            <p>
              For data collected directly by third-party platforms (TikTok, Facebook, Google, etc.), you must 
              submit separate deletion requests through those platforms:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>TikTok:</strong> Settings → Privacy → Download your data / Delete account</li>
              <li><strong>Facebook:</strong> Settings → Your Facebook Information → Delete Your Information</li>
              <li><strong>Google:</strong> Account settings → Data & privacy → Delete your Google Account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Questions or Concerns</h2>
            <p>
              If you have questions about the data deletion process, need assistance, or want to check the 
              status of your request, please contact our privacy team:
            </p>
            <p className="mt-2">
              Email: privacy@dataflexus.com<br />
              Phone: +1 (555) 123-4567<br />
              Address: 123 Business Street, Suite 100, City, State 12345
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Compliance</h2>
            <p>
              Our data deletion process complies with:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>General Data Protection Regulation (GDPR)</li>
              <li>California Consumer Privacy Act (CCPA)</li>
              <li>TikTok Developer Terms and Data Deletion Requirements</li>
              <li>Facebook Platform Terms</li>
              <li>Other applicable data protection regulations</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataDeletion;
