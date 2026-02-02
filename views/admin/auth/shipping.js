const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
    return layout({
        content: `
        <section class="shipping">
            <h2>Generate Address</h2>
            <p>Select a shipment Type that fits your Goods</p>
            <form method="POST" action="/shipping">
                <div class="column">
                    <div class="field">
                        <input type="name" placeholder="Input your Full Name" name="fullName" /><br>
                        <p style="color: white; font-size: 12px; margin: unset">${getError(errors, 'fullName')}</p>
                    </div>    

                    <div class="field">
                        <input type="email" placeholder="Input E-mail Address" name="email" /><br>
                        <p style="color: white; font-size: 12px;">${getError(errors, 'email')}</p>
                    </div>    

                    <div class="field">
                        <input type="phone" placeholder="Phone Number (whatsapp)" name="contact" /><br>
                        <p style="color: white; font-size: 12px;">${getError(errors, 'contact')}</p>
                    </div>    

                    <div class="field">
                        <select name="shipmentType" id="shipmentType" required onchange="toggleShipmentInfo()">
                            <option value="" disabled selected hidden>Select Shipment</option>
                            <option value="Air Shipment">Air Shipment</option>
                            <option value="Sea Shipment">Sea Shipment</option>
                        </select>
                        <p style="color: white; font-size: 12px;">${getError(errors, 'shipmentType')}</p>
                    </div>
                </div> 
                <button type="submit">Generate</button><br>
                <span>Join the moving train and make your business reach the global standard</span>
            </form>
        </section>
     ` 
    })
};