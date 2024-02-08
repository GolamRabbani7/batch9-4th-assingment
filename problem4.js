
function password(obj) {
    if (obj.birthYear === undefined || obj.birthYear.toString().length <= 3) {
        return 'invalid'
    }
    const length = [obj.birthYear.toString().length]
    console.log(length)

    const site = obj.siteName;
    let sightName = site.charAt(0).toUpperCase() + site.slice(1)

    const password = sightName + "#" + obj.name + "@" + obj.birthYear

    return password;
}
// complited