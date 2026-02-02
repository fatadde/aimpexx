const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
    return layout({
        content: `
            <section class="shipping3">
            <div class="herosection">
                <div class="text">
                    <h2>No More <b style="color: #101987; margin: unset;">Shipping<br>Uncertainty</b></h2>
                    <span>Track Your Goods from China to Your Doorstep</span>
                    <p>We handle the journey from China to your final destination—smoothly, safely, and efficiently. Whether by air or sea, our logistics system ensures your goods pass through customs seamlessly and arrive on time. You’ll always know where your goods are through real-time tracking.</p>
                </div>

                <div class="image">
                    <img src="/images/shipping-hero.png" alt="shipping image"/>
                    <img class="png2-hero" src="/images/shipping-hero2.png" alt="shipping image"/>
                </div>
            </div>

            <form method="POST" action="/shipping3">
                <div class="column">
                    <div class="field">
                        <select name="shipmentType" required>
                            <option value="" disabled selected hidden>Select Category</option>
                            <option value="Air Shipment">Air Shipment</option>
                            <option value="Sea Shipment">Sea Shipment</option>
                        </select>
                        <p style="color: white; font-size: 12px;">${getError(errors, 'shipmentType')}</p>
                    </div>     

                    <div class="field">
                        <input type="text" placeholder="Input Weight (KG)" name="weight" /><br>
                        <p style="color: white; font-size: 12px;">${getError(errors, 'weight')}</p>
                    </div>    

                    <div class="field">
                        <select name="shipmentType" required>
                            <option value="" disabled selected hidden>Shipping Category</option>
                            <option value="Air Shipment">Air Shipment</option>
                            <option value="Sea Shipment">Sea Shipment</option>
                        </select>
                        <p style="color: white; font-size: 12px;">${getError(errors, 'shipmentType')}</p>
                    </div>    

                    <div class="field">
                        <input style="height: 133px;" type="email-address" placeholder="Input E-mail Address" name="email" /><br>
                        <p style="color: white; font-size: 12px;">${getError(errors, 'email')}</p>
                    </div> 

                    <div class="field">
                        <input type="text" placeholder="Input Tracking ID" name="track-id" id="trackId" /><br>
                        <p style="color: white; font-size: 12px;">${getError(errors, 'track')}</p>
                    </div> 
                </div>
                <button type="button" style="background: white; border: 1px solid #101987; color: #101987;">Consolidate</button>   
                <button type="submit">Generate</button><br>
                <span>Note: For consolidation, we typically have a 5-day window to receive<br> goods before shipping. Extended storage can incur additional costs. Our<br> sea shipments typically depart on Mondays and Wednesdays.</span>
            </form>
        </section>

        <section class="shipping-boxes">
            <div class="box">
                <span>1</span>
                <p>Real-time<br> shipment<br> tracking</p>
            </div>

            <div class="box">
                <span>2</span>
                <p>Hassle free<br> customs<br> clearing</p>
            </div>

            <div class="box">
                <span>3</span>
                <p>Competitive<br> freight rates</p>
            </div>

            <div class="box">
                <span>4</span>
                <p>Fast, reliable<br> door-to-door<br> delivery</p>
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
    })};