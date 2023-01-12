/* JavaScript Document */
/**************************************
 Filename: finalReal2.js
 Author: Ernest Ramazani
 Create Date: 11 December 2022
 Purpose:  : Final Release 
 Modification History:
 **************************************/ 

 /*******
This app.js will use some JQuery to get and manipulate the user input from
the finalReal2.html and try to validate the user

 *******/ 


$(document).ready(function() {


      //Function for chossing a class
    $( function() {
        var availableClasses = [
          "Math",
          "Chemestry",
          "MicroEconomics",
          "MacroEconomics",
          "Computing I",
          "Computing II",
          "Data Stracture",
          "Operating System",
          "Client Side Web Developemnt",
          "Calculus",
          "Accounting",
          "Statistics",
          "Microbiology",
          "Physics",
          "JavaScript",
          "Lisp",
          "Perl",
          "PHP",
          "Python",
          "Ruby",
          "Scala",
          "Scheme"
        ];
        $( "#profClass" ).autocomplete({
          source: availableClasses
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
        $( "#profSex" ).autocomplete({
          source: availableSex
        });
      } );

    //Creating the accordion function for both student and prof 
    $( function() {
        $( "#choiceSignUpOutputAccordion" ).accordion({
            collapsible:true
            
        });
           
    } );
  

    //Creating the slider function for the number of students 
    $(function(){
        $("#numberOfStudentSlider").slider({
            range:"max", 
            min:10, 
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



       //Creating button functions
      $("input[type='submit']").button(); 
      $("#profLoginEnter").click(profLoginEnter); 
 

//This function will be called if the "enter" from the student sign up button is clicked 
//this function will output all the user inputs
      $.validator.setDefaults({
        submitHandler:function(){      
        
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
      })
    
      //Validation form for the Sign up accordion 
     $("#createSpaceForm").validate({
            rules:{
                spaceName:"required", 
                firstN: "required",
                lastN: "required", 
                class:"required", 
                profSex:"required", 
                major:"required", 
                class:"required", 
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
                numberStudent:{
                    required:true, 
                    rangelength:[2,25]
                },
                beginDate:{
                    required:true 
                }, 
                endDate:{
                    required:true
                }
    
            },
    
            //message to appears if a required filed is not filled 
            messages:{
                spaceName:"Please enter the Space name",
                firstN:"Please enter your First Name",
                lastN:"Please enter your Last Name", 
                middleN:"Please enter your Middle Name",
                studentClass:"Select a class", 
                profSex:"Select a sex",
                major:"Select a major", 
                class:"Select a class",
                email:{
                    required:"Please enter your Email"
                },
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
                },
                numberStudent:{
                    required:"Enter a number of student"
                },
                beginDate:{
                    required:"Select a starting date"
                },
                endDate:{
                    required:"Select an end date"
                }
                
            }
        })
      

//This function will be called if the "enter" from the prof login button is clicked 
//this function will output all the user inputs
function profLoginEnter(){
    var profUsernameInput = new String($("#profUsernameInput").val()); 
    var profPasswordInput = new String($("#profPasswordInput").val()); 

    //printing the output 
    $("#outputSignUpStudent").html("Username: " +profUsernameInput +"<br>"+ "Password: " +profPasswordInput) 
}


$("#createSpaceForm").validate(); 

}); 