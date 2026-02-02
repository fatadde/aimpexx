const layout = require('../layout');

module.exports = ({}) => {
    return layout({
        content: `
        <section class="terms">
            <h2>Terms and Policies</h2>
                <br>               
            <p>At Aimpexx, we are committed to providing high-quality logistics and supply chain solutions while maintaining transparency and compliance<br> with all relevant laws and regulations. Please read our terms and policies carefully to understand your rights and obligations when using our<br>services.<br><br>               
                1. General Terms of Service<br>
                Agreement to Terms: By using our services, you agree to the terms and conditions outlined in this document. These terms apply to all users of<br> the Aimpexx website and services.<br>
                Service Availability: Aimpexx provides logistics, shipping, warehousing, and local delivery services. Availability of specific services may depend<br> on your location and the nature of your goods.
                 <br><br>
                2. Shipping & Delivery<br>
                Shipping Methods: We offer various shipping methods, including air shipping, sea shipping, and local delivery. The service chosen will depend<br> on the destination, volume, and urgency of the shipment.<br>
                Delivery Times: Estimated delivery times vary depending on the service selected. Air shipping typically takes 2–7 days, sea shipping takes 14–30<br> days, and local delivery times depend on the destination within the country.<br>
                Customs & Import Duties: You are responsible for all customs duties, taxes, and import charges associated with your shipment. These charges<br> are imposed once the shipment reaches its destination country.
                 <br><br>
                3. Order Placement and Confirmation<br>
                Order Details: When placing an order, it is important to provide accurate and complete information about your shipment, including the type of<br> goods, weight, dimensions, and addresses.<br>
                Order Confirmation: Once your order is submitted, Aimpexx will provide a quote based on the details provided. Your order will be confirmed<br> once payment is made and the terms agreed upon.<br>
                Right to Refuse: Aimpexx reserves the right to refuse service to any individual or company at our discretion, including but not limited to orders<br> involving prohibited or illegal goods.
                 <br><br>
                4. Payment Terms<br>
                Payment Methods: We accept various payment methods for our services, including bank transfers and credit card payments.<br> Full payment is required before shipping commences unless otherwise agreed upon.<br>
                Pricing: All prices are quoted in the appropriate currency based on the service type, volume, and destination. Prices are subject to change due<br> to fluctuating shipping rates or unforeseen factors.
                 <br><br>
                5. Insurance & Liability<br>
                Insurance Coverage: Aimpexx Worldwide offers optional shipping insurance to protect against loss, damage, or theft of goods during transit.<br> Insurance is not automatically included in the shipping cost.<br>
                Liability: While Aimpexx Worldwide takes all reasonable precautions to ensure the safety of your goods, we are not liable for any loss or<br> damage caused by events outside our control, such as natural disasters, acts of government, or third-party service failures.
                 <br><br>
                6. Privacy and Data Protection<br>
                Personal Information: Aimpexx collects and processes personal data in accordance with applicable data protection laws. We may collect<br> information such as name, address, contact details, and shipment details in order to process and complete your orders.<br>
                Data Security: We take reasonable steps to protect your personal data from unauthorized access, disclosure, alteration, or destruction.<br> However, no method of electronic transmission or storage is 100% secure.
                 <br><br>
                7. Customer Responsibilities<br>
                Accuracy of Information: You are responsible for providing accurate, complete, and truthful information when placing an order. Incorrect<br> information may result in delayed shipments or additional charges.<br>
                Prohibited Goods: You agree not to ship illegal, hazardous, or restricted items through Aimpexx. Any such shipments may be refused, delayed<br> or returned, and you may incur additional costs or penalties.<br>
                Inspection of Goods: You are responsible for inspecting goods upon receipt. Any discrepancies or damages must be reported to Aimpexx<br> within 24 hours of delivery.
                 <br><br>
                8. Cancellation and Refunds<br>
                Cancellation Policy: Orders can be canceled prior to shipment with no penalty. If an order has already been shipped, cancellation may not be<br> possible, and you may be liable for shipping charges.<br>
                Refunds: Refunds will be issued for services that are not rendered, or in the event of non-compliance with our terms. Refund requests must be<br> made within 30 days of the order confirmation.
                 <br><br>
                9. Modifications to Terms<br>
                Changes to Terms: Aimpexx reserves the right to modify or update these terms and policies at any time. Any changes will be posted on this<br> page, and the updated terms will take effect immediately upon publication.<br>
                Ongoing Agreement: Continued use of our services after any changes to the terms constitutes your acceptance of the updated terms.
                 <br><br>
                10. Dispute Resolution<br>
                Governing Law: These terms and policies are governed by the laws of the Federal Republic of Nigeria.<br>
                Dispute Resolution: Any disputes arising from or in connection with these terms will be resolved through amicable negotiations. If a resolution<br> cannot be reached, the matter will be referred to arbitration in accordance with the laws of Nigeria.
                <br><br>
                11. Contact Us<br>
                If you have any questions or concerns regarding our terms and policies, please contact us via:
                 <br><br>
                Phone: 08083339380<br>
                Email: aimpexxworldwide@gmail.com<br>
                Address: 21 Kodesoh Street, Computer Village, Ikeja, Lagos State.
            </p>
        </section>

       <footer>
            <div class="foot">
                <ul>
                    <h2>Our Services</h2>
                    <a href="/sourcing"><li>Sourcing</li></a>
                    <a href="/payment"><li>Payment to suppliers</li></a>
                    <a href="/quality-check"><li>Quality Check<br>(Inspection)</li></a>
                    <a href="/manufacturing"><li>Manufacturing</li></a>
                    <a href="/shipping"><li>Shipping</li></a>
                </ul>

                <ul>
                    <h2>Company</h2>
                    <a href="/aboutus"><li>About Us</li></a>
                    <a href="/"><li>Why Choose Us</li></a>
                    <a href="/terms"><li>Terms & Conditions</li></a>
                    <a href="/privacy"><li>Privacy Policy</li></a>
                </ul>

                <ul>
                    <h2>Tools</h2>
                    <a href="/shippingcost"><li>Calculate Shipping<br>Cost</li></a>
                    <a href="/trackShipment"><li>Track your<br>Shipment</li></a>
                </ul>

                <ul>
                    <h2>Contact Us</h2>
                    <a href="/"><li>21 Kodesho Street, Computer Village,<br> Lagos State</li></a>
                    <a href="/"><li>+234 808 333 9380</li></a>
                    <a href="/"><li>aimpexx</li></a>
                    <a href="/"><li>aimpexxworldwide@gmail.com</li></a>
                </ul>

                <form>
                    <h2>Subscribe to our News letter</h2>
                    <label>
                        <input type="email" placeholder="Enter your E-mail Address" />
                    </label><br>
                    <button>Subscribe</button>
                </form>
            </div>
            <div class="line"></div>
            <p class="reserved">2025 <span>c</span> Aimpexx All rights reserved</p>
        </footer>

     ` 
    })
};