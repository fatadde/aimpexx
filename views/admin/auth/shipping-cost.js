const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
    return layout({
        content: `
            <div class="shippingcost">
                <h2>Current <b style=" margin: unset; color: #101987">Shipping Rates</b></h2>
                <span>A competitive shipping rates to help you plan you import better.</span>
            </div>

            <section class="shippingcost2">
                <p style="margin: unset; padding: 40px 0px 20px 75px;"><b style="margin: unset;">Sea Cargo</b> (0.5CBM Minimum weight for Sea Shipping)</p>
                <div class="column">
                    <div>
                        <b style="color: #211d1d; margin: unset;">Service Type</b>
                        <p>General Goods</p>
                        <p>Light and Sensitive Goods</p>
                    </div>

                    <div>
                        <b style="color: #211d1d; margin: unset;">0.5 CBM - 1CBM</b>
                        <p>320USD/CBM</p>
                        <p>410USD/CBM</p>
                    </div>

                    <div>
                        <b style="color: #211d1d; margin: unset;">1 + CBM</b>
                        <p>315USD/CBM</p>
                        <p>405USD/CBM</p>
                    </div>
                </div>    
            </section>

             <section class="shippingcost3">
                <p style="margin: unset; padding: 40px 0px 20px 75px;"><b style="margin: unset;">Air Cargo</b> (1KG Minimum weight for Air Shipping)</p>
                <div class="column">
                    <div>
                        <b style="color: #211d1d; margin: unset;">Service Type</b>
                        <p>General Goods</p>
                        <p>Light and Sensitive Goods</p>
                        <p>Express goods</p>
                        <p>Gadget Cargo (Non Packet phone)</p>
                        <p>Gadget Cargo (Tablets)</p>
                        <p>Gadget Cargo (Packet phone)</p>
                        <p>Gadget Cargo (Laptops)</p>
                    </div>

                    <div>
                        <b style="color: #211d1d; margin: unset;">Price</b>
                        <p>$9.9/ KG</p>
                        <p>$10.6/ KG</p>
                        <p>$13/ KG</p>
                        <p>₦20,000 each</p>
                        <p>$14/ KG</p>
                        <p>₦20,000 each</p>
                        <p>$14/ KG</p>
                    </div>

                    <div>
                        <b style="color: #211d1d; margin: unset;">Delivery TIme</b>
                        <p>5-7 days Guangzhou to Lagos - Clearing ₦1100/ KG</p>
                        <p>15-20 days Hongkong to Lagos - Clearing ₦1200/ KG</p>
                        <p>2-5 days (Minimum weight 10kg)  - Clearing ₦1800/ KG</p>
                        <p>5 days</p>
                        <p>5 days Clearing ₦4,000/ KG</p>
                        <p>5 days</p>
                        <p>5 days Clearing ₦4,000/ KG</p>
                    </div>
                </div>   
                <span>Our prices are updated daily, confirm price list before booking.</span>
            </section>

            <section class="details-cost">
                <div class="cost-head">
                    <h2>Calculate your Shipping Rates</h2>
                    <p>Get an instant quote for your shipment with transparent pricing</p>
                </div>

                <div class="shippingcost-form">
                    <div class="columns">
                        <form>
                            <div class="colum">
                                <div class="column">
                                    <div class="field">
                                        <label>Origin</label><br>
                                        <input type="text" placeholder="China" required /><br
                                        <p style="color: white; font-size: 12px; margin:unset;">${getError(errors, 'origin')}</p>
                                    </div>

                                    <div class="field">
                                        <label>Cargo Type</label><br>
                                        <select name="shipmentType" id="shipmentType" required onchange="toggleShipmentInfo()">
                                            <option value="" disabled selected hidden>Air</option>
                                            <option value="Air Shipment">Air Shipment</option>
                                            <option value="Sea Shipment">Sea Shipment</option>
                                        </select>
                                        <p style="color: white; font-size: 12px;">${getError(errors, 'shipmentType')}</p>
                                    </div>

                                    <div class="field">
                                        <label>Weight (KG)</label><br>
                                        <input type="text" placeholder="0.0" required /><br>
                                        <p style="color: white; font-size: 12px; margin:unset;">${getError(errors, 'weight')}</p>
                                    </div>
                                </div>

                                <div class="column">
                                    <div class="field">
                                        <label>Destination</label><br>
                                        <select name="shipmentType" id="shipmentType" required onchange="toggleShipmentInfo()">
                                            <option value="" disabled selected hidden>Lagos</option>
                                            <option value="Air Shipment">Air Shipment</option>
                                            <option value="Sea Shipment">Sea Shipment</option>
                                        </select>
                                        <p style="color: white; font-size: 12px;">${getError(errors, 'destination')}</p>
                                    </div>

                                    <div class="field">
                                        <label>Service Type</label><br>
                                        <select name="shipmentType" id="shipmentType" required onchange="toggleShipmentInfo()">
                                            <option value="" disabled selected hidden>General Goods</option>
                                            <option value="Air Shipment">Air Shipment</option>
                                            <option value="Sea Shipment">Sea Shipment</option>
                                        </select>
                                        <p style="color: white; font-size: 12px;">${getError(errors, 'serviceType')}</p>
                                    </div>
                                </div>
                            </div>    

                            <div class="balance">
                                <div>
                                    <b>Estimated Shipping Cost</b>
                                    <p>Estimated Clearing Cost</p>
                                </div>

                                <div>
                                    <b>$0</b>
                                    <p>$0</p>
                                </div>
                            </div>
                            <button type="submit">Get instant Cost</button>
                        </form>
                    </div>
                </div>
            </section>
     ` 
    })
};
