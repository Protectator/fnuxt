function fnuWord(w) {
	var vow = "";
	var con = "";
	for (var i = 0; i < w.length; i++) {
		var l = w.charAt(i);
		if (isVow(l)) {vow  = vow+l;} else {con = con+l;}
	}
	return con+vow;
}

function fnuText(t) {
	var words = t.split(/(\s+)/);
	for (var i = 0; i < w.length; i++) {
		var w = words[i];
		if (/^[a-zA-Z]*$/.test(w)) {w = fnuWord(w)}
	}
}

function isVow(ch) {
	return /[aeiouyAEIOUYâêîôûÂÊÎÔÛàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝäëïöüÿÄËÏÖÜŸØøÆæåÅÅÃÕãõĀāĒēĂăĔĕĨĩĬĭŎŏŐőŒœŨũŬŭŮůŰűŶŷǾǿǼǽȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȔȕȖȗΑΕΗΙΟΥΩαεηιουωАЕИОУЭЮЯаеиоуэюяӔӕ]/.test(ch);
}