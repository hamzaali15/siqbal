// frappe.ui.form.on("Landed Cost Voucher", "onload", function (frm, cdt, cdn) {
// 	var ret_obj = setseries(frm.doc.company);
// 	frm.set_value("naming_series", ret_obj.series);
// });

frappe.ui.form.on("Landed Cost Voucher", "validate", function (frm, cdt, cdn) {
	if (frm.doc.unallocated_amount > 0 && frm.doc.party == "LOADER BIKE") {
		msgprint("Excess Payment Cannot be given for this Supplier");
		frappe.validated = false;
		return;
	}
	// var ret_obj = setseries(frm.doc.company);
	// cur_frm.set_value("naming_series", ret_obj.series);
});

// frappe.ui.form.on('Landed Cost Voucher', {
// 	company: function (frm) {
// 		var ret_obj = setseries(frm.doc.company);
// 		frm.set_value("naming_series", ret_obj.series);
// 	}
// });

// function setseries(company) {
// 	var ret_obj = { twarehouse: "", series: "" };
// 	switch (company) {
// 		case "SIqbal Tiles": ret_obj.series = "TT-LCV-"; break;
// 	}
// 	return ret_obj;
// }

