Template.business_canvas_card.helpers({
    
   infastructure_partner: function() {    
  
      return Keypartners.find({}, {sort: {createdOn: -1}});         

   },
   infastructure_activity: function() {    
  
      return Keyactivities.find({}, {sort: {createdOn: -1}});         

   },
   infastructure_resource: function() {    
  
      return Keyresources.find({}, {sort: {createdOn: -1}});         

   },
   value_propsition: function() {    
  
      return ValueProposition.find({}, {sort: {createdOn: -1}});         

   },
   customer_channel: function() {    
  
      return CustomerChannel.find({}, {sort: {createdOn: -1}});         

   },
   customer_segment: function() {    
  
      return CustomerSegment.find({}, {sort: {createdOn: -1}});         

   },
   customer_relationship: function() {    
  
      return CustomerRelationship.find({}, {sort: {createdOn: -1}});         

   },
   finacial_revenue_stream: function() {    
  
      return RevenueStream.find({}, {sort: {createdOn: -1}});         

   },
   financial_segment: function() {    
  
      return FinanceSegment.find({}, {sort: {createdOn: -1}});         

   },
   
   
   });
   
   