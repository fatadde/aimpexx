const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
    return layout({
        content: `
        <section class="manufacture3-form" id="form3">
            <div class="progress-bar">
                <div class="progress"></div>
            </div>
            <form method="POST" action="/manufacturing3">
                <div class="column" style="padding: 10px 0px 0px 8px;">    
                    <div class="form-group">
                        <select name="shipmentType" id="shipmentType" required onchange="toggleShipmentInfo()">
                            <option value="" disabled selected hidden>Time Zone</option>
                            <option value="Air Shipment">Air Shipment</option>
                            <option value="Sea Shipment">Sea Shipment</option>
                        </select>
                        <p style="color: white; font-size: 12px;">${getError(errors, 'shipmentType')}</p>
                    </div>     
            
                    <div class="form-group">
                        <select name="shipmentType" id="shipmentType" required onchange="toggleShipmentInfo()">
                            <option value="" disabled selected hidden>Time Of Contact</option>
                            <option value="Air Shipment">Air Shipment</option>
                            <option value="Sea Shipment">Sea Shipment</option>
                        </select>
                        <p style="color: white; font-size: 12px;">${getError(errors, 'shipmentType')}</p>
                    </div>
                </div>    
                <button type="submit" style="margin-top: 100px;">Submit</button>
            </form>
        </section>

       <section class="shipping-boxes">
            <div class="box">
                <span>1</span>
                <p>Verified and<br> trusted <br>supplier<br> network</p>
            </div>

            <div class="box">
                <span>2</span>
                <p>Thorough<br> product quality<br> validation</p>
            </div>

            <div class="box">
                <span>3</span>
                <p>Fair and<br> optimized<br> pricing</p>
            </div>

            <div class="box">
                <span>4</span>
                <p>Custom product<br> options when<br> needed</p>
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