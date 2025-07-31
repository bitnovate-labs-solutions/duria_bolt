export default function Terms() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          
          <p className="text-gray-600 mb-8">Last updated: January 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using Duria's services, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Products and Services</h2>
            <p className="text-gray-600 mb-4">
              Duria provides premium durian export services and related products. 
              Product availability and specifications are subject to change without notice.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>All products are subject to availability</li>
              <li>Prices are subject to change without notice</li>
              <li>Product descriptions are provided for general information only</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Ordering and Payment</h2>
            <p className="text-gray-600 mb-4">
              Orders are subject to acceptance and availability. Payment must be made in full 
              before shipment unless other arrangements have been agreed upon.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>All orders are subject to confirmation</li>
              <li>Payment terms vary based on order size and customer relationship</li>
              <li>We reserve the right to refuse any order</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Shipping and Delivery</h2>
            <p className="text-gray-600 mb-4">
              Delivery times are estimates and not guaranteed. Risk of loss transfers to 
              the buyer upon delivery to the carrier.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Shipping costs are additional unless specified otherwise</li>
              <li>Delivery times are estimates only</li>
              <li>Special handling requirements may incur additional charges</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Quality Guarantee</h2>
            <p className="text-gray-600">
              We guarantee the quality of our products at the time of shipment. Claims for 
              damaged or defective products must be made within 24 hours of receipt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600">
              Duria's liability is limited to the purchase price of the products. 
              We are not liable for any indirect, incidental, or consequential damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Governing Law</h2>
            <p className="text-gray-600">
              These terms are governed by the laws of Singapore. Any disputes will be 
              resolved in the courts of Singapore.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-600">
              For questions about these Terms & Conditions, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="text-gray-600">
                Email: legal@durianexport.com<br />
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