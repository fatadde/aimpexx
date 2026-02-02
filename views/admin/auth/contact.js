const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
    return layout({
        content: `
        <section class="contact">
            <div>
                <p>Contact Us</p>
            </div>
        </section>  
        
        <section class="contact-form">
            <div class="columns">
                <form  method="POST" action="/contact" >
                    <div class="column">
                        <div class="form-group">
                            <label>Name</label><br>
                            <input type="text" name="fullName" /><br>
                            <p style="color: red; font-size: 12px; margin: unset">${getError(errors, 'fullName')}</p>
                        </div> 
                        
                        <div class="form-group">
                            <label>E-mail</label><br>
                            <input type="email" name="email" /><br>
                            <p style="color: red; font-size: 12px; margin: unset">${getError(errors, 'email')}</p>
                        </div> 
                
                        <div class="form-group">
                            <label>Contact No</label>
                            <input type="text" name="contact" /><br>
                            <p style="color: red; font-size: 12px; margin: unset">${getError(errors, 'contact')}</p>
                        </div>     
                
                        <div class="form-group">
                            <label>Message</label><br>
                            <input type="text" name="message" style="height: 276px;" /><br>
                            <p style="color: red; font-size: 12px; margin: unset">${getError(errors, 'message')}</p>
                        </div> 
                    </div>    
                    <button type="submit">Submit</button>
                </form>
            </div>

            <img src="images/contact2.png" />
        </section>

        <section class="contact-address">
            <p>
                Nigeria Contact:<br>
                21 Kodesoh, Computer Village,Ikeja, Lagos State.

                <br>
                <br>
                +234 808 333 9380,<br>
                aimpexxworldwide@gmail.com
            </p>

            <p>
                China Contact:<br>
                Air Address:<br>
                所在地区: 广东省佛山市南海区大沥镇 详细地址: 教育路<br>与沙溪路交叉口东北方向90米一番街E座0722
                <br><br>

                Sea Address: 仓库地址：广东省佛山市南海区里水镇里广路海<br>南州工业区44号费加罗仓储<br>
                Shipping mark: ABRAHAMOLAS  L0S1320 + SEA<br>
                +86 159 2016 5954,
            </p>
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
                <img src="/images/Rectangle 133.png" />
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