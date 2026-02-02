module.exports = ({ content })  => {
return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AIMPEXX</title> 
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
        <link href="/css/home.css" rel="stylesheet">
        <link href="/css/header.css" rel="stylesheet">
        <link href="/css/started.css" rel="stylesheet">
        <link href="/css/shipping.css" rel="stylesheet">
        <link href="/css/footer.css" rel="stylesheet">
        <link href="/css/source.css" rel="stylesheet">
        <link href="/css/manufacture.css" rel="stylesheet">
        <link href="/css/scheldule.css" rel="stylesheet">
        <link href="/css/quality.css" rel="stylesheet">
        <link href="/css/payment.css" rel="stylesheet">
        <link href="/css/contact.css" rel="stylesheet">
        <link href="/css/shippingcost.css" rel="stylesheet">
        <link href="/css/track.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
    </head>
    <body>
        <header class="header">
            <div class="logo">
                <img src="/images/logo.png" />
            </div>

            <nav>
                <ul>
                    <li class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">Company▾</a>
                        <div class="dropdown-content">
                            <a href="/aboutus">About Us</a>
                            <a href="/aboutus">Why Choose Us</a>
                            <a href="/terms">Terms & Conditions</a>
                        </div>
                    </li>

                    <li class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">Services▾</a>
                        <div class="dropdown-content">
                            <a href="/sourcing">Sourcing</a>
                            <a href="/payment">Payment to suppliers</a>
                            <a href="/quality">Quality Check(Inspection)</a>
                            <a href="/manufacture">Manufacturing</a>
                            <a href="/shipping">Shipping</a>
                            <a href="/privacy">Privacy Policy</a>
                        </div>
                    </li>

                    <li class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">Contact▾</a>
                        <div class="dropdown-content">
                            <a href="/">21 Kodesho Street, Computer Village,Lagos State</a>
                            <a href="/">+234 808 333 9380</a>
                            <a href="/">aimpexx</a>
                            <a href="/">aimpexxworldwide@gmail.com</a>
                        </div>
                    </li>
                </ul>
            </nav>
            <button id="track">Track Shipment</button>
        </header>
        ${content}

        <script>
            document.addEventListener('DOMContentLoaded', () => {
            const btn = document.getElementById('track');
            if (btn) {
                btn.addEventListener('click', () => {
                window.location.href = '/trackShipment';
                });
            }
            });
        </script>
    </body>
    </html>
    `;
}