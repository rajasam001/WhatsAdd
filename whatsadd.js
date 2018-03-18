const baseUrl = "https://api.whatsapp.com/send?phone=";

function whatsadd(phoneNumber, newTab) {
    whatsappUrl = baseUrl + phoneNumber;

    if (newTab == true) {
        var whatsappTab = window.open(whatsappUrl, "_blank");
        whatsappTab.focus;
    } else {
        window.location.href = whatsappUrl;
    }    
}