/*
* Main .css for David Rela's web Portfolio.
*
* @author  David Relaño
* @version 1.1
* @since   October 2016
*/


//FUNCTION TO HIDE THE PRELOADER ON PAGE LOAD
$(window).on('load', function() {
  $('.preloaderWrapper').delay(2000).fadeOut("slow");
});


//FUNCTION TO OPEN/CLOSE THE BURGER NAV
$(document).ready(function(){
  $('.burgerButton').click(function() {
    $(this).toggleClass('active');
    $('.burgerOverlay').toggleClass('open');
  });
});


//FUNCTION TO ANIMATE .projectImage ON HOVER
$(document).ready(function(){
  $('.leftWrapper').mouseover(function(){
    $('.projectImage').addClass('projectImageScrolled');
  });
  $('.leftWrapper').mouseout(function(){
    $('.projectImage').removeClass('projectImageScrolled');
  });

  $('.viewButtonText').mouseover(function(){
    $('.projectImage').addClass('projectImageScrolled');
  });
  $('.viewButtonText').mouseout(function(){
    $('.projectImage').removeClass('projectImageScrolled');
  });
});


//FUNCTION TO CHANGE PAGE TO PROJECT VIEW MODE
//Desktop Version
if (window.innerWidth >= 1000) {
  function projectView() {
    //Change WRAPPER widths to fit PROJECT VIEW MODE
      $('.leftWrapper').css('width', '97%');
      $('.rightWrapper').css('width', '0');
      $('.midWrapper').css('left', '97%');

      //Remove leftWrapper hover animation
      $('.projectImage').removeClass('projectImageScrolled');
      $('.leftWrapper').mouseover(function(){$('.projectImage').removeClass('projectImageScrolled');});

      //Remove cursor: pointer
      $('.leftWrapper').css('cursor', 'auto');

      //Change .scrollButton Image
      $('#scrolldown').css('background', 'url(img/scroll2.gif)');

      //Change "View Project" Button to "Back Home" and It's position
      $('.viewButtonText').html('Back Home');
      $('.viewButton').css('left', '4%');

      //Change "Scroll Down Button" position
      $('.scrollButton').css('right', '48.5%');

      //Show Full Project Description
      $('.project').css('visibility', 'visible');

      //Scroll the .project to the TOP (in case they have been scrolled down)
      $('html, body').animate({scrollTop: $('.project').offset().top - 1200}, 'slow');

      //Scale .projectImage on SCROLL
      var scrollTrigger = 350;

      $(window).on('scroll', function() {
        var yScrollPos = window.pageYOffset;

        if(yScrollPos > scrollTrigger) {
          $('.projectImage').addClass('projectImageScrolled');
        }
        else {
          $('.projectImage').removeClass('projectImageScrolled');
        }
      });

      //Change .viewButtonText color on SCROLL & Hide .scrollButton
      $(window).on('scroll', function() {
        var yScrollPos = window.pageYOffset;

        if(yScrollPos > scrollTrigger) {
          $('.viewButtonText').attr("class", "viewButtonText2");
          $('.scrollButton').css('visibility', 'hidden');
        }
        else {
          $('.viewButtonText2').attr("class", "viewButtonText");
          $('.scrollButton').css('visibility', 'visible');
        }
      });

      //TOGGLE FUNCTION
      $(this).one("click", defaultView);
  };
};

//Phone & Tablet Version
if (window.innerWidth < 1000) {
  function projectView() {
    //Display .leftWrapper & .project
    $('.leftWrapper').css('display', 'inherit');
    $('.leftWrapper').css('z-index', '2');
    $('.project').css('display', 'inherit');
    $('.project').css('visibility', 'visible');
    $('.project').css('z-index', '3');

    //Toggle burgerButton
    $('.burgerButton').removeClass('active');
    $('.burgerOverlay').removeClass('open');
  };
};


//FUNCTION TO GO BACK TO DEFAULT VIEW MODE
//Desktop Version
if (window.innerWidth >= 1000) {
  function defaultView() {
      //Change WRAPPER widths to fit DEFAULT VIEW MODE
      $('.leftWrapper').css('width', '60%');
      $('.rightWrapper').css('width', '37%');
      $('.midWrapper').css('left', '60%');

      //Add leftWrapper hover animation
      $('.projectImage').css('transform', 'scale(1)');
      $(".leftWrapper").mouseover(function(){$('.projectImage').addClass('projectImageScrolled');});

      //Add cursor: pointer
      $('.leftWrapper').css('cursor', 'pointer');

      //Change .scrollButton Image
      $('#scrolldown').css('background', 'url(img/scroll1.gif)');

      //Change "Back Home" Button to "View Project" and It's position
      $('.viewButtonText').html('View Project');
      $('.viewButton').css('left', '30%');

      //Change "Scroll Down Button" position
      $('.scrollButton').css('right', '18%');

      //Hide Full Project Description
      $('.project').css('visibility', 'hidden');

      //Scroll the full website to the TOP
      $("html, body").animate({ scrollTop: 0 }, "slow");

      //STOP scaling .projectImage on SCROLL
      $(window).on('scroll', function() {
        $('.projectImage').removeClass('projectImageScrolled');
      });

      //STOP changing .viewButtonText color on SCROLL
      $(window).on('scroll', function() {
        $('.viewButtonText2').attr("class", "viewButtonText");
        $('.viewButtonText').attr("class", "viewButtonText");
      });

      //TOGGLE FUNCTION
      $(this).one("click", projectView);
  };
};

//Phone & Tablet Version
if (window.innerWidth < 1000) {
  function defaultView() {
    //Display .leftWrapper & .project
    $('.leftWrapper').css('display', 'none');
    $('.leftWrapper').css('z-index', '0');
    $('.project').css('display', 'none');
    $('.project').css('visibility', 'hidden');
    $('.project').css('z-index', '0');

    //Toggle burgerButton
    $('.burgerButton').removeClass('active');
    $('.burgerOverlay').removeClass('open');

    //Scroll the full website to the TOP
    $("html, body").animate({ scrollTop: 0 }, "slow");
  };
};



//FUNCTION TO TOGGLE BETWEEN PROJECT AND DEFAULT VIEWS
$(document).ready(function(){
  $(".viewButtonText").one("click", projectView);
});


//FUNCTION TO SROLL TO TOP ON .midWrapper HOVER
$(document).ready(function(){
    $('.pickerProject').mouseover(function(){
        $('.project').addClass('projectScrolled');
    });

    $('.pickerProject').mouseout(function(){
      $('.project').removeClass('projectScrolled');
    });
});


//VARIABLES TO SET PROJECT CONTENT
var projectImageArray = [
  'url(img/project1.jpg)',
  'url(img/project2.jpg)',
  'url(img/project3.jpg)',
  'url(img/project4.jpg)',
  'url(img/project5.jpg)'
];

var clientArray = [
  'Project: Number One',
  'Project: Number Two',
  'Project: Number Three',
  'Project: Number Four',
  'Project: Number Five'
];

var myroleArray = [
  'Creative<br>/Programing<br>& UI-UX Design',
  'Creative<br>/Art<br>& Painting',
  'Creative<br>/Brands<br>& Design',
  'Creative<br>/Layout<br>& Printing',
  'Creative<br>/Advertising<br>& Branding'
];

var projectNumberArray = [
  '01',
  '02',
  '03',
  '04',
  '05',
];

var projectDescriptionTitleArray = [
  'Pick A Tune',
  'Illustrations',
  'Re-Branding',
  'Print Design',
  'BonBon'
];

var projectDescriptionTextArray = [
  'pickAtune is a website that helps you find the music you love. The user is asked to choose his/her mood, music style, genres, etc and after analyzing the data pickAtune will create a tailored play list. The website has been designed with a modern & minimalistic style, user friendly and intuitive. The UI/UX have been the most important part of the project. pickAtune is fully responsive working perfectly on phone, table and desktop.',

  'Being a Graphic Designer means being able to tell stories through images. Doodles, digital painting, vectorizing or even abstract pieces need to communicate with the spectator. I have selected some of my illustrations to showcase the different styles I enjoy. From the Seven Deadly Sins to the famous Jesse Pinkman this gallerie features my favourite works.',

  'Coca-Cola, LOEWE, Apple, McDonalds, Amazon, I love brands. But haven\'t you thought about making them yours? I have! Here you can see my humble take on some of them. I\'ve re-designed beers, whines, the popular Game Of Thrones even the Sabon Typography! Scroll down and have a look at the way I see the workld through brands. ',

  'It is claimed that Print Design is dead. Computers, smartphones and tablets have taken over newspapers & magazines. However that is not true when it comes to Design. Printing, papers, wet ink, rulers, grids, stamps, etc are part of the core of Graphic Design. Understanding Print Design and working with it makes you a better Designer. Below you can find some pieces: books, magazines, covers, flyers... that I\'ve designed.',

  'Crafted to reflect the personality of the Premium man and woman, BonBon is a contemporary perfume tailored to enhance the look of the wearer and complement their modern lifestyle. On this case, I designed the whole brand of a perfume company. From a naming that plays with the french word from candy \"Bonbon\" and with the spanish word \"Bombón\" to the look of the bottle. Scrolling down you\'ll be able to see different pieces that belong to both the image of Bonbon and its\'s advertising campaing.'
];

var projectImage1Array = [
  'url(img/projectImage11.jpg)',
  'url(img/projectImage12.jpg)',
  'url(img/projectImage13.jpg)',
  'url(img/projectImage14.jpg)',
  'url(img/projectImage15.jpg)'
];

var projectImage2Array = [
  'url(img/projectImage21.jpg)',
  'url(img/projectImage22.jpg)',
  'url(img/projectImage23.jpg)',
  'url(img/projectImage24.jpg)',
  'url(img/projectImage25.jpg)'
];

var pickerSelectedArray = [
  '#picker1',
  '#picker2',
  '#picker3',
  '#picker4',
  '#picker5'
];

var z = 0; //Variable to set the particular project


//FUNCTION TO SELECT THE PROJECT
function selectProject() {
  //Change .projectImage background
  setTimeout(function(){
    $('.projectImage').css('background', projectImageArray[z])}
  ,200);

  //Trigger flip animation on .projectImage
  $('.projectImage').addClass('projectImageFlipped');
  setTimeout(function(){
    $('.projectImage').removeClass('projectImageFlipped')}
  ,1000);

  //Take to TOP of page on CLICK
  $('html,body').scrollTop(0);

  //Select Project 1 on .midWrapper
  $('.pickerProject').attr("class", "pickerProject");
  $(pickerSelectedArray[z]).addClass('pickerSelected');

  //Fill .leftWrapper with Project 1 Info
  $('.client').text(clientArray[z]);
  $('.myrole').html(myroleArray[z]);
  $('.projectNumber').text(projectNumberArray[z]);

  //Fill .project with Project 1 Info
  $('.projectDescriptionTitle').text(projectDescriptionTitleArray[z]);
  $('.projectDescriptionText').text(projectDescriptionTextArray[z]);
  $('#projectImage1').css('background', projectImage1Array[z]);
  $('#projectImage2').css('background', projectImage2Array[z]);
};


//FUNCTION TO TRIGGER selectProject() AND SET THE PROJECT CONTENT
//Desktop Version
if (window.innerWidth >= 1000) {
  $(document).ready(function() {
    //Project 1
    $("#picker1").click(function () {
      z = 0;
      selectProject();
    });

    //Project 2
    $("#picker2").click(function () {
      z = 1;
      selectProject();
    });

    //Project 3
    $("#picker3").click(function () {
      z = 2;
      selectProject();
    });

    //Project 4
    $("#picker4").click(function () {
      z = 3;
      selectProject();
    });

    //Project 5
    $("#picker5").click(function () {
      z = 4;
      selectProject();
    });

  });
};

//Phone & Tablet Version
if (window.innerWidth < 1000) {
  $(document).ready(function() {
    //HOME
    $("#burgerHome").click(function () {
      defaultView();
    });

    //Project 1
    $("#burgerWeb").click(function () {
      z = 0;
      selectProject();
      projectView();
    });

    //Project 2
    $("#burgerIllustrations").click(function () {
      z = 1;
      selectProject();
      projectView();
    });

    //Project 3
    $("#burgerRebranding").click(function () {
      z = 2;
      selectProject();
      projectView();
    });

    //Project 4
    $("#burgerPrint").click(function () {
      z = 3;
      selectProject();
      projectView();
    });

    //Project 5
    $("#burgerBranding").click(function () {
      z = 4;
      selectProject();
      projectView();
    });

  });
};
