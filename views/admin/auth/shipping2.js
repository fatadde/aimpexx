const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
    return layout({
        content: `
        <section class="shipping">
            <h2>Generate Address</h2>
            <p>Select a shipment Type that fits your Goods</p>
            <form method="POST" action="/shipping2">
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

                    <div id="shipmentInfo" style="display: none; margin: unset; background-color: #e8f4f8; border-left: 4px solid #0099cc; justify-self: center; padding: 15px; margin-top: 15px; border-radius: 4px;">
                        <span style="font: 15px; font-weight: 500; margin-left: -120px;">Warehouse Address</span>
                        <p id="shipmentMessage" style="color: #333; margin: 0; font-weight: 500; font-size: 10px; width: 250px; text-align: left; line-height: 140%;"></p>
                    </div> 
                </div>    
                <button type="submit">Continue to Shipping</button><br>
                <span>Join the moving train and make your business reach the global standard</span>
            </form>
            
            <script>
                function toggleShipmentInfo() {
                    const shipmentType = document.getElementById('shipmentType').value;
                    const shipmentInfo = document.getElementById('shipmentInfo');
                    const shipmentMessage = document.getElementById('shipmentMessage');
                    
                    if (shipmentType === 'Air Shipment') {
                        shipmentMessage.textContent = '✈️ 所在地区: 广东省佛山市南海区大沥镇 详细地址: 教育路与沙溪路交叉口东北方向90米一番街E座0722';
                        shipmentInfo.style.display = 'block';
                    } else if (shipmentType === 'Sea Shipment') {
                        shipmentMessage.textContent = '🚢 Sea Address: 仓库地址：广东省佛山市南海区里水镇里广路海 南州工业区44号费加罗仓储';
                        shipmentInfo.style.display = 'block';
                    } else {
                        shipmentInfo.style.display = 'none';
                    }
                }
            </script>
        </section>
     ` 
    })
};