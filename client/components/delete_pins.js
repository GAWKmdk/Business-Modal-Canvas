Template.business_canvas_page.helpers({
   
    
    key_partner: function () {
        
      return Keypartners.find({}, {sort: {createdOn: -1}});         

    },
 
key_activities: function() {    
  
      return Keyactivities.find({}, {sort: {createdOn: -1}});         

   },
   key_resources: function() {    
  
      return Keyresources.find({}, {sort: {createdOn: -1}});         

   },
   value_proposition: function() {    
  
      return ValueProposition.find({}, {sort: {createdOn: -1}});         

   },
   customer_relationship: function() {    
  
  return CustomerRelationship.find({}, {sort: {createdOn: -1}});         
   },
   customer_channel: function() {    
  
      return CustomerChannel.find({}, {sort: {createdOn: -1}});         

   },
   customer_segment: function() {    
  
      return CustomerSegment.find({}, {sort: {createdOn: -1}});         

   },
   financial_stream: function() {    
  
      return RevenueStream.find({}, {sort: {createdOn: -1}});         

   },
   financial_segement: function() {    
  
      return FinanceSegment.find({}, {sort: {createdOn: -1}});         

   },
   
   
   });


Template.business_canvas_page.events({
    
    'click .delete-pin-kp': function() {
        console.log('pin delete selected');
        var pinId = this._id;
        console.log(pinId);
        
        if (confirm("Would you like to delete this pin-note ?")) {
            Keypartners.remove(pinId);
            Bert.alert( 'Pin successfully deleted', 'danger', 'fixed-top', 'fa-remove' );
            return false;
        }
        
        return false;
    },
    
    'click .delete-pin-ka': function() {
        console.log('pin delete selected');
        var pinId = this._id;
        console.log(pinId);
        
        if (confirm("Would you like to delete this pin-note ?")) {
            Keyactivities.remove(pinId);
            Bert.alert( 'Pin successfully deleted', 'danger', 'fixed-top', 'fa-remove' );
            return false;
        }
        
        return false;
    },
    
    'click .delete-pin-kr': function() {
        console.log('pin delete selected');
        var pinId = this._id;
        console.log(pinId);
        
        if (confirm("Would you like to delete this pin-note ?")) {
            Keyresources.remove(pinId);
            Bert.alert( 'Pin successfully deleted', 'danger', 'fixed-top', 'fa-remove' );
            return false;
        }
        
        return false;
    },
    
    'click .delete-pin-vp': function() {
        console.log('pin delete selected');
        var pinId = this._id;
        console.log(pinId);
        
        if (confirm("Would you like to delete this pin-note ?")) {
            ValueProposition.remove(pinId);
            Bert.alert( 'Pin successfully deleted', 'danger', 'fixed-top', 'fa-remove' );
            return false;
        }
        
        return false;
    },
    
    'click .delete-pin-cr': function() {
        console.log('pin delete selected');
        var pinId = this._id;
        console.log(pinId);
        
        if (confirm("Would you like to delete this pin-note ?")) {
            CustomerRelationship.remove(pinId);
            Bert.alert( 'Pin successfully deleted', 'danger', 'fixed-top', 'fa-remove' );
            return false;
        }
        
        return false;
    },
    
    'click .delete-pin-cc': function() {
        console.log('pin delete selected');
        var pinId = this._id;
        console.log(pinId);
        
        if (confirm("Would you like to delete this pin-note ?")) {
            CustomerChannel.remove(pinId);
            Bert.alert( 'Pin successfully deleted', 'danger', 'fixed-top', 'fa-remove' );
            return false;
        }
        
        return false;
    },
    
    'click .delete-pin-cs': function() {
        console.log('pin delete selected');
        var pinId = this._id;
        console.log(pinId);
        
        if (confirm("Would you like to delete this pin-note ?")) {
            CustomerSegment.remove(pinId);
            Bert.alert( 'Pin successfully deleted', 'danger', 'fixed-top', 'fa-remove' );
            return false;
        }
        
        return false;
    },
    
    'click .delete-pin-fs': function() {
        console.log('pin delete selected');
        var pinId = this._id;
        console.log(pinId);
        
        if (confirm("Would you like to delete this pin-note ?")) {
            RevenueStream.remove(pinId);
            Bert.alert( 'Pin successfully deleted', 'danger', 'fixed-top', 'fa-remove' );
            return false;
        }
        
        return false;
    },
    
    'click .delete-pin-fcs': function() {
        console.log('pin delete selected');
        var pinId = this._id;
        console.log(pinId);
        
        if (confirm("Would you like to delete this pin-note ?")) {
            FinanceSegment.remove(pinId);
            Bert.alert( 'Pin successfully deleted', 'danger', 'fixed-top', 'fa-remove' );
            return false;
        }
        
        return false;
    },
    
    
    
    
    
});