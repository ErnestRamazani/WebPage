/* JavaScript Document */
/**************************************
 Filename: finalReal1.js
 Author: Ernest Ramazani
 Create Date: 11 December 2022
 Purpose:  : Final Release 
 Modification History:
 **************************************/ 

 /*******
This app.js will use some JQuery to get and manipulate the user input from
the finalReal1.html and try to validate the user

 *******/ 


$(document).ready(function() {

    //Function for check radio buttons
    $( function() {
        $( "input" ).checkboxradio({
            icon:false
        });
        
      } );


      //function for choosing a sex
      $( function() {
        var availableSex = [
          "Male",
          "Female",
          "Other",
         
        ];

        //function for generating a auto complete for class in the Create Space 
        $( "#studentSex" ).autocomplete({
          source: availableSex
        });
      } );
    //Creating the accordion function for both student and prof 
    $( function() {
        $( "#choiceProfStudentAccordion" ).accordion({
            collapsible:true
            
        });
           
    } );
  
    //Creating the accordion function inside student
    $( function() {
        $( "#studentSignUpAccordion" ).accordion({
            collapsible:true
            
        });
           
    } );

    //Creating the slider function for the number of students 
    $(function(){
        $("#numberOfStudentSlider").slider({
            range:"max", 
            min:1, 
            max:25,
            value:1, 
            slide:function(event, ui){
                $("#numberOfStudent").val(ui.value); 
            }
        });
        $("#numberOfStudent").val($("#numberOfStudentSlider").slider("value"))
       }); 
    
       //creating the date picker function for the begining date 
       $( function() {
        $( "#beginingDate" ).datepicker();
       
      } );

      //creating the date picker function for the end date 
      $( function() {
        $( "#endDate" ).datepicker();
       
      } );

      //creating the menu function for selecting the major for professor 
      $( function() {
        $( "#profMajor" ).selectmenu();
       
      } );

        //creating the menu function for selecting the major for students 
      $( function() {
        $( "#studentMajor" ).selectmenu();
       
      } );

       //Creating button functions
      $("input[type='submit']").button(); 
      $("#studentLoginEnter").click(studentLoginEnter); 
      $("#profLoginEnter").click(profLoginEnter); 
      $("#createSpaceEnter").click(createSpace); 

//This function will be called if the "enter" from the student sign up button is clicked 
//this function will output all the user inputs
      $.validator.setDefaults({
        submitHandler:function(){      
        
            //Taking the value of user inputs 
            var studentFirstName = new String($("#studentFirstName").val()); 
            var studentLastName = new String($("#studentLastName").val()); 
            var studentMiddleName = new String($("#studentMiddleName").val()); 
            var studentMail = new String($("#studentMail").val()); 
            var studentSex = $('input[name="studentSex"]:checked').val(); 
            var studentAge = new String($("#studentAge").val()); 
            var studentTelephone = new String($("#studentTelephone").val()); 
            var studentMajor = new String($("#studentMajor").val()); 
            //var studentClasses = new String($("#studentClasses").val()); 
            var studentUsername = new String($("#studentUsername").val()); 
            var studentPassword = new String($("#studentPassword").val()); 
            var studentClass=" "; 
            $('input[name="studentClass"]:checked').each(function(){
                studentClass += $(this).val()+ "---"; 
            })
            //var studentSex= $('input[name="studentSex"]:checked').val(); 
            
            //printing the output 
            $("#outputSignUpStudent").html("First Name: " +studentFirstName +"<br>"+ "Last Name: " +studentLastName +"<br>"+ "Middle Name: " +studentMiddleName +"<br>"+"Mail: " 
                +studentMail +"<br>"+ "Sex: " +studentSex+"<br>"+ "Age: " +studentAge +"<br>"+ "Phone Number: " +studentTelephone+"<br>"+ "Major: " +studentMajor +"<br>"
                +"Classes: "+studentClass+ "<br>" +"Username: " +studentUsername+"<br>"+ "Password: "+studentPassword)
           // alert("submitted!");

           //form.submit(); 
        }
      })
    
      //Validation form for the Sign up accordion 
      $("#studentSignUpForm").validate({
        //creating rules, making field required 
        rules:{
            firstN: "required",
            lastN: "required", 
            middleN: "required",
            studentClass:"required", 
            studentSex:"required", 
            email:{
                required:true,
                email:true
            },
            age:{
                required:true, 
                digits:true
            },
            userName:{
                required: true,
                minlength:4
            }, 
            password:{
                required:true, 
                minlength:6
            }, 
            telephone:{
                required:true, 
                digits:true, 
                rangelength:[9,10]
            }, 

        },

        //message to appears if a required filed is not filled 
        messages:{
            firstN:"Please enter your First Name",
            lastN:"Please enter your Last Name", 
            middleN:"Please enter your Middle Name",
            studentClass:"Select a class", 
            studentSex:"Select a sex",
            password:{
                required:"Please enter a password"
            }, 
            userName:{
                required:"Enter your username",
                minlength:"Username must have at least 4 characters",  
            }, 
            age:{
                required:"Age must a number"
            }, 
            telephone:{
                required:"Phone number must be 9 or 10 number"
            }
            
        }
      })
      //Validation form for th login accordion 
      $("#studentLoginForm").validate({
          //creating rules, making field required 
        rules:{
            studentUsernameLogin:"required",
            studentPasswordLogin:{
                required:true, 
                minlength:6
            }, 
        }, 
         //message to appears if a required filed is not filled 
        message:{
            studentUsernameLogin:"Enter your Username", 
            studentPasswordLogin:{
                required:"Enter a password", 
            }, 
        }
      })


//This function will be called if the "enter" from the student login button is clicked 
//this function will output all the user inputs
function studentLoginEnter(){

    //Taking the value of user inputs 
    var studentUsernameInput = new String($("#studentUsernameInput").val()); 
    var studentPasswordInput = new String($("#studentPasswordInput").val());

    //printing the output 
    $("#outputSignUpStudent").html("Username: " +studentUsernameInput +"<br>"+ "Password: " +studentPasswordInput) 
}

//This function will be called if the "enter" from the prof login button is clicked 
//this function will output all the user inputs
function profLoginEnter(){
    var profUsernameInput = new String($("#profUsernameInput").val()); 
    var profPasswordInput = new String($("#profPasswordInput").val()); 

    //printing the output 
    $("#outputSignUpStudent").html("Username: " +profUsernameInput +"<br>"+ "Password: " +profPasswordInput) 
}

//This function will be called if the "enter" from the create space button is clicked 
//this function will output all the user inputs


    function createSpace(){
         //Taking the value of user inputs 
        var spaceName = new String($("#spaceName").val()); 
        var profFirstName = new String($("#profFirstName").val()); 
        var profLastName = new String($("#profLastName").val()); 
        var profMail = new String($("#profMail").val()); 
        var profSex = new String($("#profSex").val()); 
        var profTelephone = new String($("#profTelephone").val()); 
        var profMajor = new String($("#profMajor").val()); 
        var profClass = new String($("#profClass").val()); 
        var numberOfStudent = new String($("#numberOfStudent").val()); 
        var beginingDate = new String($("#beginingDate").val()); 
        var endDate = new String($("#endDate").val()); 
        var profUsername = new String($("#profUsername").val()); 
        var profPassword = new String($("#profPassword").val()); 
        
        //printing the output 
        $("#outputSignUpStudent").html("Space Name: " +spaceName +"<br>"+ "First Name: " +profFirstName +"<br>"+ "Last Name: " +profLastName +"<br>"+"Mail: " 
        +profMail +"<br>"+ "Sex: " +profSex+"<br>"+  "Phone Number: " +profTelephone+"<br>"+ "Major: " +profMajor +"<br>"+  
        "Class: " +profClass+"<br>"+ "Number of Student: "+numberOfStudent+"<br>"+ "Begining Date: " +beginingDate+"<br>"+  "End Date: " +endDate+"<br>"+"Username: " 
        +profUsername+"<br>"+ "Password: "+profPassword)
       // alert("submitted!");
    }

$("#studentSignUpForm").validate(); 

}); 