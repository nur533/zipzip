
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
			//	hours = (new Date()).getHours();
				booking_data = result.booking_default;



					uplod();
					autofill();
					forthfiled();
					fivefiled();
					dist();
					marksDetails();

				//	submit2();

			});
		}
	});
};

function uplod(){
	/*
 $('#upload').click(function(){
  var image_url = $('#image_url').val();
}
*/
user=document.getElementById("txtName");
//user=document.getElementsByName("ctl00$ccMain$YlonR")[0];
user.value=booking_data.username_id;

}


function autofill(){
	setTimeout(function(){ field1=document.getElementById("SubjectPost").value ="Electrical Engineering"; }, 200);
	setTimeout(function(){ filed2=document.getElementById("appFthrsName");	filed2.value=booking_data.father_name_id;	filed2.dispatchEvent(new Event('input')); }, 210);
	setTimeout(function(){ filed3=document.getElementById("datetimepicker1");filed3.value=booking_data.dob_id2; }, 220);
	setTimeout(function(){ mobile_no = document.querySelectorAll('#appMobileNo')[0];	mobile_no.value = booking_data.mobile_no_id; }, 230);
	setTimeout(function(){ 	$('input[name="perm_residnt"] contains(No)').prop('checked', true); }, 240);
	setTimeout(function(){ $("#appCategory option:contains(APST)").attr('selected', 'selected').click(); }, 240);
	setTimeout(function(){ filed4=document.getElementById("appPresentAddress");
												 filed4.value=["VILL- " +booking_data.vill_name_id,
												 								" POST- "+booking_data.post_name_id,
																				" P.S- "+booking_data.ps_name_id,
																				" DIST- "+booking_data.dist_name_id,
																				" PIN- "+booking_data.pin_no_id,]; }, 210);

	setTimeout(function(){ $("#sameAdd").prop('checked',true).on("click",getAdd()); }, 240);
	setTimeout(function(){$("#BEdQualificationStage option:contains(Passed)").attr('selected','selected').click();},240);

setTimeout(function(){$("#QualifyingExam option:contains(Electrical Engineering (Diploma))").attr('selected','selected');},300);
setTimeout(function(){$("#OptionalSubject option:contains(Electrical Engineering)").attr('selected','selected').click();},320);
setTimeout(function(){$("#myCheck").prop('checked',true);},325);






 /*setTimeout(function(){ filed5=document.getElementById("appPermAddress");
																															 filed5.value=["VILL- " +booking_data.vill_name_id,
																																							" POST- "+booking_data.post_name_id,
																																							" P.S- "+booking_data.ps_name_id,
																																							" DIST- "+booking_data.dist_name_id,
																																							" PIN- "+booking_data.pin_no_id,]; }, 210);

*/
}



function forthfiled(){

	if(booking_data.gender_id =='Male')setTimeout(function(){
	$("#appGender option:contains(Male)").attr('selected', 'selected').click();
},240);
if(booking_data.gender_id=='Female')setTimeout(function(){
		$("#appGender option:contains(Female)").attr('selected', 'selected').click();
	},240);

	}


function fivefiled(){
if(booking_data.state_name_id =='Bihar')setTimeout(function(){
$('[name=appState] option:contains(Bihar)').attr('selected','selected').on("load", getRespDistrict(5));

//$('[name=appState]').on("load", getRespDistrict(36));
}, 250);
if(booking_data.state_name_id =='West Bengal')setTimeout(function(){
$('[name=appState] option:contains(West Bengal)').attr('selected','selected').on("load", getRespDistrict(36));

},250);

}



function dist(){
	if(booking_data.dist_name_id=='MALDAH')setTimeout(function(){
		$("#appDistrict option:contains(Malda)").attr('selected', 'selected').click();
	},3000);

}







function marksDetails(){
setTimeout(function(){passingyear=document.getElementById("passingyear");passingyear.value=booking_data.xpassingyear;},500);
setTimeout(function(){ boarduniv=document.getElementById("boarduniv");boarduniv.value=booking_data.xboarduniv;},500);
setTimeout(function(){MajorSubjects=document.getElementById("MajorSubjects");MajorSubjects.value=booking_data.xMajorSubjects; },501);
setTimeout(function(){ markssecured=document.getElementById("markssecured");markssecured.value=booking_data.xmarkssecured;},501);
setTimeout(function(){ fullmarks=document.getElementById("fullmarks");fullmarks.value=booking_data.xfullmarks;},501);
setTimeout(function(){percntgofmarks=document.getElementById("percntgofmarks");percntgofmarks.value=booking_data.xpercentofmarks; },501);
setTimeout(function(){ClassDivPercentGrade=document.getElementsByName("ClassDivPercentGrade[]")[0];ClassDivPercentGrade.value=booking_data.xdivision;[0]},501);
setTimeout(function(){CgpaPer=document.getElementsByName("CgpaPer[]")[0];CgpaPer.value=booking_data.xcategory;},501);

setTimeout(function(){xiipassingyear=document.getElementsByName("YearOfPassing[]")[1];xiipassingyear.value=booking_data.xiipassingyear;},500);
setTimeout(function(){xiiboarduniv=document.getElementsByName("InstituteUniversity[]")[1];xiiboarduniv.value=booking_data.xiiboarduniv;},500);
setTimeout(function(){xiiMajorSubjects=document.getElementsByName("SubjectMajorField[]")[1];xiiMajorSubjects.value=booking_data.xiiMajorSubjects;},500);
setTimeout(function(){xiimarkssecured=document.getElementsByName("ObMarks[]")[1];xiimarkssecured.value=booking_data.xiimarkssecured;},500);
setTimeout(function(){xiifullmarks=document.getElementsByName("OutMarks[]")[1];xiifullmarks.value=booking_data.xiifullmarks;},500);
setTimeout(function(){xiidivision=document.getElementsByName("ClassDivPercentGrade[]")[1];xiidivision.value=booking_data.xiidivision;},500);
setTimeout(function(){xiicategory=document.getElementsByName("CgpaPer[]")[1];xiicategory.value=booking_data.xiicategory;},500);
setTimeout(function(){xiipercntgofmarks=document.getElementsByName("CgpaPerName[]")[1];xiipercntgofmarks.value=booking_data.xiipercntgofmarks;},500);


//setTimeout(function(){ }501);

}

//function submit2(){
//	setTimeout(function(){document.querySelectorAll(".btn-success")[1].click()},3000);
//}

function getRespDistrict(slctId) {
if (slctId.length == 0) {
		document.getElementById("txtHint").innerHTML = "";
		return;
} else {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
						document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
				}
		};
		xmlhttp.open("GET", "https://www.appsconline.in/web/ajax_getDistricts.php?q=" + slctId, true);
		xmlhttp.send();
}
}



function getAdd()
{
	 var v=document.getElementById("sameAdd").value;
	 if(document.getElementById("sameAdd").checked)
	 {
			 var presentAdd=document.getElementById("appPresentAddress").value;
			 document.getElementById("appPermAddress").value=presentAdd;
	 }
	 else
			 {
				document.getElementById("appPermAddress").value="";
				document.getElementById("appPermAddress").focus();
			 }


		//working code	 $("#photoimg3").prepend("<img src="images/my_image.png" style="width:100%; height:310px" />");

}



/* if booking_data otion value is 'male' , same string print when terget site's option string same
	var optionToSelect = booking_data.gender_id;
$('#appGender option:contains(' + optionToSelect + ')').prop({selected: true});
*/

/*   working function
var valueToSelect = 3;
$('#countries').val(valueToSelect);
*/

/*
function firstfiled(){


setTimeout(function(){ field1=document.getElementById("SubjectPost").value ="Electrical Engineering"; }, 3000);
//	$( "select[name='appState']" ).val("West Bengal" );
}

function secondfield(){
filed2=document.getElementById("appFthrsName");
filed2.value=booking_data.father_name_id;
filed2.dispatchEvent(new Event('input'));
}

function thirdfiled(){

filed3=document.getElementById("datetimepicker1");
filed3.value=booking_data.dob_id2;

}*/


//.parent().trigger('click');

//i=booking_data.gender_id;
//We want to select Ireland.
//Ireland is 3 in our select element.

  // working function   $("#appGender option:contains(Male)").attr('selected', 'selected').click();
//});

//	("#appGender option:contains(Female)").attr('selected', 'selected').click();


  // var i=booking_data.gender_id;
  // var i = e.pclass;
//$("#appGender option:contains('"+ booking_data.coach_class +"')").parent().trigger('click');
  //  $('option:selected("Male"):visible').click();
//$( "#appGender option:selected" ).text();







/*
function fillLogin(){
	test1 = document.getElementById("fname");
	test2 = document.getElementById("lname");
	test3 = document.getElementById("middle-name");
	test4 = document.getElementById("emailid");
	test5 = document.getElementById("confirm_emailid");
	test6 = document.getElementById("new_password");
	test7 = document.getElementById("confirm_password");
	test8 = document.getElementById("dob");
	test9=document.getElementById("securityquesid").selectedIndex ="14";
	test10 = document.getElementById("securityans");



	test1.value = booking_data.first_name;
	test2.value = booking_data.last_name;
	test3.value = booking_data.middle_name;
	test4.value = booking_data.email_no;
	test5.value = booking_data.email_no;
	test6.value = booking_data.password;
	test7.value = booking_data.password;
	test8.value = booking_data.dob;
	test10.value = booking_data.password;

	*/


//Working Function























		 //var arrChkBox = document.getElementsByName("appState");
		// $(arrChkBox).toggle();
		 	//$(arrChkBox).select:contains('"+ booking_data.coach_class +"')").parent().trigger('click');

	//var addrd=	document.getElementsByName("appGender").value= West Bengal;
//	console.log(addrd[7].tagName);
//test2=document.getElementsByName("appGender")[0];
//test2.value=booking_data.state_name_id;



	// Create variables to hold the name and note text.


// Note: textContent does not work in IE8 or earlier - see explanation on website


// Create variables to hold the name and note text.
//	police2=document.getElementById("appGender").selectedIndex="1";

	//	police3 = document.getElementById("appGender");
		//addrd=	document.querySelector("appState");
	//addrd=	document.getElementsByName("appState")[0];

	////	police4 = document.getElementById("appMobileNo");
	//	police5 = document.getElementById("txtPassword");
	//	police6 = document.getElementById("txtConfirmPassword");


		//police3= document.getElementById('joint').value = yy+mm;
		//emailId = document.getElementById("txtEmail");
	//	mobileNo = document.getElementById("txtMobile");
	//	userName = document.getElementById("txtEmail");
	//	password = document.getElementById("confirm_emailid");

//  police1.value=booking_data.father_name_id;
	// police3.value=booking_data.gender_id;
	 //addrd.value = booking_data.state_name_id;


	//police3.value=booking_data.gender_id;
	//police4.value=booking_data.username_id;
	//police5.value=booking_data.password_id;
//	police6.value=booking_data.password_id;



//

//$( '#datetimepicker1' ).datepicker({ dateFormat: 'yy-mm-dd' });
//











		// police.value=booking_data.last_name;
 	//emailId.value = booking_data.email_id ;




	//mobNum = document.getElementById("mob_id");
	//distname=document.getElementById('adrs_dist_id');

	//awwName = document.querySelectorAll("[placeholder='AWW Name']")[0];
/*(this mobile_no putting method also wokable)
	mobile_no = document.querySelectorAll('#mob_id')[0];
	mobile_no.value = booking_data.mobile_no;*/





	//distname.value = booking_data.dist_name;
	//distname.dispatchEvent(new Event('select'));




	//mobNum.value = booking_data.mobile_no;
//	mobNum.dispatchEvent(new Event('input'));

	//awwName.value = booking_data.IRCTC_username;
	//awwName.dispatchEvent(new Event('keydown'));
//	awwName.dispatchEvent(new Event('input'));


/*
function jDate(detail){
	//$("input[name='dob_id']").val(detail['j_date']);
	jdate = document.getElementById("dob_id");

	jdate.value = booking_data.j_date;
	jdate.dispatchEvent(new Event('input'));
}

function myFunction() {
  tquota=document.getElementById("m_status_id");
	tquota.value = booking_data.booking_quota;
	tquota.dispatchEvent(new Event('input'));

}

function addr(){

addrd=	document.querySelector("textarea");
	addrd.value = booking_data.IRCTC_username;
	addrd.dispatchEvent(new Event('input'));


}






/*
// Control Autofill by pressing [shift+A]
window.onkeyup = function(e){
    var pressed = "";
    if(e.shiftKey){
        pressed += "Shift";
    } //and so on
    pressed += e.keyCode;
    if(pressed == 'Shift65'){
    	shortcut = true;
    	step_need = detectStep();
    	console.log(step_need);
    	if(step_need == 'login-open' || step_need == 'login-fill'){
    		fillLogin();
    	}else if(step_need == 'login-wait'){
    		$.toast("Proceed Manually [Fill Login Captcha and login]");
    	}else if(step_need == 'fill-search'){
    		fillSearchDetail();
    	}else if(step_need == 'search-btn-trigger'){
    		triggerSearchBtn();
    	}else if(step_need == 'set-quota'){
    		selectQuota();
    	}else if(step_need == 'select-train'){
    		selectTrainCard();
    	}else if(step_need == 'select-coach-class'){
    		selectCoachClass();
    	}else if(step_need == 'check-availability-btn-trigger'){
    		triggerAvailBtn();
    	}else if(step_need == 'book-now-btn-trigger'){
    		triggerBookNowBtn();
    	}else if(step_need == 'fill-passenger'){
    		fillPassengersDetail();
    	}else if(step_need == 'wait-passenger-captcha'){
    		$.toast('Proceed Manually [Fill Captcha and click Continue]');
    	}else if(step_need == 'wait-review'){
    		reviewDone();
    	}else if(step_need == 'select-payment-method'){
    		selectPaymentMethod();
    	}else if(step_need == 'user-bank-not-found'){
    		$.toast('Proceed Manually [Select Payment Bank]');
    	}else if(step_need == 'select-payment-bank'){
    		selectPaymentBank();
    	}else if(step_need == 'make-payment-btn-trigger'){
    		triggerMakePayment();
    	}
    	shortcut = false;
    }
    console.log(pressed);
}

function detectStep(){
	url_now = document.location.href;
	if(url_now === STEP1_URL){
		if(true === $('#loginText').is(":visible")){
			if(true === $('app-login p-dialog div').is(':visible')){
				if($('#userId').val() == "" || $('#pwd').val() == "")
					return 'login-fill';	// login-fill
				else
					return 'login-wait';	//login-wait
			}else{
				return 'login-open'; 	// login-open
			}
		}else{
			// if($('.h_head1 span'))
			if($('.h_head1 span:contains("Welcome")').length > 0){
				if($('[placeholder="From*"]').val() == "" || $('[placeholder="To*"]').val() == "" || $("input[placeholder='Journey Date(dd-mm-yyyy)*']").val() == ""){
					return 'fill-search';
				}else{
					return 'search-btn-trigger';
				}
			}
		}
	}else if(url_now === STEP2_URL){
		// set-quota
		quota_rexEx = new RegExp(valid_quota[booking_data.booking_quota]);
		q = $('.search_div label').html();
		quota = q;
		if(false === quota_rexEx.test(quota))
			return 'set-quota';
		else{
			if($('.train_avl_enq_box[selected-train="true"]').length == 0){
				return 'select-train';
			}else{
				// match coach class
				class_select = document.querySelectorAll('.train_avl_enq_box[selected-train="true"] [formcontrolname="classInput"]')[0];
				c_class = class_select.value;
				class_regEx = new RegExp(booking_data.coach_class);
				if(false == class_regEx.test(c_class)){
					return 'select-coach-class';
				}
				else{
					buttons = document.querySelectorAll('.train_avl_enq_box[selected-train="true"] button');
					if(buttons.length == 1 && buttons[0].innerText == "Check availability & fare"){
						return 'check-availability-btn-trigger';
					}
					else{
						return 'book-now-btn-trigger';
					}
				}
			}
		}
	}else if(url_now === STEP3_URL){
		if(document.querySelectorAll('.stepwizard-step[passenger-info="filled"]').length == 0){
			return 'fill-passenger';
		}else{
			return 'wait-passenger-captcha';
		}
	}else if(url_now === STEP4_URL){
		return 'wait-review';
	}else if(url_now === STEP5_URL){
		if(document.querySelectorAll('.stepwizard-step[payment-method="selected"]').length == 0){
			return 'select-payment-method';
		}else{
			header = document.querySelectorAll('.stepwizard-step[payment-method="selected"]')[0].attributes['selected-header'].value;
			payment_banks = document.querySelectorAll('p-tabpanel #'+header)[0].querySelectorAll('.payment_box');
			if(booking_data.bank_name == 'NONE'){
				return 'user-bank-not-found';
			}
			user_bank = booking_data.bank_name.trim().toLowerCase();
			// console.log(user_bank);
			bank_regEx = new RegExp(user_bank);
			// console.log(payment_banks);
			// console.log(bank_regEx);
			var available_bank = [];
			for(var i=0; i < payment_banks.length; i++){
				bank_name = payment_banks[i].querySelectorAll('label')[0].innerText.toLowerCase();
				available_bank.push(bank_name);
				if(true == bank_regEx.test(bank_name)){
					if(false == payment_banks[i].querySelectorAll('input')[0].checked){
						return 'select-payment-bank';
					}
				}
			}
			if(-1 == $.inArray(user_bank, available_bank)){
				return 'user-bank-not-found';
			}else{
				return 'make-payment-btn-trigger';
			}

		}
		// TODO: select-payment-opt
		// TODO: select-bank
		// TODO: pay-now
	}else{
		// TODO: need to auto-fill payment credential on bank site
		return 'unknown';
	}
}


// TODO: fill userid and pass then trigger login popup
function fillLogin(){
	userId = document.getElementById("userId");
	pwd = document.getElementById("pwd");

	userId.value = booking_data.IRCTC_username;
	userId.dispatchEvent(new Event('input'));

	pwd.value = booking_data.IRCTC_pwd;
	pwd.dispatchEvent(new Event('input'));

	document.getElementById("loginText").click();
	$.toast("Opening Login Window");
}

// TODO: fill search detail
function fillSearchDetail(){
	// fromStation = document.querySelectorAll("[placeholder='From*']")[0];
	// toStation = document.querySelectorAll("[placeholder='To*']")[0];
	fromStation = document.querySelectorAll("p-autocomplete[id='origin']")[0].querySelectorAll('input')[0];
	toStation = document.querySelectorAll("p-autocomplete[id='destination']")[0].querySelectorAll('input')[0];
	journeydate = document.querySelectorAll("[placeholder='Journey Date(dd-mm-yyyy)*']")[1];
	classCaret = document.getElementById('journeyClass').querySelectorAll('.fa-caret-down')[0];

	// fromStation.value = booking_data.from_station;
	fromStation.value = booking_data.from_station;
	fromStation.dispatchEvent(new Event('keydown'));
	fromStation.dispatchEvent(new Event('input'));

	toStation.value = booking_data.to_station;
	// toStation.value = "GAYA JN - GAYA";
	toStation.dispatchEvent(new Event('keydown'));
	toStation.dispatchEvent(new Event('input'));
	toStation.click();

	journeydate.value = booking_data.j_date;
	journeydate.dispatchEvent(new Event('keydown'));
	journeydate.dispatchEvent(new Event('input'));

	classCaret.click();
	// class_list  = ["EA","1A","2A","3A","EC","FC","3E","CC","SL","2S"];
	$("#journeyClass span:contains('"+ booking_data.coach_class +"')").parent().trigger('click');
	// searchSubmit.click();
	$.toast('Journey Detail Filled', "SUCCESS");
	// gaEvent("IRCTC_STATE", "clicked", "journey detail filled");
}

function triggerSearchBtn(){
	if(true === booking_data.auto_proceed || true == shortcut){
		// searchSubmit = document.querySelectorAll('[type="submit"]')[3];
		searchSubmit = document.querySelectorAll('[type="submit"][label="Find Trains"]')[0];
		searchSubmit.click();
		$.toast("Journey Search done");
		// gaEvent("IRCTC_STATE", "clicked", "journey detail proceed");
	}else{
		$.toast('Proceed Manually [Search Journey]');
		// console.log('Proceed Manually [Search Journey]');
	}
}

function selectQuota(){
	search_quota_div = document.querySelectorAll('.search_div')[0];
	search_quota_div.querySelectorAll('.ui-dropdown-trigger')[0].click();
	quota_item = search_quota_div.querySelectorAll('.ui-dropdown-item');
	regEx_quota = new RegExp(valid_quota[booking_data.booking_quota]);
	for(var i=0; i<quota_item.length; i++){
		// console.log(quota_item[i]);
		// console.log(quota_item[i].outerHTML);
		if(regEx_quota.test(quota_item[i].outerHTML)){
			quota_item[i].click();
			$.toast("Quota Selected", "SUCCESS");
			// gaEvent("IRCTC_STATE", "clicked", "quota selected");
			break;
		}
	}
}

// TODO: fill train-list
function selectTrainCard(){
	// Select Train form list
	var availableTrains = $('.train_avl_enq_box');
	var train_no = (booking_data.train.split(":")[0]).trim();
	let regEx_TrainNo = new RegExp('\('+ train_no +'\)');
	var train_match_at = false;
	$.each(availableTrains, function(k, v){
		if(regEx_TrainNo.test(v.innerText)){
			// console.log("Found at - " + k);
			train_match_at = k;
			return true;
		}
	});
	// Modify default Design to target train list.
	if(train_match_at || train_match_at == 0){
		target_train_list = (availableTrains[train_match_at]);
		target_train_list.style = "background-color:yellow !important;border-color:#3C4637 !important;";
		target_train_list.setAttribute('selected-train', true);
		$.toast("Target Train Found");
		// gaEvent("IRCTC_STATE", "clicked", "train selected");
	}
}

function selectCoachClass(){
	class_select = document.querySelectorAll('.train_avl_enq_box[selected-train="true"] [formcontrolname="classInput"]')[0];
	regEx_class = new RegExp('\('+ booking_data.coach_class +'\)');
	$.each(class_select.children, function(k,v){
		if(regEx_class.test(v.innerHTML)){
			class_select.value = v.value;
			class_select.dispatchEvent(new Event('change'));
			$.toast("Coach Selected", "SUCCESS");
			return false;
		}
	});
}

function triggerAvailBtn(){
	if(true === booking_data.auto_proceed || true == shortcut){
		document.querySelectorAll('.train_avl_enq_box[selected-train="true"] button')[0].click();
		$.toast("Checking Availability..");
	}else{
		// console.log('Proceed Manually [Check Availability]');
		$.toast("Proceed Manually [Check Availability]");
	}
}

function triggerBookNowBtn(){
	if(true === booking_data.auto_proceed || true == shortcut){
		b_date = booking_data.j_date.split('-');
		b_date[1] = M_to_month[b_date[1] - 1];
		date_d_M_Y = b_date.join(' ');
		// console.log(date_d_M_Y);
		book_now_btn = $('.train_avl_enq_box[selected-train="true"] td:contains("'+date_d_M_Y+'") button[type="submit"]');
		book_now_div = book_now_btn.parent('div');
		// book_now_div.attr('style','visibility: hidden;');
		if(true == /visible/.test(book_now_div.attr('style'))){
			book_now_btn.trigger('click');
		}else{
			$.toast('Wait till booking open');
		}
		// console.log(book_now_div.is(':visible'));
		// available_dates = document.querySelectorAll('.train_avl_enq_box[selected-train="true"] td');
		// b_date = booking_data.j_date.split('-');
		// b_date[1] = M_to_month[b_date[1] - 1];
		// date_d_M_Y = b_date.join(' ');
		// console.log(date_d_M_Y);
		// console.log($('.train_avl_enq_box[selected-train="true"] td:contains("'+date_d_M_Y+'") button[type="submit"]'));
		// return false;
		// var regEx_book_date = new RegExp(date_d_M_Y, 'i');
		// $.each(available_dates, function(k, dates){
		// 	if(regEx_book_date.test(dates.innerText)){
		// 		// console.log('BOOK NOW found at -'+ k);
		// 		target_book_now_btn = dates.querySelectorAll('button[type="submit"]')[0];
		// 		console.log($(target_book_now_btn).is(':visible'));
		// 		// target_book_now_btn.click();
		// 		$.toast("Book Now Proceed");
		// 		return false;
		// 	}
		// });
	}
	else{
		$.toast("Proceed Manually [Book Now]");
		// console.log('Proceed Manually [Book Now]');
	}
}

// TODO: fill passengers detail
function fillPassengersDetail(){
	// console.log(booking_data.psngr['A']);
	apf = document.querySelectorAll('app-passenger');
	booking_data.psngr['A'] = booking_data.psngr['A'].filter((obj) => obj );
	ap_count = booking_data.psngr['A'].length;
	var need_more_A = 0;
	if(apf.length < ap_count){
		need_more_A = ap_count - apf.length;
	}

	// Adult passenger details
	if(need_more_A){
		add_psngr_button = document.querySelectorAll('.updatesDiv .prenext')[0];
		for(var a=0; a<need_more_A; a++){
			add_psngr_button.click();
		}
	}
	apf_updated = document.querySelectorAll('app-passenger');
	$.each(booking_data.psngr['A'], function(k, passenger){
		input_select = apf_updated[k].querySelectorAll('.form-group input,select');
		setPassengerValue(input_select[0], passenger.name);
		setPassengerValue(input_select[1], passenger.age);
		setPassengerValue(input_select[2], passenger.gender);
		if(passenger.choice != "")
			setPassengerValue(input_select[3], passenger.choice);
	});


	// console.log(booking_data.psngr['C']);
	cpf = document.querySelectorAll('.passengerDiv [formarrayname="infantList"] .infant_box');
	booking_data.psngr['C'] = booking_data.psngr['C'].filter((obj) => obj );
	cp_count = booking_data.psngr['C'].length;
	var need_mode_C = 0;
	if(cpf.length < cp_count){
		need_mode_C = cp_count - cpf.length;
	}
	if(need_mode_C){
		add_child_button = document.querySelectorAll('.passengerDiv .pip-detail a')[0];
		for(var c=0; c<need_mode_C; c++){
			add_child_button.click();
		}
	}

	cpf_updated = document.querySelectorAll('.passengerDiv [formarrayname="infantList"] .infant_box');
	$.each(booking_data.psngr['C'], function(l, passenger){
		input_select = cpf_updated[l].querySelectorAll('.form-group input,select');
		setPassengerValue(input_select[0], passenger.name);
		setPassengerValue(input_select[1], passenger.age);
		setPassengerValue(input_select[2], passenger.gender);
	});

	// console.log(booking_data);
	mobile_no = document.querySelectorAll('#mobileNumber')[0];
	mobile_no.value = booking_data.mobile_no;

	// Booking Options
	if(true === booking_data.auto_upgradation){
		// console.log($('[name="autoUpgradation"]'));
		$('[name="autoUpgradation"]').prop('checked', true);
	}
	if(true === booking_data.confirm_berths){
		// console.log($('[name="confirmberths"]'));
		$('[name="confirmberths"]').prop('checked', true);
	}
	if(true === booking_data.coach_preferred){
		// console.log($('[name="coachPreferred"]'));
		$('[name="coachPreferred"]').prop('checked', true);
		// console.log($('[formcontrolname="coachId"]'));
		$('[formcontrolname="coachId"]').val(booking_data.coach_preferred_no);
	}

	$('[formcontrolname="reservationChoice"][value="'+ booking_data.reservation_choice +'"]').prop('checked', true);

	// insurance mark ad YES
	// $('#travelInsuranceOptedYes').prop('checked', true).trigger('change');
	document.querySelectorAll('#travelInsuranceOptedYes')[0].checked = true;
	// $('#travelInsuranceOptedYes')[0].dispatchEvent(new Event('change'));

	// Mark as done
	document.querySelectorAll('.stepwizard-step')[0].setAttribute('passenger-info', 'filled');
	// TODO: Scroll page and focus to captcha
	$.toast("Passenger Details Filled, [Enter Captcha]", "SUCCESS");
}

function setPassengerValue(element, value) {
	if(element.nodeName.toUpperCase() == 'INPUT'){
		element.value = value;
		element.dispatchEvent(new Event('keydown'));
		element.dispatchEvent(new Event('input'));
	}
	else if(element.nodeName.toUpperCase() == 'SELECT'){
		element.value = value;
		element.dispatchEvent(new Event('change'));
	}
}

function reviewDone(){
	if(true === booking_data.auto_proceed){
		review_btns = 	document.querySelectorAll('app-review-booking [type="submit"]');
		// console.log(review_btns);
		$.each(review_btns, function(k,b){
			// console.log(b);
			// console.log(b.innerText);
			if(b.innerText == "Continue Booking"){
				b.click();
				$.toast("Booking Review Done");
				return false;
			}
		});
	}else{
		$.toast('Proceed Manually [Booking Review]');
	}
}


function selectPaymentMethod(){
	available_payment_method_li = document.querySelectorAll('app-payment form ul li a');
	pay_mod_regEx = new RegExp(payment_opt[booking_data.pay_mod].replace(/\s/g,'').toLowerCase(), 'i');
	// console.log(pay_mod_regEx);

	$.each(available_payment_method_li, function(k, link){
		if(true === pay_mod_regEx.test(link.innerText.replace(/\s/g,'').toLowerCase())){
			link.click();
			document.querySelectorAll('.stepwizard-step')[2].setAttribute('payment-method','selected');
			document.querySelectorAll('.stepwizard-step')[2].setAttribute('selected-header', link.attributes['aria-controls'].value);
			$.toast("Payment Method Selected");
			return false;
		}
	});
}

function selectPaymentBank(){
	header = document.querySelectorAll('.stepwizard-step[payment-method="selected"]')[0].attributes['selected-header'].value;
	payment_banks = document.querySelectorAll('p-tabpanel #'+header)[0].querySelectorAll('.payment_box');
	bank_regEx = new RegExp(booking_data.bank_name.trim().toLowerCase());
	for(var j=0; j < payment_banks.length; j++){
		// console.log(bank_regEx);
		bank_name = (payment_banks[j].querySelectorAll('label span')[0].innerText).trim().toLowerCase();
		// console.log(bank_name);
		// console.log(bank_regEx.test(bank_name));
		if(bank_regEx.test(bank_name)){
			// console.log('Found - '+ bank_name);
			// console.log('click Now');
			payment_banks[j].click();
			payment_banks[j].setAttribute('bank-index', "found");
			$.toast("Payment Bank Selected");
			break;
		}
	}
}

function triggerMakePayment(){
	bank_node = document.querySelectorAll('.payment_box[bank-index="found"]');
	if(bank_node.length > 0 && (true === booking_data.auto_proceed || true == shortcut)){
		bank_node[0].querySelector('button').click();
		$.toast("Payment Initiated", "SUCCESS");
	}
}

function popupMsg(msg){
	$('#tatkal-msg').html(msg);
}

function waitLoop(){
	if(false === watcher){
		return false;
	}
	// console.log(++loop);

	step_need = detectStep();
	console.log(step_need);
	if(step_need == 'login-open' || step_need == 'login-fill'){
		fillLogin();
	}else if(step_need == 'login-wait'){
		$.toast("Proceed Manually [Fill Login Captcha and login]");
	}else if(step_need == 'fill-search'){
		fillSearchDetail();
	}else if(step_need == 'search-btn-trigger'){
		triggerSearchBtn();
	}else if(step_need == 'set-quota'){
		selectQuota();
	}else if(step_need == 'select-train'){
		selectTrainCard();
	}else if(step_need == 'select-coach-class'){
		selectCoachClass();
	}else if(step_need == 'check-availability-btn-trigger'){
		triggerAvailBtn();
	}else if(step_need == 'book-now-btn-trigger'){
		triggerBookNowBtn();
	}else if(step_need == 'fill-passenger'){
		fillPassengersDetail();
	}else if(step_need == 'wait-passenger-captcha'){
		$.toast('Proceed Manually [Fill Captcha and click Continue]');
	}else if(step_need == 'wait-review'){
		reviewDone();
	}else if(step_need == 'select-payment-method'){
		selectPaymentMethod();
	}else if(step_need == 'user-bank-not-found'){
		$.toast('Proceed Manually [Select Payment Bank]');
	}else if(step_need == 'select-payment-bank'){
		selectPaymentBank();
	}else if(step_need == 'make-payment-btn-trigger'){
		triggerMakePayment();
	}
	setTimeout(waitLoop, 500);
}
*/
