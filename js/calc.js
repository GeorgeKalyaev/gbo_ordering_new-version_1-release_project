$(document).ready(function() {

    function gap(str, separator) {
        if (str.toString().match(/\./)) {
            str = str.toFixed(2).toString();
        }
        if (isNaN(parseFloat(str))) {
            str = 0;
        }
        str = str.toString();

        return str.replace(/\d(?=(?:\d{3})+\b)/g, "$&" + (separator || ' '));
    }

    function calc() {
        var probeg = $('#probeg').val();
        var rashod = $('#rashod').val();
        var stoimost = $('#stoimost').val();

        if (isNaN(parseFloat(probeg))) {
            probeg = 0;
        }
        if (isNaN(parseFloat(rashod))) {
            rashod = 0;
        }
        if (isNaN(parseFloat(stoimost))) {
            stoimost = 0;
        }

        var gaz = 18;

        if (probeg > 0 && rashod > 0 && stoimost > 0) {
            var zbenz = rashod / 100 * probeg * stoimost;
            var zgaz = rashod * 1 / 100 * probeg * gaz;
            var ekonom = zbenz - zgaz;
        } else {
            var zbenz = 0;
            var zgaz = 0;
            var ekonom = 0;
        }

        $("#zbenz").val(gap(zbenz, ' '));
        $("#zgaz").val(gap(zgaz, ' '));
        $("#ekonom").val(gap(ekonom, ' '));
        return true;
    }

    $('#probeg').keyup(function() {
        calc();
    });
    $('#rashod').keyup(function() {
        calc();
    });
    $('#stoimost').keyup(function() {
        calc();
    });
    calc();

});