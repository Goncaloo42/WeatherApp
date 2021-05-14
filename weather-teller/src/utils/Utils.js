export const toTextualDescription = (degree) => {
    if (degree > 337.5) return 'N';
    if (degree > 292.5) return 'NW';
    if (degree > 247.5) return 'W';
    if (degree > 202.5) return 'SW';
    if (degree > 157.5) return 'S';
    if (degree > 122.5) return 'SE';
    if (degree > 67.5) return 'E';
    if (degree > 22.5) { return 'NE'; }
    return '';
}

export const getPosition = () => {
    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 5000
        })
    );
}

export const buildPath = (url, params) => {
    const path = new URL(url)
    params.forEach(param => {
        path.searchParams.set(param.key, param.value)
    });
    return path
}