/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("yangming");
// var username = "yangming";
// var awesomeThoughts = "I am yangming and I am AWESOME!";
// var userEmail = "451168805@qq.com";


// setTimeout(1000);
// var userNewEmail = userEmail.replace("qq","163");
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append('<hr>'+funThoughts);

//TODO
// var formattedName = HTMLheaderName.replace("%data%", 'yangming');
// var formattedRole = HTMLheaderRole.replace("%data%",'developer');
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

//pracitice
// var s = "audacity";
// var result = s.slice(1).toLocaleUpperCase()+s.slice(2);

// var udacityizer = function(s) {  
//     // Right now, the variable s === "audacity"
//     // Manipulate s to make it equal to "Udacity"
//     // Your code goes here!
   
//     var result = s.slice(1,2).toLocaleUpperCase()+s.slice(2);
//     alert(result);
// };
// window.onload = udacityizer;

// Did your code work? The line below will tell you!

// add skill
// var skills = ["drawing", "singing", "programming", "joke", "python", "java", "javasrcipt"];
// $("#main").append(skills);

//add personal object
// var obj = {
//     'name': 'yangming',
//     'role': 'engineer',
//     'contact':{'mobile':'18172199893','email':'451168805@qq.com',
//     'github':'bestmingming','weixin':'solomingle','location':'liuzhou'},
//     'picURL':"../images/fry.jpg",
//     'welcomeMsg':'欢迎来访',
//     'skills':skills
// };
// 用 []添加属性及属性值.另一种是.
// obj["girlfriend"] = "none";
// $("#main").append('<hr>'+obj.name);
// $("#main").append('<hr>'+obj.role);
// $("#main").append('<hr>'+obj.picURL);
// $("#main").append('<hr>'+obj.girlfriend);
// $("#main").append('<hr>'+obj.contact.github);
// $("#main").append('<hr>'+obj['girlfriend']);

// add work obj
// var workobj = {
//     "current position":"engineer",
//     "employer": "none",
//     "years work": 5,
//     "city":"liuzhou"
// };

// add education onj
// var eduobj = {};
// eduobj["middle school"]="fh no.1 middle school";
// eduobj["last school"]= "CAU";
// eduobj["years"]= 4;
// eduobj["city"]= "bacheler";

// $("#main").append(workobj["current position"]);
// $("#main").append('hr'+eduobj.years);

//  json object
// var education = {
//     "schools":[
//         {
//             "name":"CAU",
//             "location":"Beijing",
//             "degree":"bachelor",
//             "major":["vehicle"],
//             "date": 2013,
//             "url":"http://cau.com.cn"
//         },
//         {
//             "name":"qinghua",
//             "city":"beijing",
//             "degree":"ba",
//             "major":["none"], 
//             "datas":2003,
//             "url":"http://fgfdgfd"
//         }
//     ]
// ,
//   "onlineCourse" : [
//       {
//           "title": "javascript syntax",
//           "scholl":"udacity",
//           "data":2014,
//           "url":"http:dfds"
//       }
//   ]
// }
// console.log(udacityizer(s));
// console.log(username);
// console.log(awesomeThoughts);
// console.log(userEmail);
// console.log(userNewEmail);



var bio = {
    "name": "Mingle",
    "role": "NHV Engineer",
    "contacts": {
        "mobile": "18172199893",
        "email": "1141031530@qq.com",
        "github": "bestmingming",
        "twitter": "no regitted",
        "location": "liuchou"
    },
    "welcomeMessage": "有朋自远方来不亦乐乎",
    "skills": ["drawing", "computer", "writting", "basketball"],
    "biopic": "./images/fry.jpg",
    "display": function(){}
};

var enducaiton = {
    "schools": [
        {
            "name": "",
            "location": "",
            "degree": "",
            "major": [],
            "dates": "2017-05-09",
            "url": ""
        }
    ],
    "onlineCourses":[
        {
            "title": "",
            "school": "",
            "dates": "",
            "url": ""
        }
    ],
    "display": function() {}
};

var work =  {
    "jobs": [
        {
            "employer": "newhope",
            "title": "engineer",
            "location": "hunan.changsha",
            "date": "2015",
            "description":"My first job, "
        },
        {
            "employer":"newhope2",
            "title":"engineer",
            "location":"GuangXi.LiuZhou",
            "dates":"2016 to"+new Date().getFullYear(),
            "description":""
        }
    ],
    "display": function() {}
};

var projects  = {
    "projects": [
        {
            "title": "",
            "date": "",
            "description": "",
            "images": ""
        }
    ],
    "display" : function(){}
};

// if(bio.skills.length > 0) {
//     $("#header").append(HTMLskillsStart);

//     var formattedName = HTMLheaderName.replace("%data%", bio.name);
//     $("#header").append(formattedName);


    // var formattedName = HTMLheaderName.replace("%data%", bio.name);
    // $("#name").append(formattedName);
    
//     var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
//     $("#skills").append(formattedSkill);

//     var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
//     $("#skills").append(formattedSkill);

//     var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
//     $("#skills").append(formattedSkill);

//     var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
//     $("#skills").append(formattedSkill);
// }

// $("#main").append("yangming");
// var username = "yangming";
// var awesomeThoughts = "I am yangming and I am AWESOME!";
// var userEmail = "451168805@qq.com";
// for works
// for(job in work.jobs) {
//     $("#workExperience").append(HTMLworkStart);
//     var formattedEmployer =  HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
//     var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
//     var formattedEmployerTitle

// }
// practice while for for...in
// var cameron = {};
// cameron.job = "course dev";
// var testarr = ["yangming", "xueli", "zhangsanfeng"];
// for(item in testarr) {
//   console.log(item); //这个只会打印出迭代器的数字
//   console.log(testarr[item]);    
// }

// practice for in 
// for (job in work.jobs) {
//     $("#workExperiece").append(HTMLworkStart);
//     var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
//     var formattedTitle =  HTMLworkTitle.replace("%data%",work.jobs[job].title);
//     var formattedEmployerTitle = formattedEmployer + formattedTitle;
//     $(".work-entry:last").append(formattedEmployerTitle);
//     var formattedDates =  HTMLworkDates.replace("%data%",work.jobs[job].dates);
//     $(".work-entry:last").append(formattedDates);
//     var formattedDescription =  HTMLworkDescription.replace("%data%",work.jobs[job].description);
//     $(".work-entry:last").append(formattedDescription);
// }

// 因为for in 循环在数组和对象遍历上存在问题，所以一般不使用for in循环
// 使用for 或者for each
// $("#main").append("yangming");
// var username = "yangming";
// var awesomeThoughts = "I am yangming and I am AWESOME!";
// var userEmail = "451168805@qq.com";
var displayBio = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    for(var contact in bio.contacts) {
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
        var formattedCompents = formattedMobile+formattedEmail+formattedTwitter+formattedLocation;
        $("#topContacts").append(formattedCompents);
        break;
    }
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedSkillStart = HTMLskillsStart;
    $("#topContacts").append(formattedPic+formattedWelcomeMsg+formattedSkillStart);
    
    for (var skill in bio.skills) {
    	var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
    	$("#topContacts").append(formattedSkills);
    }
    
    
}
displayBio();

var displayWork = function() {
	work.jobs.forEach(function(element)) {
       $("#workExperiece").append(HTMLworkStart);
       var formattedEmployer = HTMLworkEmployer.replace("%data%",element);
       var formattedTitle =  HTMLworkTitle.replace("%data%",element);
       var formattedEmployerTitle = formattedEmployer + formattedTitle;
       $(".work-entry:last").append(formattedEmployerTitle);
       var formattedDates =  HTMLworkDates.replace("%data%",work.jobs[job].dates);
       $(".work-entry:last").append(formattedDates);
       var formattedDescription =  HTMLworkDescription.replace("%data%",work.jobs[job].description);
       $(".work-entry:last").append(formattedDescription);
   }
}
// function displaywork() {
//   work.jobs.forEach(function(element) {
//       $("#workExperiece").append(HTMLworkStart);
//       var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
//       var formattedTitle =  HTMLworkTitle.replace("%data%",work.jobs[job].title);
//       var formattedEmployerTitle = formattedEmployer + formattedTitle;
//       $(".work-entry:last").append(formattedEmployerTitle);
//       var formattedDates =  HTMLworkDates.replace("%data%",work.jobs[job].dates);
//       $(".work-entry:last").append(formattedDates);
//       var formattedDescription =  HTMLworkDescription.replace("%data%",work.jobs[job].description);
//       $(".work-entry:last").append(formattedDescription);
    
//     }); 
// }

// displaywork();
// $(document).click(function(loc) {
//     var x = loc.pageX;
//     var y = loc.pageY;
//     logClicks(x, y);
// })

// // practice location
// function locationizer(work_obj) {
//     var locaionArray = [];
//     work_obj.jobs.forEach(function(element) {
//         var newLocation = work_obj.jobs[job].location;
//         locaionArray.push(newLocation);
//     }, this);
//     return locaionArray;
// }
// console.log(locationizer(work));

// // practice international
// function inName(name) {
//     name =  name.trim().split(" ");
//     console.log(name);
//     name[1] = name[1].toUpperCase();
//     name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

//     return name[0] + name[1];
// }
// $("#main").append(inName(internationlizeButton));

// // practice projects js 一切都是对象
// project.display = function() {
//     project.projects.forEach(function(element) {
//         $("#projects").append(HTMLprojectStart);
//         var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[project].title);
//         $(".project-entry:last")
//     }, this);
// }