function formatPrice(price: number | undefined): string {
    if (price === undefined) {
        return "۰"; // or you can choose another default value like "۰" or ""
    }
    // Convert number to string with thousand separators (،)
    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "،");
    // Convert English digits to Persian digits
    return formattedPrice.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[+d]);
}

export default formatPrice;
