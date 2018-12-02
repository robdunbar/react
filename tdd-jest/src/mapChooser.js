function mapChooser(locationName) {
    if (locationName) {
        return `${locationName}.jpg`;
    }
    
    return "default.jpg";
}

export default mapChooser;