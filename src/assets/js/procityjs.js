$(document).ready(function () {
  $('#helpdesk').DataTable({
    dom: 'Bfrtip',
    buttons: [
      'copy', {
        extend: 'excel',
        title: 'Helpdesk export'
      }, {
        extend: 'csv',
        title: 'Helpdesk export'
      }, {
        extend: 'pdf',
        title: 'Helpdesk export'
      }, {
        extend: 'print',
        title: 'Helpdesk export'
      }
    ]
  });
  $('#society').DataTable({
    responsive: true,
    dom: 'Bfrtip',
    buttons: [
      'copy', {
        extend: 'excel',
        title: 'Society export'
      }, {
        extend: 'csv',
        title: 'Society export'
      }, {
        extend: 'pdf',
        title: 'Society export'
      }, {
        extend: 'print',
        title: 'Society export'
      }
    ]
  });
  $('#data-table').DataTable({
    responsive: true,
    dom: 'Bfrtip',
    buttons: [
      'copy', {
        extend: 'excel',
        title: ' Escalation Matrix export'
      }, {
        extend: 'csv',
        title: ' Escalation Matrix  export'
      }, {
        extend: 'pdf',
        title: ' Escalation Matrix  export'
      }, {
        extend: 'print',
        title: ' Escalation Matrix  export'
      }
    ]
  });
  $('#noticeManager').DataTable({
    responsive: true,
    dom: 'Bfrtip',
    buttons: [
      'copy', {
        extend: 'excel',
        title: 'Notice Manager export'
      }, {
        extend: 'csv',
        title: 'Notice Manager export'
      }, {
        extend: 'pdf',
        title: 'Notice Manager export'
      }, {
        extend: 'print',
        title: 'Notice Manager export'
      }
    ]
  });
 
  $('#userForm').DataTable({
    responsive: true,
    dom: 'Bfrtip',
    buttons: [
      'copy', {
        extend: 'excel',
        title: 'User export'
      }, {
        extend: 'csv',
        title: 'User export'
      }, {
        extend: 'pdf',
        title: 'User export'
      }, {
        extend: 'print',
        title: 'User export'
      }
    ]
  });
  
  $('#postBill').DataTable({
    responsive: true,
    dom: 'Bfrtip',
    buttons: [
      'copy', {
        extend: 'excel',
        title: 'Post Bill export'
      }, {
        extend: 'csv',
        title: 'Post Bill export'
      }, {
        extend: 'pdf',
        title: 'Post Bill export'
      }, {
        extend: 'print',
        title: 'Post Bill export'
      }
    ]
  });
  $('#residentStaffManager').DataTable({
    dom: 'Bfp',
    buttons: [
      'copy', {
        extend: 'excel',
        title: 'Helpdesk export'
      }, {
        extend: 'csv',
        title: 'Helpdesk export'
      }, {
        extend: 'pdf',
        title: 'Helpdesk export'
      }, {
        extend: 'print',
        title: 'Helpdesk export'
      }
    ]
  });
  // $('#amenities').DataTable({
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Amenities export'
  //     }, {
  //       extend: 'csv',
        
  //       title: 'Amenities export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Amenities export'
  //     }, {
  //       extend: 'print',
  //       title: 'Amenities export'
  //     }
  //   ]
  // });
  // $('#amenitiesBooking').DataTable({
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Amenities Booking export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Amenities Booking export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Amenities Booking export'
  //     }, {
  //       extend: 'print',
  //       title: 'Amenities Booking export'
  //     }
  //   ]
  // });
  // $('#residentVehicle').DataTable({
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Resident Vehicle export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Resident Vehicle export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Resident Vehicle export'
  //     }, {
  //       extend: 'print',
  //       title: 'Resident Vehicle export'
  //     }
  //   ]
  // });
  // $('#parking').DataTable({
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Parking export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Parking export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Parking export'
  //     }, {
  //       extend: 'print',
  //       title: 'Parking export'
  //     }
  //   ]
  // });
  // $('#noticeManager').DataTable({
  //   responsive: true,
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Notice Manager export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Notice Manager export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Notice Manager export'
  //     }, {
  //       extend: 'print',
  //       title: 'Notice Manager export'
  //     }
  //   ]
  // });
  // $('#userForm').DataTable({
  //   responsive: true,
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'User export'
  //     }, {
  //       extend: 'csv',
  //       title: 'User export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'User export'
  //     }, {
  //       extend: 'print',
  //       title: 'User export'
  //     }
  //   ]
  // });
  // $('#occupancy').DataTable({
  //   responsive: true,
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Unit export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Unit export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Unit export'
  //     }, {
  //       extend: 'print',
  //       title: 'Unit export'
  //     }
  //   ]
  // });
  // $('#staffManager').DataTable({
  //   responsive: true,
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Staff Manager export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Staff Manager export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Staff Manager export'
  //     }, {
  //       extend: 'print',
  //       title: 'Staff Manager export'
  //     }
  //   ]
  // });
  // $('#channelPartner').DataTable({
  //   responsive: true,
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Channel Partner export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Channel Partner export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Channel Partner export'
  //     }, {
  //       extend: 'print',
  //       title: 'Channel Partner export'
  //     }
  //   ]
  // });
  // $('#ledger').DataTable({
  //   responsive: true,
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Unit export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Unit export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Unit export'
  //     }, {
  //       extend: 'print',
  //       title: 'Unit export'
  //     }
  //   ]
  // });
  // $('#cashBook').DataTable({
  //   responsive: true,
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Cash Book export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Cash Book export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Cash Book export'
  //     }, {
  //       extend: 'print',
  //       title: 'Cash Book export'
  //     }
  //   ]
  // });
  // $('#bankBook').DataTable({
  //   responsive: true,
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Bank Book export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Bank Book export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Bank Book export'
  //     }, {
  //       extend: 'print',
  //       title: 'Bank Book export'
  //     }
  //   ]
  // });
  // $('#journalBook').DataTable({
  //   responsive: true,
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Journal Book export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Journal Book export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Journal Book export'
  //     }, {
  //       extend: 'print',
  //       title: 'Journal Book export'
  //     }
  //   ]
  // });
  // $('#billingHeads').DataTable({
  //   responsive: true,
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Billing Head export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Billing Head export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Billing Head export'
  //     }, {
  //       extend: 'print',
  //       title: 'Billing Head export'
  //     }
  //   ]
  // });
  // $('#generateBill').DataTable({
  //   responsive: true,
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Generate Bill export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Generate Bill export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Generate Bill export'
  //     }, {
  //       extend: 'print',
  //       title: 'Generate Bill export'
  //     }
  //   ]
  // });
  // $('#vendors').DataTable({
  //   responsive: true,
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Vendors export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Vendors export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Vendors export'
  //     }, {
  //       extend: 'print',
  //       title: 'Vendors export'
  //     }
  //   ]
  // });
  // $('#roleManagement').DataTable({
  //   responsive: true,
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Role Management export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Role Management export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Role Management export'
  //     }, {
  //       extend: 'print',
  //       title: 'Role Management export'
  //     }
  //   ]
  // });
  // $('#voucherEntry').DataTable({
  //   responsive: true,
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Voucher Entry export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Voucher Entry export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Voucher Entry export'
  //     }, {
  //       extend: 'print',
  //       title: 'Voucher Entry export'
  //     }
  //   ]
  // });
  // $('#Privileges').DataTable({
  //   responsive: true,
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Privileges export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Privileges export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Privileges export'
  //     }, {
  //       extend: 'print',
  //       title: 'Privileges export'
  //     }
  //   ]
  // });
  // $('#societyBank').DataTable({
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Helpdesk export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Helpdesk export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Helpdesk export'
  //     }, {
  //       extend: 'print',
  //       title: 'Helpdesk export'
  //     }
  //   ]
  // });
  // $('#checkBounce').DataTable({
  //   dom: 'Bfp',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Helpdesk export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Helpdesk export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Helpdesk export'
  //     }, {
  //       extend: 'print',
  //       title: 'Helpdesk export'
  //     }
  //   ]
  // });
  
  // $('#facilityManager').DataTable({
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Facility Manager export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Facility Manager export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Facility Manager export'
  //     }, {
  //       extend: 'print',
  //       title: 'Facility Manager export'
  //     }
  //   ]
  // });
  // $('#moveTracker').DataTable({
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Move Tracker export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Move Tracker export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Move Tracker export'
  //     }, {
  //       extend: 'print',
  //       title: 'Move Tracker export'
  //     }
  //   ]
  // });
  // $('#membershipHistory').DataTable({
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Membership History export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Membership History export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Membership History export'
  //     }, {
  //       extend: 'print',
  //       title: 'Membership History export'
  //     }
  //   ]
  // });
  // $('#membershipManager').DataTable({
  //   dom: 'Bfrtip',
  //   buttons: [
  //     'copy', {
  //       extend: 'excel',
  //       title: 'Membership Manager export'
  //     }, {
  //       extend: 'csv',
  //       title: 'Membership Manager export'
  //     }, {
  //       extend: 'pdf',
  //       title: 'Membership Manager export'
  //     }, {
  //       extend: 'print',
  //       title: 'Membership Manager export'
  //     }
  //   ]
  // });
 
});
