const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
    return layout({
        content: `
        <section class="scheldule3" id="form1">
            <h2>Let us know you better</h2>
            <div class="progress-bar">
                <div class="progress"></div>
            </div>
            <p>Input your personal details</p>
            <form method="POST" action="/scheldule3">
                <div class="column">
                    <div class="form-group">
                        <input type="text" placeholder="Input your Full Name" name="fullName" /><br>
                        <p style="color: red; font-size: 12px; margin:unset;">${getError(errors, 'fullName')}</p>
                    </div> 
                    
                    <div class="form-group">
                        <input type="tel" placeholder="Phone Number (whatsapp)" name="contact" /><br>
                        <p style="color: red; font-size: 12px; margin: unset;">${getError(errors, 'contact')}</p>
                    </div>  
        
                    <div class="form-group">
                        <input type="email" placeholder="Input E-mail Address" name="email" /><br>
                        <p style="color: red; font-size: 12px; margin: unset;">${getError(errors, 'email')}</p>
                    </div>       
                </div>    
                <button type="submit">Submit</button><br>
                <span>Join the moving train and make your business reach the global standard</span>
            </form>
        </section> 
     ` 
    })
};