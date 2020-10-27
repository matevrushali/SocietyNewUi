import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'access-control',
        short_label: 'AC',
        name: 'Access Control',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'facility_manager',
            name: 'Facility Manager'
          },
          {
            state: 'account_executive',
            name: 'Account Executive'
          },
          {
            state: 'account_manager',
            name: 'Account Manager'
          },
          {
            state: 'helpdesk_executive',
            name: 'Helpdesk Executive'
          },
          {
            state:'test',
            name:'TestForms'
          },
          {
            state: 'auditor',
            name: 'Auditor'
          },
        ]
      },
      {
        state: 'helpdesk',
        short_label: 'HD',
        name: 'Help Desk',
        type: 'link',
        icon: 'ti-help'
      },
      {
        state: 'calender',
        short_label: 'HD',
        name: 'Calender',
        type: 'sub',
        icon: 'ti-calendar',
        children: [
          {
            state: 'manage_society',
            name: 'Calender'
          },
          {
            state: 'amenities',
            name: 'Ameneties'
          },
           {
            state: 'amenities_booking',
            name: 'Bookings'
          },
          {
            state: 'membership_entity',
            name: 'Membership Entity'
          },
          {
            state: 'membership',
            name: 'Membership'
          },
        ]
      },
      {
        state: 'residents',
        short_label: 'HD',
        name: 'Residents',
        type: 'sub',
        icon: 'ti-user',
        children: [
          {
            state: 'board_committee_list',
            name: 'Board/Committee'
          },
          {
            state: 'upload-gallary',
            name: 'Albums'
          },
          {
            state: 'resident_vehicle_list',
            name: 'Resident Vehicle'
          },
          {
            state: 'parking_list',
            name: 'Parking Manager'
          },
        ]
      },
      {
        state: 'helpdesk',
        short_label: 'HD',
        name: 'Reports',
        type: 'sub',
        icon: 'ti-stats-up',
        children: [
          {
            state: 'manage_society',
            name: 'Bye Laws Register'
          },
          {
            state: 'manage_society',
            name: 'Import Registers'
          },
        ]
      },
      {
        state: 'society',
        short_label: 'HD',
        name: 'Manage Society',
        type: 'sub',
        icon: 'ti-home',
        children: [
          {
            state: 'manage_society',
            name: 'Edit Society Info'
          },
          {
            state: 'escalation_matrix',
            name: 'Escalation Matrix'
          },
          {
            state: 'notice_manager',
            name: 'Notice Manager'
          },
          {
            state: 'change_request',
            name: 'Change Request'
          },
          {
            state: 'resident_manager',
            name: 'Resident Manager'
          },
          {
            state: 'unit_manager',
            name: 'Unit Manager'
          },
          {
            state: 'changeOwnership',
            name: 'Change Onwership'
          },
          {
            state: 'tenant_movement',
            name: 'Tenant Movement'
          },
          {
            state: 'notice_manager',
            name: 'Move Tracker'
          },
          {
            state: 'notice_manager',
            name: 'Token Manager'
          },
          {
            state: 'staff_manager',
            name: 'Staff Manager'
          },
          {
            state: 'notice_manager',
            name: 'Payment Reminder'
          },
          {
            state: 'notice_manager',
            name: 'Visitors Tracker'
          },
          {
            state: 'resident_staff_list',
            name: 'Resident Staff Manager'
          },
          
        ]
      },
      {
        state: 'import',
        short_label: 'HD',
        name: 'Import',
        type: 'sub',
        icon: 'ti-import',
        children: [
          {
            state: 'import_resident',
            name: 'Import Residents'
          },
          {
            state: 'import_flats_unit',
            name: 'Import Flats/Units'
          },
          {
            state: 'ledgers_list',
            name: 'Import Tokens'
          },
          {
            state: 'import_parking',
            name: 'Import Parking Slots'
          },
          {
            state: 'ledgers_list',
            name: 'Import Vehicles'
          },
        ]
      },
     
      {
        state: 'ledgers',
        short_label: 'HD',
        name: 'Master',
        type: 'sub',
        icon: 'ti-crown',
        children: [
          {
            state: 'ledgers_list',
            name: 'Groups'
          },
          {
            state: 'ledgers_list',
            name: 'Ledgers'
          },
          {
            state: 'ledgers_list',
            name: 'Display Vouchers'
          },
          {
            state: 'ledgers_list',
            name: 'Link Debtors Ledgers'
          },
          {
            state: 'ledgers_list',
            name: 'Import Tally Masters'
          },
          {
            state: 'ledgers_list',
            name: 'Import Vouchers'
          },
          {
            state: 'ledgers_list',
            name: 'Import Ledgers'
          },
          {
            state: 'ledgers_list',
            name: 'Link Tally Ledgers'
          },
        ]
      },
      {
        state: 'billing_heads',
        short_label: 'HD',
        name: 'Billing',
        type: 'sub',
        icon: 'ti-receipt',
        children: [
          {
            state: 'billing_heads_list',
            name: 'Billing Heads'
          },
          {
            state: 'generate_bill',
            name: 'Generate Bills'
          },
          {
            state: 'adhoc_generate_bill',
            name: 'Generate Adhoc Heads'
          },
          {
            state: 'billing_heads_list',
            name: 'Send Bill Emails'
          },
          {
            state: 'current_outstandings',
            name: 'Current Outstanding'
          },
          {
            state: 'post_bill_list',
            name: 'Post Bills'
          },
          {
            state: 'billing_note',
            name: 'Billing Note'
          },
        
          {
            state: 'billing_register',
            name: 'Bill Register'
          },
          {
            state: 'show_bills',
            name: 'Reciept Entry'
          },
          {
            state: 'billing_heads_list',
            name: 'Meter Reading'
          },
          {
            state: 'billing_heads_list',
            name: 'Import Payments'
          },
          {
            state: 'billing_heads_list',
            name: 'Bill Adjustments'
          },
          {
            state: 'billing_heads_list',
            name: 'Deferement List'
          },
        
        ]
      },
      {
        state: 'reports',
        short_label: 'HD',
        name: 'Reports',
        type: 'sub',
        icon: 'ti-files',
        children: [
          {
            state: 'cash_book',
            name: 'Cash Book'
          },
          {
            state: 'bank_book',
            name: 'Bank Book'
          },
          {
            state: 'journal_book',
            name: 'Journal Book'
          },
          {
            state: 'billing_heads_list',
            name: 'Interest Report'
          },
          {
            state: 'general_ledgers',
            name: 'General Ledgers'
          },
          {
            state: 'member_ledgers',
            name: 'Members Ledgers'
          },
          {
            state: 'trial_balance',
            name: 'Trial Balance'
          },
          {
            state: 'profit_loss_account',
            name: 'Profit & Loss Account'
          },
          {
            state: 'balance_sheet',
            name: 'Balance Sheet'
          },
          {
            state: 'billing_heads_list',
            name: 'Pay Register'
          },
          {
            state: 'billing_heads_list',
            name: 'Income Expenses'
          },
          {
            state: 'billing_heads_list',
            name: 'TDS Reports'
          },
          {
            state: 'billing_heads_list',
            name: 'Day Book'
          },
          {
            state: 'billing_heads_list',
            name: 'GST Report'
          },
          {
            state: 'billing_heads_list',
            name: 'Adjustment Register'
          },
          {
            state: 'billing_heads_list',
            name: 'MIS Report Datewise'
          },
        ]
      },
      {
        state: 'transaction',
        short_label: 'HD',
        name: 'Transaction',
        type: 'sub',
        icon: 'ti-book',
        children: [
          {
            state: 'voucher_entry_list',
            name: 'Voucher Entry'
          },
        {
          state:'cheque_status_list',
          name:'Update Cheque Status'
        },
        {
          state:'cheque_status_list',
          name:'Bank Reconciliation'
        },
        {
          state:'cheque_status_list',
          name:'Credit/Debit Notes'
        },
        {
          state:'cheque_status_list',
          name:'Add Contra'
        },
        {
          state:'cheque_status_list',
          name:'Deposite Slip'
        }
      
      ]
      },
      {
        state: 'vendors',
        short_label: 'HD',
        name: 'Vendors',
        type: 'sub',
        icon: 'ti-face-smile',
        children: [
          {
            state: 'new_vendors_list',
            name: 'New Vendor'
          },
          {
            state: 'manage_vendors',
            name: 'Manage Vendors'
          },
          {
            state: 'add_vendors_bill',
            name: 'Add Vendor Bill'
          },
          {
            state: 'voucher_entry_list',
            name: 'Make Payment'
          },
          {
            state: 'voucher_entry_list',
            name: 'Payment History'
          },
        ]
      },
      {
        state: 'helpdesk',
        short_label: 'HD',
        name: 'Tools',
        type: 'link',
        icon: 'ti-settings'
      },
    ],
  },

];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
