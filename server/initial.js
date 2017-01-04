import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
   //Business Canvas

   Meteor.publish('businesscanvaslist', function(){
    
    return BusinessCanvasList.find();
});

    
    Meteor.publish('keypartners', function(){
    
    return Keypartners.find();
});

    
    Meteor.publish('keyactivities', function(){
    
    return Keyactivities.find();
});

   Meteor.publish('keyresources', function(){
   
    return Keyresources.find();
});
 
  Meteor.publish('vtprops', function(){

    return ValueProposition.find();
});
  
    Meteor.publish('customerrelationship', function(){
    
    return CustomerRelationship.find();
});

    Meteor.publish('customerchannel', function(){
   
    return CustomerChannel.find();
});

    Meteor.publish('customersegment', function(){
    
    return CustomerSegment.find();
    });   
     Meteor.publish('costprice', function(){
    
    return CostPrice.find();
});   
      Meteor.publish('revenuestream', function(){
    
    return RevenueStream.find();
});   
      Meteor.publish('financesegment', function(){
    
    return FinanceSegment.find();
});    
    
});
