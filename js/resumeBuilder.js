//var awesomeThoughts = "My name is Ruben and I am AWESOME!";
//var funThoughts = awesomeThoughts.replace("AWESOME!","FUN");
//$("#main").append(funThoughts);

var bio = {
    "name": "Ruben Mendez",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "424-675-2328",
        "email": "ruben.mendez07@hotmail.com",
        "github": "ruben-socal",
        "twitter": "@maximus_rm28",
        "location": "Los Angeles, CA"
    },
    "welcomeMsg": "Welcome To My Resume",
    "skills": [
        "HTML",
        " CSS",
        " Javascript",
        " Bootstrap",
        " Git",
        " Grunt"
    ],
    "bioPic": "images/fry.jpg"
};

var education = {
    "schools": [{
        "name": "Cal Poly Pomona",
        "location": "Pomona, CA, US",
        "degree": "Bachelors of Science",
        "majors": ["Computer Science"],
        "dates": "2003",
        "url": "http://www.cpp.edu"
    }, {
        "name": "El Camino College",
        "location": "Torrance, CA, US",
        "degree": "Associate Degree",
        "majors": [],
        "dates": "1999",
        "url": "http://www.elcamino.edu"
    }],

    "onlineclasses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com/course/ud804"
    }]

};

 var work = {
    "jobs": [{
        "employer": "Talley Inc",
        "title": "Database Administrator",
        "location": "Santa Fe Springs,CA",
        "url": "http://www.talleycom.com",
        "dates": "2005-2012",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    }, {
        "employer": "CompuMed",
        "title": "Computer Operator",
        "location": "Manhattan Beach,CA",
        "url": "http://compumedinc.com",
        "dates": "1995-2000",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    }]
};

var projects = {
    "project": [{
        "title": "Personal Blog",
        "dates": "1-2015 to 3-2015",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "images": ["http://placehold.it/140x100", "http://placehold.it/140x100"],
        "url": "https://github.com/ruben-socal/blogger"
    }, {
        "title": "sketch-pad site",
        "dates": "3-2015 to 6-2015",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "images": ["http://placehold.it/140x100", "http://placehold.it/140x100"],
        "url": "https://github.com/ruben-socal/sketch-pad"
    }]
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPic);
    $("#header").append(formattedWelcomeMsg);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);

    // Display skills array with for loop
    $("#header").append(HTMLskillsStart);
    var i, len;
    for (i = 0, len = bio.skills.length; i < len; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skillsH3").append(formattedSkills);
    }

    // Display footer contacts using bio data
     $("#footerContacts").append(formattedMobile);
     $("#footerContacts").append(formattedEmail);
     $("#footerContacts").append(formattedGithub);
     $("#footerContacts").append(formattedTwitter);
     $("#footerContacts").append(formattedLocation);
}

bio.display();

work.display = function() {
    // Display work experience array of objects with for loop
    var i, len;
    for (i = 0, len = work.jobs.length; i < len; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer).replace("#", work.jobs[i].url);
        var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedPosition;
        var formattedYearsWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedYearsWorked);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDescription);

    }

}

work.display();

education.display = function() {
    // Display education array of objects with for loop
    var i, len;
    for (i = 0, len = education.schools.length; i < len; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolAttended = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedNameDegree = formattedSchoolAttended + formattedSchoolDegree;
        var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        var formattedDegreeDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

        $(".education-entry:last").append(formattedNameDegree);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedDegreeDate);
        $(".education-entry:last").append(formattedSchoolMajors);
    }

    // Display on-line classes array of objects with for loop
    for (i = 0, len = education.onlineclasses.length; i < len; i++) {
        $(".education-entry:last").append(HTMLonlineClasses);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineclasses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineclasses[i].school);
        var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineclasses[i].dates);
        // OR (|) operator is used to replace # and %data% with url data
        var formattedOnlineUrl = HTMLonlineURL.replace(/%data%|#/g, education.onlineclasses[i].url);

        $(".education-entry:last").append(formattedTitleSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineUrl);
    }

}

education.display();

projects.display = function() {
    //display project for loop
    var i, j, len, length;
    for (i = 0, len = projects.project.length; i < len; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title).replace("#", projects.project[i].url);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);
        // For loop needed if more than one image in images array
        for (j = 0, length = projects.project[i].images.length; j < length; j++) {
            var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.project[i].images[j]);
            $(".project-entry:last").append(formattedProjectImages);
        }
    }
}

projects.display();

// function is used to make header Bio Name internationalized
function inName(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var array = finalName.split(" ");
    var first_name = array[0].toLowerCase();
    var last_name = array[1].toUpperCase();
    var first_char = first_name.slice(0, 1).toUpperCase();
    var full_name = first_char.concat(first_name.substr(1, first_name.length - 1), " ", last_name);
    finalName = full_name;

    //var formattedName = HTMLheaderName.replace("%data%", finalName);
    // $("#header").prepend( formattedName );
    document.getElementById("name").innerHTML = finalName;
}
$("#main").append(internationalizeButton);

// you want to see a map heres a map
$("#mapDiv").append(googleMap);