const STEP1_URL = "https://www.irctc.co.in/nget/train-search";
const STEP2_URL = "https://www.irctc.co.in/nget/train-list";
const STEP3_URL = "https://www.irctc.co.in/nget/psgninput";
const STEP4_URL = "https://www.irctc.co.in/nget/reviewBooking";
const STEP5_URL = "https://www.irctc.co.in/nget/bkgPaymentOptions";

const IRCTC_STATION_LIST = "https://www.irctc.co.in/eticketing/StationLinguisticNames?hl=en";
// https://www.irctc.co.in/eticketing/StationLinguisticNames?hl=en_hi
// https://www.irctc.co.in/eticketing/StationLinguisticNames?hl=en
// http://www.indianrail.gov.in/mail_express_trn_list.html

let weeks = ["", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday"];
let M_to_month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let quota = {"GN":"General","TK":"Tatkaal","PT":"Primium Tatkaal","Female":"Female"};

let checkBox = ['confirm_berths','auto_upgradation','coach_preferred','auto_proceed'];
let radioBox = ['pay_mod', 'reservation_choice'];

let payment_opt = {
	"OPB": 	"Preferred Bank",
	"UPI": 	"BHIM/ UPI/ USSD",
	"MPS": 	"Multiple Payment Service",
	"DCP": 	"Debit Card with PIN",
	"ONB": 	"Net Banking",
	"WCC": 	"Wallets / Cash Card",
	"IRP": 	"IRCTC Prepaid",
	"COD": 	"Pay-On-Delivery/Pay later",
	"CDC": 	"Payment Gateway /Credit /Debit Cards"
};

let payment_bank_opt = {
	"OPB": 	["State Bank of India", "Union Bank of India"],
	"UPI": 	["Pay using BHIM (Powered by AXIS BANK) also accepts UPI"],
	"MPS": 	["ATOM","Paytm","ITZ","PayU","Razorpay"],
	"DCP": 	["State Bank of India","Canara Bank","HDFC Bank","AXIS Bank","United Bank of India"],
	"ONB": 	["State Bank of India", "Federal Bank", "Union Bank of India", "Indian Bank", "Punjab National Bank", "Allahabad Bank", "HDFC Bank", "Bank of Baroda", "Vijaya Bank", "AXIS Bank", "Karur Vysya Bank", "Karnataka Bank", "Oriental Bank of Commerce", "ICICI Bank", "IndusInd Bank", "Kotak Mahindra Bank", "Bank of India", "Central Bank of India", "Bank of Maharashatra", "Syndicate Bank", "Corporation Bank", "Yes Bank", "Nepal SBI Bank Ltd.", "South Indian Bank", "City Union Bank", "Canara Bank", "Airtel Payments Bank(Offers)"],
	"WCC": 	["Mobikwik Wallet", "Paytm Wallet(Offers)", "Freecharge Wallet(Offers)", "OLAMONEY Wallet", "Airtel Money", "I Cash Card"],
	"IRP": 	[],
	"COD": 	[],
	"CDC": 	["Visa/Master Card(Powered By CITI BANK)", "Visa/Master Card(Powered By HDFC BANK)", "American Express", "Visa/Master Card(Powered By AXIS BANK)", "RuPay Card (Powered by Kotak Bank)"]
}

let permit_payment = ["OPB","UPI","MPS","DCP","ONB","WCC","CDC"];

let valid_quota = {
	"GN": "GENERAL",
	"SS": "SR.CITIZEN",
	"LD": "LADIES",
	"HP": "DIVYAANG",
	"TK": "TATKAL",
	"PT": "PREMIUM TATKAL"
};

let card_tmpll = `
				<div class="col-sm-4 py-2 px-2">
					<div class="card card-dark">

						<div class="card-body">


						<p class="btn btn-info btn-block text-uppercase"><strong>{{fname}} {{mname}} {{lname}}</p>
								<div class="col-sm-12 text-center">
									<span class="m-badge badge-info text-uppercase">Mobile No- </span>
									<span class="m-badge badge-dark text-uppercase">{{pinno}}</span>
								</div>
							</div>
							<div class="border-bottom my-2"></div>
							<div class="btn-group d-flex" role="group">
								<button class="btn btn-success btn-sm w-100" data-action="triggerBooking" data-hash="{{hash}}"><i class="fab fa-superpowers mr-2"></i>Book</button>
								<button class="btn btn-warning btn-sm w-100" data-action="edit" data-hash="{{hash}}"><i class="fa fa-edit mr-2"></i>Edit</button>
								<button class="btn btn-danger btn-sm w-100" onsubmit= "return nur();"" data-action="delete" data-hash="{{hash}}"><i class="fa fa-trash-alt mr-2"></i>Delete</button>
							</div>
							</br>
						</div>
					</div>
				</div>

				`;



			let	card_tmpl = `




				<table class="table table-bordered table-sm" width="96%" id="table1" style="background-color: white;">
					 <tbody>


							<tr class="table-info">
										<td style="width:16%">{{fullName}}</label></td>
										<td style="width:16%" >{{frname}}</td>
										<td style="width:16%">{{mobileno}}</td>
										<td style="width:16%">{{emailid}}</td>
										<td style="width:8%">	<button class="btn btn-success btn-sm w-100" data-action="triggerBooking" data-hash="{{hash}}"><i class="fab fa-superpowers mr-2"></i>Book</button></td>
										<td style="width:8%">	<button class="btn btn-warning btn-sm w-100" data-action="edit" data-hash="{{hash}}"><i class="fa fa-edit mr-2"></i>Edit</button></td>
										<td style="width:8%"><button class="btn btn-danger btn-sm w-100" data-action="delete" data-hash="{{hash}}"><i class="fa fa-trash-alt mr-2"></i>Delete</button>	</td>
										<td style="width:8%"><button class="btn btn-info btn-sm w-100" data-action="view"  data-hash="{{hash}}"><i class="far fa-eye mr-2"></i>View</button>	</td>
										</tr>
													 </tbody>
												</table>


								`;





























(function($){
	var Toaster = $('<div/>').addClass('toaster').css({
		"position": 'fixed',
		"top": "100px",
		"right": "10px",
		"z-index": "200",
		"padding":"10px",
		"background-color": "#353535",
		"color" : "#FFFFFF",
		"border-top": "5px solid",
		"border-radius": "0px 0px 4px 4px",
		"font-family": "normal,Calibri,arial",
		"-webkit-box-shadow": "0px 0px 6px 0px rgba(0,0,0,0.75)",
		"-moz-box-shadow": "0px 0px 6px 0px rgba(0,0,0,0.75)",
		"box-shadow": "0px 0px 6px 0px rgba(0,0,0,0.75)"
	}).attr({'id': 'toast', 'hidden': true}).html('Extention Loaded');

	var toast_color = {
		'INFO' : "#0BC7EF",
		'SUCCESS' : "#039826",
		'ERROR' : "#CB1B1B"
	}

	$.toast = function(message, type = 'INFO'){
		$('body #toast').remove();
		$('body').append(Toaster);
		$('#toast').html(message).css({'border-color': toast_color[type.toUpperCase()]}).fadeIn(800);
		// setTimeout(function(){
		// 	$('body #toast').fadeOut(800);
		// }, 1500);
		return this;
	};
}(jQuery));


// Standard Google Universal Analytics code

/*(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); // Note: https protocol here

ga('create', 'UA-54657154-2', 'auto');
ga('send', 'pageview', '/booking_form.html');
*/
function gaPage(pageName){
	console.debug("PageView Logged =", pageName);
	 _gaq.push(['_trackPageview', pageName]);
	// ga('send', 'pageview', pageName);
}

function gaEvent(categoryName, actionName, labelName){
	console.debug([categoryName, actionName, labelName]);
	_gaq.push(['_trackEvent', categoryName, actionName, labelName]);
	// _trackEvent(category, action, opt_label, opt_value, opt_noninteraction)
	/*ga('send', {
		hitType: 'event',
		eventCategory: 'TatkalExtention',
		eventAction: eventName,
		eventLabel: 'testEvent'
	});*/
}


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-54657154-2']);
// _gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
