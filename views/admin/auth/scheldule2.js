const layout = require('../layout');

module.exports = ({ req }) => {
    const selectedService = req.session.selectedService || 'Service';
    
    return layout({
        content: `
        <section class="scheldule2">
            <h2>What time best suits you?</h2>
            <p style="color: #101987; font-weight: bold; margin: 10px 0;">Selected Service: ${selectedService}</p>
            <div class="progress-bar">
                <div class="progress"></div>
            </div>
            <p>Select the time that suits the request of your Service</p>
            <form method="POST" action="/scheldule2">
                <div id="timeframeOptions">
                    <input type="radio" id="time1" name="timeframe" value="0-1 Week" required style="display: none;">
                    <p class="timeframe-option" data-time="0-1 Week" style="cursor: pointer; padding-top: 50px; margin: 10px 0; border: 2px solid #ddd; border-radius: 8px; transition: all 0.3s;">0-1 Week</p>
                    
                    <input type="radio" id="time2" name="timeframe" value="2-3 Weeks" required style="display: none;">
                    <p class="timeframe-option" data-time="2-3 Weeks" style="cursor: pointer; padding-top: 50px; margin: 10px 0; border: 2px solid #ddd; border-radius: 8px; transition: all 0.3s;">2-3 Weeks</p>
                    
                    <input type="radio" id="time3" name="timeframe" value="1 Month" required style="display: none;">
                    <p class="timeframe-option" data-time="1 Month" style="cursor: pointer; padding-top: 50px; margin: 10px 0; border: 2px solid #ddd; border-radius: 8px; transition: all 0.3s;">1 Month</p>
                    
                    <input type="radio" id="time4" name="timeframe" value="My Time" required style="display: none;">
                    <p class="timeframe-option" data-time="My Time" style="cursor: pointer; padding-top: 50px; margin: 10px 0; border: 2px solid #ddd; border-radius: 8px; transition: all 0.3s;">My Time</p>
                    
                    <input type="radio" id="time5" name="timeframe" value="Not Ready, still Planning" required style="display: none;">
                    <p class="timeframe-option" data-time="Not Ready, still Planning" style="cursor: pointer; padding-top: 50px; margin: 10px 0; border: 2px solid #ddd; border-radius: 8px; transition: all 0.3s;">Not Ready, still Planning</p>
                </div>
                <button type="submit" id="submitBtn">Begin your Journey</button><br>
                <span>Join the moving train and make your business reach the global standard</span>
            </form>
        </section>

        <script>
            document.addEventListener('DOMContentLoaded', () => {
                const timeframeOptions = document.querySelectorAll('.timeframe-option');
                const radioInputs = document.querySelectorAll('input[name="timeframe"]');
                
                // Add click event listeners to each timeframe paragraph
                timeframeOptions.forEach((option, index) => {
                    option.addEventListener('click', () => {
                        // Check the corresponding radio button
                        radioInputs[index].checked = true;
                        
                        // Remove previous selection styling
                        timeframeOptions.forEach(p => {
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
