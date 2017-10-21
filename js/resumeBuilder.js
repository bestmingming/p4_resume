/*
This is empty on purpose! Your code to build the resume will go here.
 */

// create personal information
function addEduInfo(htmlSet, goalData,addClass) {
    var goalSet = htmlSet.replace("%data%", goalData);
    $(addClass).append(goalSet);
}
var bio = {
    "name": "Mingle",
    "role": "NVH Engineer",
    "contacts": {
        "mobile": "18172199893",
        "email": "1141031530@qq.com",
        "github": "bestmingming",
        "twitter": "Not Registered",
        "location": "柳州"
    },
    "welcomeMessage": "有朋自远方来不亦乐乎",
    "skills": ["drawing", "computer", "writting", "basketball", "programing"],
    "biopic": "./images/fry.jpg",
    "display": function() {
    	var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
	    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedCompents = formattedMobile + formattedEmail + formattedTwitter + formattedLocation;
        $("#topContacts, #footerContacts").append(formattedCompents);


	    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	    var formattedSkillStart = HTMLskillsStart;
    	$("#header").append(formattedPic + formattedWelcomeMsg + formattedSkillStart);

	    bio.skills.forEach (function(element) {
	        var formattedSkills = HTMLskills.replace("%data%", element);
	        $("#header").append(formattedSkills);
	    });
    }
};

// create education information
var education = {
    "schools": [
    {
        "name": "CAU",
        "location": "北京",
        "degree": "Bachelor",
        "majors": ["Vehicle Engineering"],
        "dates": "2014-07-01",
        "url": "http://www.cau.edu.cn/"
    }
    ],
    "onlineCourses": [
    {
        "title": "Front-end portal development",
        "school": "Udacity",
        "dates": "2017-08-18",
        "url": "https://cn.udacity.com/"
    }
    ],
    "display": function() {
    	$("#education").append(HTMLschoolStart); 
	    education.schools.forEach(function(element) {
	        addEduInfo(HTMLschoolName, element.name + "-" + element.degree,".education-entry:last");
	        addEduInfo(HTMLschoolDates, element.dates,".education-entry:last");
	        addEduInfo(HTMLschoolLocation, element.location,".education-entry:last");
	        addEduInfo(HTMLschoolMajor, element.majors,".education-entry:last");
	    });
	
	    education.onlineCourses.forEach(function(element) {
	//      addEduInfo(HTMLonlineClasses, element.onlineCourses);
	        $(".education-entry").append(HTMLonlineClasses);
	        var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%", element.title);
	        var formattedOnlineCourseSchool = HTMLonlineSchool.replace("%data%", element.school);
	        var componentTitleSchool = formattedOnlineCourseTitle+formattedOnlineCourseSchool;
	        $(".education-entry").append(componentTitleSchool);
	        var formattedOnlineCourseDates = HTMLonlineDates.replace("%data%", element.dates);
	        var formattedOnlieCourseURL = HTMLonlineURL.replace("%data%", element.url);
	        $(".education-entry").append(formattedOnlineCourseDates);
	        $(".education-entry").append(formattedOnlieCourseURL);
	        // addEduInfo(HTML)
	    });
    }
};


var work = {
    "jobs": [{
            "employer": "YC",
            "title": "engineer",
            "location": "玉林",
            "dates": "2014/07/01-2015/10/25",
            "description": "My first job, Engine after-sales engineer.I Experienced with engine failure detection, " +
                "and to be able to handle client issues in a timely manner.I cherish this experience very much !"
        },
        {
            "employer": "SGMW",
            "title": "engineer",
            "location": "柳州",
            "dates": "2016/03/01-Now",
            "description": "Present work,Chassis NVH engineer. It extremely interesting and very dangerous." +
                "I often test mule cars.I don't like test in hot day,because when testing " +
                "the air conditioner must be turn off and the windows must be closed.I very hot."
        }
    ],
    "display": function() {
    	work.jobs.forEach(function(element) {
	        $("#workExperience").append(HTMLworkStart);
	        var formattedEmployer = HTMLworkEmployer.replace("%data%", element.employer);
	        var formattedTitle = HTMLworkTitle.replace("%data%", element.title);
	        var formattedEmployerTitle = formattedEmployer + formattedTitle;
	        $(".work-entry:last").append(formattedEmployerTitle);
	        var formattedDates = HTMLworkDates.replace("%data%", element.dates);
	        $(".work-entry:last").append(formattedDates);
	        var formattedDescription = HTMLworkDescription.replace("%data%", element.description);
	        $(".work-entry:last").append(formattedDescription);
	    });
    }
};

var projects = {
    "projects": [
      {
        "title": "Sample project",
        "dates": "2015",
        "description": "Created 3d local coordinate conversion tool by matlab," +
            "Trying to implement this functionality with js ",
        "images": ["http://iph.href.lu/300x150?text=sorry","http://iph.href.lu/300x150?text=no picture"]
      }
    ],
    "display": function() {
        function addInfo(info) {
	        $(".project-entry:last").append(info);
	    }
    	$("#projects").append(HTMLprojectStart);
	    projects.projects.forEach(function(element) {
	        var formattedTitle = HTMLprojectTitle.replace("%data%", element.title);
	        var formattedDates = HTMLprojectDates.replace("%data%", element.dates);
	        var formattedDescription = HTMLprojectDescription.replace("%data%", element.description);
	        
	        addInfo(formattedTitle);
	        addInfo(formattedDates);
	        addInfo(formattedDescription);
	        for (var i = 0;i<element.images.length;i++){
	    	    var formattedImg = HTMLprojectImage.replace("%data%", element.images[i]);
	    	    addInfo(formattedImg);
    	    }
	        
	    });
    }
};


bio.display();
work.display();
projects.display();
education.display();
