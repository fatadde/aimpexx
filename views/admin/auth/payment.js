const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
    return layout({
        content: `
        <section class="payment">
            <div class="payment-text">
                <h2>Avoid <b style=" color: #101987; margin: unset;">Failed Transfers</b><br> & Hidden <b style=" color: #101987; margin: unset;">Fees</b></h2>
                <span>Pay Suppliers the Easy Way.”</span>
                <p style="line-height: 40px;">Paying suppliers in China can be stressful<br> and expensive. We make it effortless.<br> Simply pay in Naira through local transfer,<br> and we handle supplier payments instantly<br> in RMB—securely and transparently. No<br> hidden charges, no FX confusion, no<br> payment delays.<p>
            </div>

            <img src="/images/payment.png" style="margin-left: 50px;" />
        </section>

        <section class="payment-form" id="form1">
            <div class="progress-bar">
                <div class="progress"></div>
            </div>
            <form style="height: 350px; padding-left: 8px;" method="POST" action="/payment">
                <div class="column" style="padding: 40px 0px 0px 8px;">
                    <div class="form-group" style="margin-bottom: 20px;">
                        <input type="text" placeholder="Input your Full Name" name="fullName" /><br>
                        <p style="color: white; font-size: 12px; margin:unset;">${getError(errors, 'fullName')}</p>
                    </div> 
                    
                    <div class="form-group" style="margin-bottom: 10px;">
                        <input type="tel" placeholder="Phone Number (whatsapp)" name="contact" /><br>
                        <p style="color: white; font-size: 12px; margin: unset;">${getError(errors, 'contact')}</p>
                    </div>  
                </div>    
                <button type="submit">Continue</button>
            </form>
        </section> 
        
       <section class="shipping-boxes">
            <div class="box">
                <span>1</span>
                <p>Pay locally in<br> your home<br> currency</p>
            </div>

            <div class="box">
                <span>2</span>
                <p>Fraud-proof,<br> secure<br> transactions</p>
            </div>

            <div class="box">
                <span>3</span>
                <p>Zero hidden<br> payment
            </div>

            <div class="box">
                <span>4</span>
                <p>Fast, reliable payment processing</p>
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