// -*- coding: utf-8 -*-
// Copyright (c) 2020, RC and contributors
// For license information, please see license.txt

frappe.ui.form.on('Sales Order Summary', {
	refresh: function(frm) {
		frm.disable_save();
		frm.page.clear_indicator();

	},
	sales_order: function(frm) {
		if (frm.doc.sales_order) {
			frm.events.get_related_documents(frm);
		}
	},
	reload_btn: function(frm) {
		if (frm.doc.sales_order) {
			frm.events.get_related_documents(frm);
		}
	},
	get_related_documents: function(frm) {
		frappe.call({
			method: "siqbal.siqbal.doctype.sales_order_summary.sales_order_summary.get_related_documents",
			args: {
				doctype: "Sales Order",
				docname: frm.doc.sales_order
			},
			freeze: true,
			callback: function(r) {
				if (r.message) {
					frm.events.render_documents(frm, r.message);
				}
			}
		});
	},
	render_documents: function(frm, doc_details) {
		$(frm.fields_dict.document_details.wrapper).empty();
		var documents_details = $(frappe.render_template('sales_order_summary', {
			frm: frm,
			doc_details: doc_details,
			sales_order_details: doc_details["Sales Order"],
			material_request_details: doc_details["Material Request"],
			stock_entry_details: doc_details["Stock Entry"],
			delivery_note_details: doc_details["Delivery Note"],
			sales_invoice_details: doc_details["Sales Invoice"],
			sales_return_details: doc_details["Sales Return"],
			paymeny_entry_details: doc_details["Payment Entry"]
		}));
		documents_details.appendTo(frm.fields_dict.document_details.wrapper);
	}
});
