export default function Refund() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
          
          <p className="text-gray-600 mb-8">Last updated: January 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Quality Guarantee</h2>
            <p className="text-gray-600">
              We stand behind the quality of our products. If you receive damaged or 
              defective durian products, we will provide a full refund or replacement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Refund Eligibility</h2>
            <p className="text-gray-600 mb-4">
              Refunds are available under the following conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Products are damaged upon arrival</li>
              <li>Products are significantly different from description</li>
              <li>Products arrive in poor condition due to shipping issues</li>
              <li>Wrong products were shipped</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Refund Process</h2>
            <p className="text-gray-600 mb-4">
              To request a refund:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 space-y-2">
              <li>Contact us within 24 hours of receiving your order</li>
              <li>Provide photos of the damaged or defective products</li>
              <li>Include your order number and contact information</li>
              <li>Our team will review your claim and respond within 24 hours</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Non-Refundable Items</h2>
            <p className="text-gray-600 mb-4">
              The following items are not eligible for refunds:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Products consumed or used</li>
              <li>Products damaged due to customer handling</li>
              <li>Custom or special orders (unless defective)</li>
              <li>Products returned after 24 hours without prior approval</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Refund Timeline</h2>
            <p className="text-gray-600">
              Approved refunds will be processed within 3-5 business days. 
              The refund will be credited to your original payment method.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Replacement Options</h2>
            <p className="text-gray-600">
              Instead of a refund, you may choose a replacement product of equal value. 
              Replacement products will be shipped at no additional cost.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. International Orders</h2>
            <p className="text-gray-600">
              International customers may be subject to additional terms based on 
              local regulations and shipping restrictions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
            <p className="text-gray-600">
              For refund requests or questions about this policy:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="text-gray-600">
                Email: refunds@durianexport.com<br />
                Phone: +65 9123 4567<br />
                Address: 123 Export Hub Street, Singapore 123456
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}