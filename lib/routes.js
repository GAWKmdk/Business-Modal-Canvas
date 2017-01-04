Router.configure({
    //frame-build
   layoutTemplate: 'app_layout'
    //,
    //loadingTemplate:'layoutLoading',
    //notFoundTemplate:'notFound'
});



Router.route('/', {
    //posting-board    
    name: 'businesscanvasitem',
    template: 'business_canvas_card',

   
    data: {
        
    
   keypartner: function() {
       return Keypartners.find(); 
   },
   keyactivities: function() {
      return Keyactivities.find(); 
   },
   keyresources: function() {
     return  Keyresources.find(); 
   },
   valueproposition: function() {
     return  ValueProposition.find(); 
   },
   customerrelationship: function() {
     return  CustomerRelationship.find(); 
    },
   customerchannel: function() {
     return  CustomerChannel.find(); 
   },
   customersegment: function() {
     return CustomerSegment.find(); 
   },
   revenuestream: function() {
    return  RevenueStream.find(); 
   },
   financesegment: function() {
     return FinanceSegment.find(); 
     }
    

    },
   
     
    waitOn: function(){
  
       
            
        return [ 
            
            Meteor.subscribe('keypartners'), 
            Meteor.subscribe('keyactivities'), 
            Meteor.subscribe('keyresources'), 
            Meteor.subscribe('vtprops'), 
            Meteor.subscribe('customerrelationship'), 
            Meteor.subscribe('customerchannel'), 
            Meteor.subscribe('customersegment'), 
            Meteor.subscribe('revenuestream'), 
            Meteor.subscribe('financesegment')
              
       
        ];
        
        }
  
});


