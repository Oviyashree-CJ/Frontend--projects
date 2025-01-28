function validate() {
    var n = document.getElementById('name').value;
    var e = document.getElementById('email').value;
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';

    if (n === '') {
        document.getElementById('nameError').innerHTML = 'Enter the name. Name is required';
        return false;
    }

    if (e === '') {
        document.getElementById('emailError').innerHTML = 'Email id is not entered';
        return false;
    }

    var eRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!eRegex.test(e)) {
        document.getElementById('emailError').innerHTML = 'Email id is not valid';
        return false;
    }

    return true;

}
