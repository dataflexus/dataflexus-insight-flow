import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6 prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Welcome to Dataflexus ("we," "our," or "us"). We are committed to protecting your personal 
                information and your right to privacy. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you use our services, including our website 
                and any related applications (collectively, the "Services").
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6 prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3 text-foreground">2.1 Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                <li>Register for an account</li>
                <li>Use our Services</li>
                <li>Contact us for support</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                This information may include: name, email address, company name, job title, 
                and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">2.2 Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-4">
                When you access our Services, we automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                <li>Log data (IP address, browser type, operating system)</li>
                <li>Device information</li>
                <li>Usage data (pages viewed, time spent, links clicked)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">2.3 Data from Third-Party Platforms</h3>
              <p className="text-muted-foreground mb-4">
                If you connect your account with third-party platforms (such as Meta Ads, Google Ads, 
                TikTok Ads, or analytics platforms), we may collect data from those platforms in accordance 
                with their terms and your authorization. This may include advertising data, analytics data, 
                and other metrics necessary to provide our Services.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6 prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process your requests and transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and promotional offers</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations</li>
                <li>Provide customer support</li>
                <li>Generate aggregated, anonymized data for analytics</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6 prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. How We Share Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                <li><strong>Service Providers:</strong> We may share your information with third-party 
                vendors who perform services on our behalf</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition 
                of all or a portion of our business</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, 
                privacy, safety, or property</li>
                <li><strong>With Your Consent:</strong> When you have given us explicit permission to share 
                your information</li>
                <li><strong>Third-Party Platforms:</strong> When you authorize connections to platforms like 
                Meta, Google, or TikTok, we share necessary data to provide the Services</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information to third parties.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6 prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to collect and track information about your 
                use of our Services. Cookies are small data files stored on your device. You can instruct 
                your browser to refuse all cookies or to indicate when a cookie is being sent. However, if 
                you do not accept cookies, you may not be able to use some portions of our Services.
              </p>
              <p className="text-muted-foreground mb-4">
                We use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the operation of our Services</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Services</li>
                <li><strong>Functional Cookies:</strong> Enable personalized features and remember your preferences</li>
                <li><strong>Marketing Cookies:</strong> Track your activity to deliver relevant advertisements</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6 prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined 
                in this Privacy Policy, unless a longer retention period is required or permitted by law. When 
                we no longer need your information, we will securely delete or anonymize it.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6 prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the internet or electronic storage is 100% secure, 
                and we cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6 prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Your Rights and Choices</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-Out:</strong> Opt-out of marketing communications</li>
                <li><strong>Restriction:</strong> Request restriction of processing of your data</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent where we rely on consent to process your data</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6 prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Third-Party Services and Links</h2>
              <p className="text-muted-foreground mb-4">
                Our Services may contain links to third-party websites and services, including Meta Ads, 
                Google Ads, TikTok Ads, and other advertising and analytics platforms. We are not responsible 
                for the privacy practices of these third parties. We encourage you to read their privacy 
                policies before providing any personal information.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6 prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Children's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Our Services are not intended for children under the age of 13 (or 16 in some jurisdictions). 
                We do not knowingly collect personal information from children. If we learn that we have 
                collected personal information from a child without parental consent, we will delete that 
                information as quickly as possible. If you believe we have collected information from a child, 
                please contact us immediately.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6 prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">11. International Data Transfers</h2>
              <p className="text-muted-foreground mb-4">
                Your information may be transferred to and processed in countries other than your country of 
                residence. These countries may have data protection laws that are different from the laws of 
                your country. We take steps to ensure that your information receives an adequate level of 
                protection in the jurisdictions in which we process it.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6 prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">12. California Privacy Rights</h2>
              <p className="text-muted-foreground mb-4">
                If you are a California resident, you have specific rights under the California Consumer 
                Privacy Act (CCPA), including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                <li>The right to know what personal information we collect, use, disclose, and sell</li>
                <li>The right to delete personal information</li>
                <li>The right to opt-out of the sale of personal information (we do not sell personal information)</li>
                <li>The right to non-discrimination for exercising your CCPA rights</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6 prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">13. GDPR Compliance (European Users)</h2>
              <p className="text-muted-foreground mb-4">
                If you are located in the European Economic Area (EEA), you have certain data protection 
                rights under the General Data Protection Regulation (GDPR). We process your personal 
                information based on:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                <li>Your consent</li>
                <li>Performance of a contract with you</li>
                <li>Compliance with legal obligations</li>
                <li>Our legitimate interests</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6 prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">14. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date. You are 
                advised to review this Privacy Policy periodically for any changes. Changes are effective 
                when posted on this page.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6 prose prose-slate max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">15. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="text-muted-foreground space-y-2">
                <p><strong>Dataflexus</strong></p>
                <p>Email: dataflexus@dataflexus.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
