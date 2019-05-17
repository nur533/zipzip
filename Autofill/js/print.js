
var booking_data = {};
var loop = 0;
var watcher = false;
var shortcut = false;

document.body.onload = function(){
	chrome.storage.sync.get(['extention_status'], function(result) {
		if(typeof result.extention_status != 'undefined')
			watcher = result.extention_status;
		if(true === watcher){
			chrome.storage.sync.get(['booking_default'], function(result) {
				//hours = (new Date()).getHours();
				booking_data = result.booking_default;
				img();
				sig();
				test ();


			});
		}
	});
};

/*
first_name_id
middle_name_id
last_name_id
full_name_id
father_name_id
mother_name_id
dob_id
gender_id
mobile_no_id
email_id
vill_name_id
post_name_id
ps_name_id
state_name_id
dist_name_id
pin_no_id


xexampassed
xpassingyear
xboarduniv
xMajorSubjects
xmarkssecured
xfullmarks
xdivision
xcategory
xpercntgofmarks
*/
function test (){




	//firstName= booking_data.first_name_id;
 //middileName=booking_data.middle_name_id;
 //lastName=booking_data.last_name_id;

 fullName=booking_data.full_name_id;
 fatheName=booking_data.father_name_id;
 motherName=booking_data.mother_name_id;
 dobId=booking_data.dob_id;
 genderId=booking_data.gender_id;
 mobileNumber=booking_data.mobile_no_id;
 emailId=booking_data.email_id;
 villName=booking_data.vill_name_id;
  villNameTwo=booking_data.vill_name_id;
 postName=booking_data.post_name_id;
 psName=booking_data.ps_name_id;
 distName=booking_data.dist_name_id;
 stateName=booking_data.state_name_id;
 pinId=booking_data.pin_no_id;
 //xExamPass=booking_data.xExamPass;
 xPassYear=booking_data.xpassingyear;
 xBoard=booking_data.xboarduniv;
 xMajorSub=booking_data.xMajorSubjects;
 xMarkSecure=booking_data.xmarkssecured;
 xFullMarks=booking_data.xfullmarks;
 xDivision=booking_data.xdivision;
 xCategory=booking_data.xcategory;
 xPercent=booking_data.xpercentofmarks;


 //var elfirstName=document.getElementById('first_name_id');
 //var elmiddileName=document.getElementById('middle_name_id');
// var ellastName=document.getElementById('last_name_id');
 var elfullName=document.getElementById('full_name_id');
 var elfatheName=document.getElementById('father_name_id');
 var elmotherName=document.getElementById('mother_name_id');
 var eldobId=document.getElementById('dob_id');
 var elgenderId=document.getElementById('gender_id');
 var elmobileNumber=document.getElementById('mobile_no_id');
 var elemailId=document.getElementById('email_id');

 var elvillName=document.getElementById('vill_name_id');
 var elvillNameTwo=document.getElementById('vill_name_id2');
 var elpostName=document.getElementById('post_name_id');
 var elpsName=document.getElementById('ps_name_id');
 var eldistName=document.getElementById('dist_name_id');
 var elstateName=document.getElementById('state_name_id');
 var elpinId=document.getElementById('pin_no_id');
var 	elxExamPass=document.getElementById('xExamPass');
 var elxPassYear=document.getElementById('xpassingyear');
 var elxBoard=document.getElementById('xboarduniv');
var elxMajorSub=document.getElementById('xMajorSubjects');
 var elxMarkSecure=document.getElementById('xmarkssecured');
 var elxFullMarks=document.getElementById('xfullmarks');
 var elxDivision=document.getElementById('xdivision');
 var elxCategory=document.getElementById('xcategory');
 var elxPercent=document.getElementById('xpercentofmarks');


//  elfirstName.textContent=firstName;
//  elmiddileName.textContent=middileName;
//  ellastName.textContent=lastName;
  elfullName.textContent=fullName;
  elfatheName.textContent=fatheName;
  elmotherName.textContent=motherName;
  eldobId.textContent=dobId;
  elgenderId.textContent=genderId;
  elmobileNumber.textContent=mobileNumber;
  elemailId.textContent=emailId;
  elvillName.textContent=villName;
	elvillNameTwo.textContent=villNameTwo;
  elpostName.textContent=postName;
  elpsName.textContent=psName;
  eldistName.textContent=distName;
  elstateName.textContent=stateName;
  elpinId.textContent=pinId;
//  elxExamPass.textContent=xExamPass;
  elxPassYear.textContent=xPassYear;
  elxBoard.textContent=xBoard;
 elxMajorSub.textContent=xMajorSub;
  elxMarkSecure.textContent=xMarkSecure;
  elxFullMarks.textContent=xFullMarks;
 elxDivision.textContent=xDivision;
elxPercent.textContent=xPercent;
elxCategory.textContent=xCategory;



}

function img(){
	 img=booking_data.plink;
	 var elimg=document.getElementById('pic_id');
	 elimg.src=img;
	 elimg.dispatchEvent(new Event('input'));

}
function sig(){
	 sig=booking_data.slink;
	 var elsig=document.getElementById('sig_id');
	 elsig.src=sig;


}

/*function test(){


var uname;
var msg;
uname = booking_data.full_name_id;
msg= booking_data.father_name_id;

// Get the element with an id of name.
var elName = document.getElementById('name');
// Replace the content of this element.
elName.textContent = uname;

// Get the element with an id of note.
var elNote = document.getElementById('note');
// Replace the content of this element.
elNote.textContent = msg;

}
*/
