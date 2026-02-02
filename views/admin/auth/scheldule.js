const layout = require('../layout');

module.exports = ({}) => {
    return layout({
        content: `
        <section class="scheldule">
            <h2>Choose the Service you need</h2>
            <div class="progress-bar">
                <div class="progress"></div>
            </div>
            <p>Select the Service to best direct you with the right partner</p>
            <form method="POST" action="/scheldule">
                <div id="serviceOptions">
                    <input type="radio" id="service1" name="service" value="Sourcing" required style="display: none;">
                    <p class="service-option" data-service="Sourcing" style="cursor: pointer; padding-top: 30px; margin: 10px 0; border: 2px solid #ddd; border-radius: 8px; transition: all 0.3s;">Sourcing<br><span>Finding quality products in China</span></p>
                    
                    <input type="radio" id="service2" name="service" value="Payment to Suppliers" required style="display: none;">
                    <p class="service-option" data-service="Payment to Suppliers" style="cursor: pointer; padding-top: 30px; margin: 10px 0; border: 2px solid #ddd; border-radius: 8px; transition: all 0.3s;">Payment to Suppliers<br><span>No hidden charges, no FX confusion, no payment delays.</span></p>
                    
                    <input type="radio" id="service3" name="service" value="Quality Check (Inspection)" required style="display: none;">
                    <p class="service-option" data-service="Quality Check (Inspection)" style="cursor: pointer; padding-top: 30px; margin: 10px 0; border: 2px solid #ddd; border-radius: 8px; transition: all 0.3s;">Quality Check (Inspection)<br><span>our inspection team ensures everything meets your exact specifications. </span></p>
                    
                    <input type="radio" id="service4" name="service" value="Manufacturing" required style="display: none;">
                    <p class="service-option" data-service="Manufacturing" style="cursor: pointer; margin: 10px 0; border: 2px solid #ddd; border-radius: 8px; transition: all 0.3s;">Manufacturing<br><span>From factory visits to real-time production monitoring, we ensure your products<br> meet the agreed standards.</span></p>
                    
                    <input type="radio" id="service5" name="service" value="Shipping" required style="display: none;">
                    <p class="service-option" data-service="Shipping" style="cursor: pointer; padding: 15px; margin: 10px 0; border: 2px solid #ddd; border-radius: 8px; transition: all 0.3s;">Shipping<br><span>We handle the journey from China to your final destination—smoothly,<br> safely, and efficiently.</span></p>
                </div>
                <button type="submit" id="btn1">Next</button><br>
                <span>Join the moving train and make your business reach the global standard</span>
            </form>
        </section>

        <script>
            document.addEventListener('DOMContentLoaded', () => {
                const serviceOptions = document.querySelectorAll('.service-option');
                const radioInputs = document.querySelectorAll('input[name="service"]');
                
                // Add click event listeners to each paragraph
                serviceOptions.forEach((option, index) => {
                    option.addEventListener('click', () => {
                        // Check the corresponding radio button
                        radioInputs[index].checked = true;
                        
                        // Remove previous selection styling
                        serviceOptions.forEach(p => {
                            p.style.borderColor = '#ddd';
                            p.style.backgroundColor = 'transparent';
                        });
                        
                        // Add styling to selected option
                        option.style.borderColor = '#101987';
                        option.style.backgroundColor = '#f0f4ff';
                    });
                });
            });
        </script>
     ` 
    })
};

