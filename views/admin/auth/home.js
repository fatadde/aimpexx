const layout = require('../layout');

module.exports = ({}) => {
    return layout({
        content: `
        <section>
            <hero class="hero">
                <div class="hero-bg">
                    <img class="img1" src="/images/Rectangle 165.png" />
                    <img class="img2" src="/images/Rectangle 164.png" />
                    <img class="img3" src="/images/Rectangle 163.png" />
                </div>

                <div class="hero-info">
                    <h2>Ship Quality Products from<br>
                    <span><b class="pan">China</b>Smoothly, Securely,</span><br>
                        and Without<b class="pan2">Stress</b>
                    </h2>
                    <p>No guesswork. No delays. Just a seamless flow from order<br> to delivery.</p>
                    <div>
                        <button id="start" class="button1">Get Started</button>
                        <button id="shippingcost" class="button2">Shipping Cost</button>
                    </div>
                </div>    
            </hero>
        </section>

        <section class="article">
            <h2>Importing from China Doesn’t Have to Be<br>
                Complicated, With Aimpexx, It’s Not.
            </h2>
            <p>Most businesses face serious challenges when importing from<br>China — do any of these sound familiar?</p>   
            
            <div class="product-info">
                <div class="suppliers">
                  <h2>Unverified Suppliers</h2>
                  <p>Finding dependable suppliers in China<br> can be overwhelming — and costly.<br> Many businesses lose funds to<br> fraudulent vendors.</p>
                  <b>67%</b><br>
                  <span>of businesses report being affected</span>
                </div>

                <div class="cover1"></div>
                
                <div class="img1">
                  <img src="images/Ellipse 11.png" />
                </div>

                <div class="cover2"></div>

                <div class="quality">
                  <h2>Substandard Product<br> Quality</h2>
                  <p>Receiving poor-quality goods leads to refunds, customer complaints, and financial loss.</p>
                  <b>72%</b><br>
                  <span>of importers experience quality issues.</span>
                </div>
            </div>

            <div class="cost-info">
                 <div class="shipping">
                  <h2>Hidden Charges That<br> Cut Your Profit</h2>
                  <p>Unplanned fees, exchange rate changes, and shipping surprises can destroy your profit margin overnight.</p>
                  <b>35%</b><br>
                  <span>report profit erosion due to hidden costs.</span>
                </div>

                <div class="cover11"></div>
                
                <div class="img2">
                  <img src="images/Ellipse 12.png" />
                </div>

                <div class="cover22"></div>

                <div class="quality2">
                  <h2>Costly Shipping Delays</h2>
                  <p>Late arrivals disrupt operations and damage customer trust — a major threat to business growth.</p>
                  <b>78%</b><br>
                  <span>of importers face repeated delivery delays.</span>
                </div>
            </div>

            <button id="shipping">Ship Now</button>
        </section>

        <section class="info-center">
            <h2>We provide end-to-end logistics solutions designed for speed, transparency, and peace of mind.</h2>
            <div class="boxs">
                <div class="box">
                    <h2>Sourcing</h2>
                    <p>Finding quality products in China shouldn’t be a gamble. We eliminate the guesswork by connecting you with verified, trustworthy suppliers—ensuring you get the right products at the right price. From supplier verification to quality checks, we manage the entire sourcing lifecycle so your business stays focused on growth, not the complexities of international procurement.</p>
                    <ul>
                        <li>Verified and trusted supplier network</li>
                        <li>Thorough product quality validation</li>
                        <li>Fair and optimized pricing</li>
                        <li>Custom product options when needed</li>
                    </ul>    
                    <img style="position: absolute; top: 550px; left: 420px;" src="/images/fluent-box.png" />
                </div>
                <div class="box">
                    <h2>Payment to Suppliers</h2>
                    <p>Paying suppliers in China can be stressful and expensive. We make it effortless. Simply pay in Naira through local transfer, and we handle supplier payments instantly in RMB—securely and transparently. No hidden charges, no FX confusion, no payment delays.</p>
                    <ul>
                        <li>Pay locally in your home currency</li>
                        <li>Fraud-proof, secure transactions</li>
                        <li>Zero hidden fees</li>
                        <li>Fast, reliable payment processing</li>
                    </ul>
                    <img style="position: absolute; top: 530px; right: 120px;" src="/images/fluent-box.png" />
                </div>

                <div class="arrow" >
                    <img class="arrow-image" src="/images/circular arrow 1.png" />
                </div>    

                <div class="box">
                    <h2>Quality Check (Inspection)</h2>
                    <p>Before your goods leave China, our inspection team ensures everything meets your exact specifications. We physically check your items for quality, accuracy, safety, packaging, and compliance. No surprises. No substandard products. Only verified, inspected goods that match what you paid for.</p>
                    <ul>
                        <li>Thorough pre-shipment inspections</li>
                        <li>Product quantity & quality verification</li>
                        <li>Packaging and specification checks</li>
                        <li>Photo & video reports for transparency</li>
                    </ul>
                    <img style="position: absolute; bottom: 580px; left: 420px;" src="/images/fluent-box.png" />    
                </div>
                <div class="box">
                    <h2>Manufacturing</h2>
                    <p>Your production process is fully overseen by our on-ground team in China. From factory visits to real-time production monitoring, we ensure your products meet the agreed standards. Every batch is checked for quality, compliance, and consistency—so you always receive what you ordered.</p>
                    <ul>
                        <li>Detailed quality control at every stage</li>
                        <li>Real-time production monitoring</li>
                        <li>Compliance and certification checks</li>
                        <li>Tailored manufacturing solutions</li>
                    </ul>
                    <img style="position: absolute; bottom: 580px; right: 120px;" src="/images/fluent-box.png" />    
                </div>
                <div class="box" style="position: relative; left: 280px;">
                    <h2>Manufacturing</h2>
                    <p>Your production process is fully overseen by our on-ground team in China. From factory visits to real-time production monitoring, we ensure your products meet the agreed standards. Every batch is checked for quality, compliance, and consistency—so you always receive what you ordered.</p>
                    <ul>
                        <li>Detailed quality control at every stage</li>
                        <li>Real-time production monitoring</li>
                        <li>Compliance and certification checks</li>
                        <li>Tailored manufacturing solutions</li>
                    </ul> 
                    <img style="position: absolute; bottom: 40px; left: 320px;" src="/images/fluent-box.png" />
                </div>
            </div>
        </section>

        <section class="howitworks">
            <div class="head">
                <h2>How It Works</h2>
                <p>Our streamlined process makes importing goods from China fast, predictable, and fully transparent.</p>
            </div>
            <div class="steps">
                <div class="step">
                    <div class="profile-img">
                        <img src="/images/4.png" />
                    </div>    
                    <h2>Tell Us What You Need</h2>
                    <p>We start by understanding your requirements and business goals. Our team develops a tailored plan that guides your order from China to your doorstep.</p>
                    <ul>
                        <li>Requirement breakdown</li>
                        <li>Market & feasibility analysis</li>
                        <li>ROI-focused planning</li>
                        <li>Risk assessment & mitigation</li>
                    </ul>
                </div>

                <div class="step">
                     <div class="profile-img">
                        <img src="/images/4.png" />
                    </div>    
                    <h2>We Handle the Supplier<br> Side</h2>
                    <p>Whether you have a preferred factory or need guidance, we help you verify suppliers, assess product quality, and ensure compliance</p>
                    <ul>
                        <li>Verified supplier checks</li>
                        <li>Multi-level product quality<br>review</li>
                        <li>Price and value optimization</li>
                        <li>Certification & compliance<br>control</li>
                    </ul>
                </div>

                <div class="step">
                     <div class="profile-img">
                        <img src="/images/4.png" />
                    </div>    
                    <h2>We Manage the Entire Journey</h2>
                    <p>From warehouse handling to final delivery, every step is covered. Track your shipment in real time and enjoy a worry-free experience</p>
                    <ul>
                        <li>End-to-end logistics management</li>
                        <li>Real-time tracking</li>
                        <li>Smooth customs processing</li>
                        <li>Fast doorstep delivery</li>
                    </ul>
                </div>
        </section>

        <section class="booking">
            <img src="/images/celephone.png" />
            <div>
                <h1>Schedule a Strategy Call</h1>
                <p>Book a 30-minute consultation</p>
                <span>Speak directly with an experienced service agent</span>
                <h2>Available 9:00 AM – 4:30 PM WAT (Monday–Friday)</h2>
                <button id="book">Book a Session Now</butoon>
        </section>

        <section class="questions">
            <div class="que-text">
                <p>What services does Aimpexx Worldwide offer?<b style="position: relative; left: 152px;">+</b></p>
                <p>How can I track my shipment?<b style="position: relative; left: 270px;">+</b></p>
                <p>How do I get a quote for my shipment?<b style="position: relative; left: 204px;">+</b></p>
                <p>What are the shipping timeframes for air and sea<br>shipments?<b style="position: relative; left: 407px; top: -20px;">+</b></p>
                <p>Can Aimpexx Worldwide handle my customs<br>clearance?<b style="position: relative; left: 414px; top: -20px;">+</b></p>
                <p>How do I know if my goods are safe during<br>transit?<b style="position: relative; left: 437px; top: -20px;">+</b></p>
                <p>How do I request local delivery within Nigeria?<b style="position: relative; left: 150px;">+</b></p>
                <p>Do you offer warehousing services?<b style="position: relative; left: 233px;">+</b></p>
            </div>
            <div class="que">
                <h2>FAQs</h2>
                <p>Here are answers to some frequently asked questions we have received in the past.</p>
                <img src="images/Rectangle 133.png" />
            </div>
        </section>

        <section class="getupdate">
            <div class="update">
                <img src="images/email.png" />
                <div class="mail">
                    <h2>Receive Weekly China Update</h2>
                    <p>Receive exclusive updates, market intelligence, and strategic tips for smarter importing. Join 10,000+ businesses already learning from our insights.</p>
                    <form>
                        <input type="text" placeholder="Your Email Address" />
                        <button id="update">Get Updates</button>
                    </form>
                </div>    
            </div>
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
                    <a href="/aboutus"><li>Why Choose Us</li></a>
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

        <script>
            document.addEventListener('DOMContentLoaded', () => {
            const btn = document.getElementById('start');
            if (btn) {
                btn.addEventListener('click', () => {
                window.location.href = '/started';
                });
            }
            });

            document.addEventListener('DOMContentLoaded', () => {
            const btn = document.getElementById('shippingcost');
            if (btn) {
                btn.addEventListener('click', () => {
                window.location.href = '/shippingcost';
                });
            }
            });

            document.addEventListener('DOMContentLoaded', () => {
            const btn = document.getElementById('shipping');
            if (btn) {
                btn.addEventListener('click', () => {
                window.location.href = '/shipping';
                });
            }
            });

            document.addEventListener('DOMContentLoaded', () => {
            const btn = document.getElementById('book');
            if (btn) {
                btn.addEventListener('click', () => {
                window.location.href = '/scheldule';
                });
            }
            });
        </script>
     ` 
    })
};