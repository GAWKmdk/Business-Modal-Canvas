
   
   
   
   Template.business_canvas_page.events({
   
   //create a pin button
    'click .create-infastructure-partner': function(event){
        
        event.preventDefault();
        
       
     
        var infastructurepartner = $('[name="infastructure-partner"]').val(); //jquery
        
        Keypartners.insert({
            
            pin: infastructurepartner,
            
            createdOn: new Date()
       
        });
        
        Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        
        //clears input
        $('[name="infastructure-partner"]').val('');

    },
    //create a pin keyboard
    'submit form': function(event){
        event.preventDefault();
       
        
        var infastructurepartner = $('[name="infastructure-partner"]').val(); //jquery
        
            
      
        Keypartners.insert({
            
            pin: infastructurepartner,
           
            createdOn: new Date()
       
        });
        
         Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        //clears input
        $('[name="infastructure-partner"]').val('');

    },
    
    //create a pin button
    'click .create-infastructure-activity': function(event){
        
        event.preventDefault();
        
      
        var inputholder = $('[name="infastructure-activity"]').val(); //jquery
        
        Keyactivities.insert({
            
            pin: inputholder,
           
            createdOn: new Date()
       
        });
        
        Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        
        //clears input
        $('[name="infastructure-activity"]').val('');

    },
    //create a pin keyboard
    'submit form': function(event){
        event.preventDefault();
          
        
        var inputholder = $('[name="infastructure-activity"]').val(); //jquery
        
            
      
        Keyactivities.insert({
            
            pin: inputholder,
          
            createdOn: new Date()
       
        });
        
         Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        //clears input
        $('[name="infastructure-activity"]').val('');

    },
    
    //create a pin button
    'click .create-infastructure-resource': function(event){
        
        event.preventDefault();
        
       
        var inputholder = $('[name="infastructure-resource"]').val(); //jquery
        
        Keyresources.insert({
            
            pin: inputholder,
          
            createdOn: new Date()
       
        });
        
        Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        
        //clears input
        $('[name="infastructure-resource"]').val('');

    },
    //create a pin keyboard
    'submit form': function(event){
        event.preventDefault();
      
        var inputholder = $('[name="infastructure-resource"]').val(); //jquery
        
            
      
        Keyresources.insert({
            
            pin: inputholder,
        
            createdOn: new Date()
       
        });
        
         Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        //clears input
        $('[name="infastructure-resource"]').val('');

    },
    
    //create a pin button
    'click .create-customer-channel': function(event){
        
        event.preventDefault();
           
        var inputholder = $('[name="customer-channel"]').val(); //jquery
        
        CustomerChannel.insert({
            
            pin: inputholder,
            createdOn: new Date()
       
        });
        
        Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        
        //clears input
        $('[name="customer-channel"]').val('');

    },
    //create a pin keyboard
    'submit form': function(event){
        event.preventDefault();
             
        var inputholder = $('[name="customer-channel"]').val(); //jquery
        
            
      
        CustomerChannel.insert({
            
            pin: inputholder,
           
            createdOn: new Date()
       
        });
        
         Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        //clears input
        $('[name="customer-channel"]').val('');

    },
    
    //create a pin button
    'click .create-customer-segment': function(event){
        
        event.preventDefault();
     
        var inputholder = $('[name="customer-segment"]').val(); //jquery
        
        CustomerSegment.insert({
            
            pin: inputholder,
        
            createdOn: new Date()
       
        });
        
        Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        
        //clears input
        $('[name="customer-segment"]').val('');

    },
    //create a pin keyboard
    'submit form': function(event){
        event.preventDefault();
    
        
        var inputholder = $('[name="customer-segment"]').val(); //jquery
        
            
      
        CustomerSegment.insert({
            
            pin: inputholder,
         
            createdOn: new Date()
       
        });
        
         Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        //clears input
        $('[name="customer-segment"]').val('');

    },
    
    //create a pin button
    'click .create-customer-relationship': function(event){
        
        event.preventDefault();
        
      var inputholder = $('[name="customer-relationship"]').val(); //jquery
        
        CustomerRelationship.insert({
            
            pin: inputholder,
          
            createdOn: new Date()
       
        });
        
        Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        
        //clears input
        $('[name="customer-relationship"]').val('');

    },
    //create a pin keyboard
    'submit form': function(event){
        event.preventDefault();
   
        
        var inputholder = $('[name="customer-relationship"]').val(); //jquery
        
            
      
        CustomerRelationship.insert({
            
            pin: inputholder,
         
            createdOn: new Date()
       
        });
        
         Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        //clears input
        $('[name="customer-relationship"]').val('');

    },
    
    //create a pin button
    'click .create-financial-revenuestream': function(event){
        
        event.preventDefault();
     
     
        var inputholder = $('[name="financial-revenuestream"]').val(); //jquery
        
        RevenueStream.insert({
            
            pin: inputholder,
         
            createdOn: new Date()
       
        });
        
        Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        
        //clears input
        $('[name="financial-revenuestream"]').val('');

    },
    //create a pin keyboard
    'submit form': function(event){
        event.preventDefault();
      
        
        var inputholder = $('[name="financial-revenuestream"]').val(); //jquery
        
            
      
        RevenueStream.insert({
            
            pin: inputholder,
          
            createdOn: new Date()
       
        });
        
         Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        //clears input
        $('[name="financial-revenuestream"]').val('');

    },
    
    //create a pin button
    'click .create-financial-segement': function(event){
        
        event.preventDefault();
        
       
     
        var inputholder = $('[name="financial-segement"]').val(); //jquery
        
        FinanceSegment.insert({
            
            pin: inputholder,
        
            createdOn: new Date()
       
        });
        
        Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        
        //clears input
        $('[name="financial-segement"]').val('');

    },
    //create a pin keyboard
    'submit form': function(event){
        event.preventDefault();
         
        
        var inputholder = $('[name="financial-segement"]').val(); //jquery
        
            
      
        FinanceSegment.insert({
            
            pin: inputholder,
      
            createdOn: new Date()
       
        });
        
         Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        //clears input
        $('[name="financial-segement"]').val('');

    },
    
    //create a pin button
    'click .create-offering-valueproposition': function(event){
        
        event.preventDefault();
        
       
        var inputholder = $('[name="offering-valueproposition"]').val();
               
        ValueProposition.insert({
            
            pin: inputholder,
            createdOn: new Date()
       
        });
        
        Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        
        //clears input
        $('[name="offering-valueproposition"]').val('');
        

    },
    //create a pin keyboard
    'submit form': function(event){
        event.preventDefault();
     
        var inputholder = $('[name="offering-valueproposition"]').val(); 
             
        ValueProposition.insert({
            
            pin: inputholder,
            createdOn: new Date()
           
       
        });
        
         Bert.alert( 'Pin Created', 'success', 'fixed-top', 'fa-check' );
        
        
        //clears input
        $('[name="offering-valueproposition"]').val('');
        
    }
    
    
    });
    
    