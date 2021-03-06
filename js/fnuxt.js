﻿function fnuWord(w) {
	var vow = "";
	var con = "";
	for (var i = 0; i < w.length; i++) {
		var l = w.charAt(i);
		if (isVow(l)) {vow  = vow+l;} else {con = con+l;}
	}
	return con+vow;
}

function fnuText(t) {
	var words = t.split(/([\s+|'|,|\.|!|\?|\-|\\|\/|\|])/);
	for (var i = 0; i < words.length; i++) {
		var w = words[i];
		if (/^[a-zA-Z0-9]*$/.test(w)) {words[i] = fnuWord(w);}
	}
	return (words.join(""));
}

function isVow(ch) {
	var accents = "aeiouyAEIOUYâêîôûÂÊÎÔÛàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝäëïöüÿÄËÏÖÜŸØøÆæåÅÅÃÕãõĀāĒēĂăĔĕĨĩĬĭŎŏŐőŒœŨũŬŭŮůŰűŶŷǾǿǼǽȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȔȕȖȗΑΕΗΙΟΥΩαεηιουωАЕИОУЭЮЯаеиоуэюяӔӕ";
	return accents.indexOf(ch) !== -1;
}

$("#fnuxtTitle").on("mouseover", function(e){$("#fnuxtTitle").html("Fnxtu");});
$("#fnuxtTitle").on("mouseout", function(e){$("#fnuxtTitle").html("Fnuxt");});
$("#baseText").on("change", function(e){$("#fnuText").html(fnuText($("#baseText").val()));});
$("#baseText").on("keyup", function(e){$("#fnuText").html(fnuText($("#baseText").val()));});