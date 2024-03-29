// Copyright (c) 2023, RC and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["SO Based Customer Ledger"] = {
	"filters": [
		{
			"fieldname":"company",
			"label": __("Company"),
			"fieldtype": "Link",
			"options": "Company",
			"default":	frappe.user_defaults.company,
			"reqd": 1
		},
		{
			"fieldname":"from_date",
			"label": __("From Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.add_months(frappe.datetime.get_today(), -1),
			"reqd": 1,
			"width": "60px"
		},
		{
			"fieldname":"to_date",
			"label": __("To Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1,
			"width": "60px"
		},
		{
			"fieldname":"customer",
			"label": __("Customer"),
			"fieldtype": "Link",
			"options": "Customer",
			"reqd": 1,
			on_change: function(query_report) {
				let customer = query_report.get_values().customer;
				if(customer) {
					frappe.db.get_value('Customer', customer, "customer_name", function(value) {
						frappe.query_report.set_filter_value("customer_name", value.customer_name);
					});
				} else {
					frappe.query_report.set_filter_value("customer_name", "");
				}
			}
		},
		{
			"fieldname":"customer_name",
			"label": __("Customer Name"),
			"fieldtype": "Data",
			"read_only": 1
		}
	]
};
