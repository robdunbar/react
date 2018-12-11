function mapChooser(locationName) {
    if (locationName) {
        return `images/${locationName}.png`;
    }
    
    return "images/None.png";
}

export default mapChooser;