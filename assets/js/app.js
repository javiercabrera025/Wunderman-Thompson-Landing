$('.slider').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
});

var dptosLocs = {
    Artigas: [
        "Artigas", "Bella Unión"
    ],
    Canelones: [
        "Canelones", "Santa Lucía"
    ],
    Montevideo: ["Montevideo"],
    Salto: ["Salto", "Daymán", "Arapey"]
};
function limpiarError(e, t) {
    e.classList.remove("error"),
    document.getElementById(t).style.display = "none"
}
function Enviar() {
    if (!validarDatos()) 
        return !1
    
}
function validarDatos() {
    var e = !0,
        t = document.getElementById("nombre"),
        n = document.getElementById("apellido"),
        i = document.getElementById("email"),
        o = document.getElementById("departamento"),
        r = document.getElementById("localidad"),
        s = document.getElementById("condiciones"),
        a = document.getElementById("ci");
    return 0 == t.value.length ? (t.classList.add("error"), document.getElementById("error-nombre").style.display = "block", document.getElementById("error-nombre").innerHTML = "Debe completar el campo.", e =! 1) : t.value.length < 2 && (t.classList.add("error"), document.getElementById("error-nombre").style.display = "block", document.getElementById("error-nombre").innerHTML = "El campo debe contener al menos 2 caracteres.", e =! 1),
    0 == n.value.length ? (n.classList.add("error"), document.getElementById("error-apellido").style.display = "block", document.getElementById("error-apellido").innerHTML = "Debe completar el campo.", e =! 1) : n.value.length < 2 && (n.classList.add("error"), document.getElementById("error-apellido").style.display = "block", document.getElementById("error-apellido").innerHTML = "El campo debe contener al menos 2 caracteres.", e =! 1),
    0 == i.value.length ? (i.classList.add("error"), document.getElementById("error-email").style.display = "block", document.getElementById("error-email").innerHTML = "Debe ingresar un email", e =! 1) : /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(i.value) || (i.classList.add("error"), document.getElementById("error-email").style.display = "block", document.getElementById("error-email").innerHTML = "El email no es correcto.", e =! 1),
    0 == a.value.length ? (a.classList.add("error"), document.getElementById("error-ci").style.display = "block", document.getElementById("error-ci").innerHTML = "Debe completar el campo.", e =! 1) : validarCedula(a.value) || (a.classList.add("error"), document.getElementById("error-ci").style.display = "block", document.getElementById("error-ci").innerHTML = "Cedúla incorrecta.", e =! 1),
    0 == o.selectedIndex && (o.classList.add("error"), document.getElementById("error-departamento").style.display = "block", document.getElementById("error-departamento").innerHTML = "Debe seleccionar un departamento.", e =! 1),
    0 == r.selectedIndex && (r.classList.add("error"), document.getElementById("error-localidad").style.display = "block", document.getElementById("error-localidad").innerHTML = "Debe seleccionar una localidad.", e =! 1),
    s.checked || (s.classList.add("error"), document.getElementById("error-bases").style.display = "block", document.getElementById("error-bases").innerHTML = "Debe aceptar las bases y condiciones.", e =! 1),
    e
}
function cargarDepartamentos() {
    var e,
        t = document.getElementById("departamento");
    for (var n in dptosLocs) 
        (e = document.createElement("option")).text = n,
        t.appendChild(e)
    
}
function cargarLocalidad(e) {
    var t,
        n = document.getElementById("localidad");
    if (removeOptions(n), (t = document.createElement("option")).text = "Seleccione una localidad", t.value = "", n.appendChild(t), dptosLocs.hasOwnProperty(e)) 
        for (var i = 0; i < dptosLocs[e].length; i++) 
            (t = document.createElement("option")).text = dptosLocs[e][i],
            n.appendChild(t)
        
    
}
function removeOptions(e) {
    var t;
    for (t = e.options.length - 1; t >= 0; t--) 
        e.remove(t)
    
}
function validarCedula(e) {
    for (var t = new Array(2, 9, 8, 7, 6, 3, 4, 1), n = 0, i = parseInt(t.length - e.length), o = e.length - 1; o > -1; o--) {
        var r = e.substring(o, o + 1);
        n += parseInt(r) * t[o + i]
    }
    var s = !1;
    return n % 10 == 0 && (s =! 0),
    s
}
