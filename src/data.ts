export const example7 = {
    "source": {
        "type": "method",
        "method": "handleCreateAction"
    },
    "forcefill": {
        "groupuid": "#SESS_GROUP_NAME#",
        "guid": "#SESS_GUID#"
    },
    "actions": {
        "newContact": {
            "icon": "",
            "label": "Add Client/Company",
            "class": "btn btn-warning pull-left"
        }
    },
    "buttons": {
        "markAsOrder": {
            "label": "Mark As Order",
            "class": "btnGreen",
            "icon": "fa fa-check",
            "float": "left",
            "policy": "leadbook.update.access"
        },
        "markAsLost": {
            "label": "Mark As Lost",
            "icon": "fa fa-times",
            "class": "btn btn-primary",
            "policy": "leadbook.update.access"
        },
        "markAsJunk": {
            "label": "Mark As Junk",
            "icon": "fa fa-times",
            "class": "btn btn-warning markAsJunk",
            "policy": "leadbook.update.access"
        },
        "markAsNext": {
            "label": "Next",
            "icon": "fa fa-angle-double-right",
            "class": "btn btn-warning",
            "policy": "leadbook.update.access"
        }
    },
    "gotolink": "infoview/lead.main/{hashid}?",
    "script": "lead",
    "fields": {
        "id": {
            "label": "Lead ID",
            "group": "Lead Details",
            "nodb": true
        },
        "title": {
            "label": "Lead Title / For",
            "group": "Lead Details",
            "required": true
        },
        "broker_id": {
            "label": "Reference From Partner",
            "type": "dataSelectorFromTable",
            "table": "profiletbl_organisation",
            "columns": "organization as title,id as value",
            "group": "Lead Details",
            "no-option": "Select Reference From Partner"
        },
        "lead_date": {
            "label": "Lead Date",
            "group": "Lead Details",
            "type": "date",
            "required": true
        },
        "lead_year": {
            "label": "Lead Year",
            "group": "Lead Details",
            "type": "dataSelector",
            "groupid": "year_list",
            "required": true,
            "default": "#SESS_CURRENT_YEAR#"
        },
        "net_amount": {
            "label": "Net Amount",
            "group": "Lead Details",
            "type": "text",
            "required": true
        },
        "lead_value": {
            "label": "Lead Value",
            "group": "Lead Details",
            "type": "Currency",
            "required": true,
            "noview": false
        },
        "lead_priority": {
            "label": "Lead Priority",
            "group": "Lead Details",
            "type": "dataSelector",
            "groupid": "lead_priority",
            "required": true
        },
        "lead_source": {
            "label": "Lead Source",
            "group": "Lead Details",
            "type": "dataSelector",
            "groupid": "leads_source",
            "required": true
        },
        "lead_status": {
            "label": "Lead Status",
            "group": "Lead Details",
            "type": "dataSelector",
            "groupid": "lead_status",
            "no-option": "Select Lead Status",
            "required": true
        },
        "lead_type": {
            "label": "Lead Type",
            "group": "Lead Details",
            "type": "dataSelector",
            "groupid": "lead_type",
            "suggest": true,
            "required": true
        },
        "enquiry_type": {
            "label": "Enquiry Type",
            "group": "Lead Details",
            "type": "dataSelector",
            "groupid": "lead_enquiry_type",
            "required": true
        },
        "marketting_source": {
            "label": "Marketing Source",
            "group": "Lead Details",
            "type": "dataSelector",
            "groupid": "lead_marketing_source",
            "no-option": "Select Marketing Source",
            "required": true
        },
        "marketting_campaign": {
            "label": "Marketing Campaign",
            "group": "Lead Details",
            "required": true
        },
        "enquiry_product_descs": {
            "label": "Enquiry Details",
            "group": "Lead Details",
            "type": "textarea",
            "maxlength": 255,
            "required": true,
            "width": 12
        },
        "enquiry_due": {
            "label": "Delivery Due On",
            "group": "More",
            "type": "date"
        },
        "created_on": {
            "label": "Created On",
            "group": "Lead Details",
            "type": "hidden",
            "hidden": true
        },
        "blocked": {
            "label": "Blocked",
            "group": "Lead Details",
            "type": "select",
            "vmode": "view",
            "required": true,
            "options": {
                "": false,
                "true": "True",
                "false": "False"
            }
        },
        "created_by": {
            "label": "Created By",
            "group": "Lead Details",
            "type": "hidden",
            "hidden": true
        },
        "edited_by": {
            "label": "Updated By",
            "group": "Lead Details",
            "type": "hidden",
            "hidden": true
        },
        "edited_on": {
            "label": "Updated On",
            "group": "Lead Details",
            "type": "hidden",
            "hidden": true
        },
        "manager": {
            "label": "Manager",
            "group": "More",
            "type": "dataSelectorFromTable",
            "table": "staff_tbl",
            "columns": "concat(full_name,' [',loginid,']') as title,loginid as value",
            "where": {
                "blocked": "false",
                "status in ('active','under_notice','probationary')": "RAW",
                "loginid <> ''": "RAW"
            }
        },
        "open_by": {
            "label": "Open By",
            "group": "More",
            "type": "dataSelectorFromTable",
            "table": "staff_tbl",
            "columns": "concat(full_name,' [',loginid,']') as title,loginid as value",
            "where": {
                "blocked": "false",
                "status in ('active','under_notice','probationary')": "RAW",
                "loginid <> ''": "RAW"
            },
            "required": true
        },
        "assigned_to": {
            "label": "Assigned To",
            "group": "More",
            "type": "dataSelectorFromTable",
            "table": "staff_tbl",
            "columns": "concat(full_name,' [',loginid,']') as title,loginid as value",
            "where": {
                "blocked": "false",
                "status in ('active','under_notice','probationary')": "RAW",
                "loginid <> ''": "RAW"
            },
            "required": true
        },
        "tags": {
            "label": "Tags",
            "group": "More",
            "type": "tags"
        },
        "remarks": {
            "label": "Remarks",
            "group": "More",
            "width": 12,
            "maxlength": 255,
            "type": "textarea"
        }
    },
    "infoview": {
        "script": "lead",
        "groups": {
            "follow_up": {
                "label": "Follow Up",
                "type": "module",
                "policy": "leadbook.view.access",
                "src": "infoviewTable",
                "vmode": "view",
                "config": {
                    "uimode": "grid",
                    "type": "sql",
                    "table": "lead_followup",
                    "cols": "lead_followup.id,lead_followup.follow_up_date,lead_followup.follow_up_time,lead_followup.remark",
                    "where": "md5(lead_followup.lead_id)='#refid#'",
                    "orderby": "id desc"
                },
                "width": 12
            },
            "actions": {
                "label": "Actions",
                "type": "module",
                "src": "infoviewTable",
                "policy": "leadbook.view.access",
                "vmode": "edit",
                "config": {
                    "type": "sql",
                    "uimode": "grid",
                    "policy_create": "leadbook.create.access",
                    "policy_delete": "leadbook.delete.access",
                    "policy_update": "leadbook.update.access",
                    "table": "lead_actions",
                    "cols": "lead_actions.id,lead_actions.type,lead_actions.date,lead_actions.msg,lead_actions.start_time,lead_actions.end_time,lead_actions.created_by,lead_actions.created_on",
                    "where": "md5(lead_actions.lead_id)='#refid#'",
                    "orderby": "lead_actions.edited_on DESC",
                    "colkey": "lead_id",
                    "form": {
                        "source": {
                            "type": "sql",
                            "table": "lead_actions",
                            "where": [
                                "md5(id)"
                            ]
                        },
                        "forcefill": {
                            "groupuid": "#SESS_GROUP_NAME#",
                            "lead_id": "#REFID#"
                        },
                        "fields": {
                            "type": {
                                "label": "Type",
                                "type": "dataSelector",
                                "groupid": "lead_action_type",
                                "required": true
                            },
                            "date": {
                                "label": "Date",
                                "type": "date",
                                "autocomplete": "off",
                                "required": true
                            },
                            "start_time": {
                                "label": "Start Time",
                                "type": "time",
                                "required": true
                            },
                            "end_time": {
                                "label": "End Time",
                                "type": "time",
                                "required": true
                            },
                            "msg": {
                                "label": "Message",
                                "type": "text",
                                "required": true
                            }
                        }
                    }
                },
                "width": 12
            },
            "customer": {
                "label": "Customer",
                "type": "module",
                "src": "infoviewTable",
                "policy": "leadbook.view.access",
                "vmode": "view",
                "config": {
                    "type": "sql",
                    "uimode": "single",
                    "table": "lead_tbl,profiletbl",
                    "cols": "profiletbl.id,profiletbl.full_name as name,profiletbl.email1 as Email,profiletbl.mobile,profiletbl.nationality,profiletbl.pan,profiletbl.gst",
                    "where": "lead_tbl.customer_id = profiletbl.id and md5(lead_tbl.id)='#refid#'",
                    "orderby": "lead_tbl.edited_on DESC"
                },
                "width": 12
            },
            "products": {
                "label": "Products",
                "type": "module",
                "src": "infoviewTable",
                "policy": "leadbook.view.access",
                "vmode": "edit",
                "config": {
                    "type": "sql",
                    "policy_create": "leadbook.create.access",
                    "policy_delete": "leadbook.delete.access",
                    "policy_update": "leadbook.update.access",
                    "uimode": "grid",
                    "table": "lead_products,service_tbl",
                    "cols": "lead_products.id,lead_products.product_id,service_tbl.service_name as Product_Name,lead_products.product_qty,lead_products.product_price",
                    "where": "service_tbl.id=lead_products.product_id AND md5(lead_id)='#refid#'",
                    "orderby": "lead_products.edited_on DESC",
                    "colkey": "lead_products.lead_id",
                    "hidden": [
                        "product_id"
                    ],
                    "form": {
                        "source": {
                            "type": "sql",
                            "table": "lead_products",
                            "where": [
                                "md5(id)"
                            ]
                        },
                        "forcefill": {
                            "groupuid": "#SESS_GROUP_NAME#",
                            "guid": "#SESS_GUID#",
                            "created_by": "#SESS_USER_ID#",
                            "lead_id": "#REFID#"
                        },
                        "fields": {
                            "product_id": {
                                "label": "Product Name",
                                "type": "dataSelectorFromTable",
                                "table": "service_tbl",
                                "columns": "concat(service_name,' [',service_no,']') as title,id as value",
                                "where": {
                                    "(service_type <> 'asset')": "RAW"
                                },
                                "required": true,
                                "no-option": "Select Product Name",
                                "ajaxchain": {
                                    "target": "product_price",
                                    "src": {
                                        "table": "service_tbl",
                                        "columns": "service_cost as service_cost,service_cost as value",
                                        "where": {
                                            "id": "#refid#"
                                        }
                                    }
                                }
                            },
                            "product_qty": {
                                "label": "Product Quantity",
                                "type": "number",
                                "required": true
                            },
                            "product_price": {
                                "label": "Product Price",
                                "required": true
                            }
                        }
                    }
                },
                "width": 12
            },
            "mom": {
                "label": "Min. Of Meeting",
                "type": "module",
                "policy": "leadbook.view.access",
                "src": "infoviewTable",
                "vmode": "view",
                "config": {
                    "DEBUG": false,
                    "type": "sql",
                    "uimode": "grid",
                    "table": "meetingnotes_tbl",
                    "cols": "meetingnotes_tbl.id,meetingnotes_tbl.title as agenda,meetingnotes_tbl.start_date as meet_date,meetingnotes_tbl.start_time,meetingnotes_tbl.end_time,meetingnotes_tbl.chairperson as chair_person,meetingnotes_tbl.location as venue,meetingnotes_tbl.participants,meetingnotes_tbl.text_discuss",
                    "where": "md5(meetingnotes_tbl.src_id)='#refid#' and meetingnotes_tbl.src_type='lead'",
                    "orderby": "meetingnotes_tbl.start_date DESC",
                    "unilinks": {
                        "title": {
                            "type": "meetingNotes.main",
                            "col": "id"
                        }
                    },
                    "actions": {
                        "forms@meetingNotes.quick/new?src_id=#id#&src_type=lead": {
                            "label": "Quick Meet",
                            "icon": "fa fa-plus"
                        }
                    }
                },
                "width": 12
            },
            "quotation": {
                "label": "Quotation",
                "type": "module",
                "src": "infoviewTable",
                "policy": "leadbook.view.access",
                "vmode": "view",
                "config": {
                    "type": "sql",
                    "uimode": "grid",
                    "DEBUG": false,
                    "table": "quotations_tbl,lead_tbl",
                    "cols": "quotations_tbl.id,quotations_tbl.quo_sequence,quotations_tbl.quotation_no,quotations_tbl.date,quotations_tbl.quotation_type,quotations_tbl.supply_type,quotations_tbl.status,quotations_tbl.total_amount",
                    "where": "quotations_tbl.lead_id=lead_tbl.id AND md5(quotations_tbl.lead_id)='#refid#' ",
                    "orderby": "quotations_tbl.edited_on DESC",
                    "actions": {
                        "createQuotation": {
                            "label": "Create Quotation",
                            "icon": "fa fa-plus"
                        }
                    }
                },
                "width": 12
            },
            "leadpo": {
                "label": "PO",
                "type": "module",
                "src": "infoviewTable",
                "policy": "leadbook.view.access",
                "vmode": "view",
                "config": {
                    "type": "sql",
                    "uimode": "grid",
                    "table": "lead_po",
                    "cols": "lead_po.id,po_no,po_amount,po_start,po_end,po_billing_type,po_inv_template,po_recurrent",
                    "where": "md5(lead_po.lead_id)='#refid#' ",
                    "orderby": "lead_po.po_start DESC",
                    "actions": {
                        "createPO": {
                            "label": "Create PO",
                            "icon": "fa fa-plus"
                        }
                    },
                    "buttons": {
                        "viewPOAttachment": {
                            "icon": "fa fa-paperclip"
                        }
                    }
                },
                "width": 12
            },
            "quick_task": {
                "label": "Quick Task",
                "type": "module",
                "src": "quickTask.task",
                "vmode": "edit",
                "config": {
                    "ref_id": "#id#",
                    "ref_src": "lead"
                },
                "width": 12
            },
            "email": {
                "label": "Email",
                "type": "module",
                "src": "emails.inbox",
                "rule": "profile,#refid#",
                "vmode": "view",
                "width": 12
            },
            "files": {
                "label": "Files",
                "type": "module",
                "src": "docman.docs",
                "policy": "common.allow.access",
                "vmode": "edit",
                "config": {
                    "ref_id": "#refid#",
                    "ref_src": "leads"
                },
                "width": 12
            },
            "comments": {
                "label": "Comments",
                "type": "module",
                "src": "userComments.comments",
                "policy": "common.allow.access",
                "config": {
                    "ref_id": "#refid#",
                    "ref_src": "leads"
                },
                "vmode": "edit",
                "width": 12,
                "hidden": false
            },
            "notes": {
                "label": "Notes",
                "type": "module",
                "src": "notesBoard.notes",
                "rule": "profile,#refid#",
                "policy": "common.allow.access",
                "vmode": "view",
                "width": 12,
                "hidden": true
            },
            "logs": {
                "label": "Logs",
                "type": "module",
                "src": "bizlogger.logs",
                "rule": "profile,#refid#",
                "policy": "common.allow.access",
                "vmode": "view",
                "width": 12,
                "config": {
                    "ref_id": "#refid#",
                    "ref_src": "leads"
                },
                "hidden": true
            },
            "Extras": {
                "label": "Extra",
                "type": "widget",
                "src": "biz_infoview_xtras",
                "policy": "common.allow.access",
                "vmode": "view",
                "width": 12,
                "hidden": true
            }
        }
    }
}