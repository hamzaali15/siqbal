// Copyright (c) 2016, RC and contributors
// For license information, please see license.txt
/* eslint-disable */


frappe.query_reports["Sales Summary By Salesman"] = {
	"filters": [
		{
			"fieldname":"company",
			"label": __("Company"),
			"fieldtype": "Link",
			"options":"Company",
			"default":frappe.user_defaults.company,
			"reqd": 1
		},
		{
			"fieldname":"fdate",
			"label": __("From Date"),
			"fieldtype": "Date",
			"default": get_today(),
			"reqd": 1
		},
		{
			"fieldname":"tdate",
			"label": __("To Date"),
			"fieldtype": "Date",
			"default": get_today(),
			"reqd": 1
		}
	]
}
