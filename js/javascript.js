// submit data in the form
 const username=document.getElementById('fullName');
	const user_phone=document.getElementById('phone');
	const user_city=document.getElementById('city');
	const user_country=document.getElementById('country');
	const user_email=document.getElementById('email');
	const user_password=document.getElementById('password');
	const confirmpassword=document.getElementById('confirmpassword');
	const login_btn=document.getElementById('signup');
 function submit_signup(){
	//validate the form
 if(username.value=="" && user_phone.value=="" && user_email.value=="" && user_password.value==""){
	alert("The name, phone, email, and password fields are required ");
	}
	else if(user_phone.value==""){
    alert("Enter the phone");
    // login_btn.disabled=true;
	}
	else if(user_password.value.length <4 || user_password.value.length >8){
		alert("The password should be between 4 & 8 characters");
	}else if(user_password.value!=confirmpassword.value){
		alert("The Password doesnot match");
	}else{
		//get the profile picture
	// 	const imagediv=document.querySelector('.profile_pic');
	// 	const image=document.querySelector('.profile_photo');
	// 	const file=document.querySelector('.profile_file');
	// 	const img_label=document.querySelector('#upload_image');
	// 	// when a file is chosen
	// 	file.addEventListener('change', function(){
	// 		const img=this.files[0];
	// 		if(img){
	// 			const reader = new FileReader();
	// 			reader.addEventListener('load', function(){
	// 				image.setAttribute('src', reader.result);
	// 			});
	// 			reader.readAsDataURL(img);
 // 	}


 // });
		var person={
		fullName: username.value,
		phone: user_phone.value,
		city: user_city.value,
		country: user_country.value,
		email: user_email.value,
		password: user_password.value
	};
	var userr=localStorage.setItem('User', JSON.stringify(person));
	 window.open("./index.html");
		}
}
//login
function loginUser(){
	const email=document.getElementById('email').value;
	const password=document.getElementById('password').value;
	var user=JSON.parse(localStorage.getItem('User'));
	const content=document.querySelector('.content');
		if(email==user.email && password==user.password){
		 window.open("./contacts.html");
		}else{
			// alert("Invalid login");
			document.getElementById('login_error').innerHTML="Invalid login";

		}
}
// modal
var modal = document.getElementById('contact-modal');
var modal_link = document.getElementById('open_contactmodal');
var span = document.getElementsByClassName("close")[0];
modal_link.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
 // save contacts section
       const name=document.getElementById('cont_name');
		const phone=document.getElementById('cont_phone');
		const email=document.getElementById('cont_email');
		const address=document.getElementById('cont_address');
		const birthday=document.getElementById('cont_birthday');
		
function savecontact(){
	//create an object
var person={
		Name:name.value,
		Phone:phone.value,
		Email:email.value,
		Address:address.value,
		Birthday:birthday.value,
		Profile:image.src
	};
	var data=JSON.parse(localStorage.getItem('Contacts'));
	if(data==null){
		localStorage.setItem('Contacts', '[]');
		var emptyContacts=[];
		emptyContacts.push('empty');
	}
	var new_contact=JSON.parse(localStorage.getItem('Contacts'));
	new_contact.push(person);
	// new_contact.sort();
	
	localStorage.setItem('Contacts', JSON.stringify(new_contact));
	document.getElementById("cont").innerHTML = new_contact;
	
}
//display contact
// upload aprofile picture
// declaring profile pic html elements
const imagediv=document.querySelector('.profile_pic');
const image=document.querySelector('#photo');
const file=document.querySelector('#file');
const img_label=document.querySelector('#uploadpic');
 // when a file is chosen
 file.addEventListener('change', function(){
 	const img=this.files[0];
 	if(img){
 		const reader = new FileReader();
 		reader.addEventListener('load', function(){
 			image.setAttribute('src', reader.result);
 		});
 		reader.readAsDataURL(img);
 	}


 });

function displaycontacts(){
	var contact=JSON.parse(localStorage.getItem('Contacts'));
	

	if(contact.length>0){
		var showDiv = document.querySelector('.listOfContacts');
		var appendTo = '<ol id="contacts">';

		for (var i = 0; i < contact.length; i++) {
			//sort the array
// let sortedContacts = contact.sort((c1, c2) => (c1.fullName < c2.fullName) ? 1 : (c1.fullName > c2.fullName) ? -1 : 0);
// console.log(sortedContacts);

			appendTo += `<li class="contactlist-items" id='${i}' onclick='viewContact(${i})'>
			<img class="profile-pic-list" src="${contact[i].Profile}">${contact[i].Name}
			</li>`;
		}
		showDiv.innerHTML = appendTo+"</ol>";
			 document.querySelector('#numberOfContacts').innerHTML=contact.length + " Contacts";
	}else {
		// no contacts
	}
	
}
setInterval(displaycontacts, 1000);
// pop up for each contact
var popup = document.querySelector('.each-contact');
//close the popup
	  var close_details=document.getElementsByClassName("close-popup")[0];
	  close_details.onclick = function() {
			popup.style.display = "none";
			}
			window.onclick = function(event) { 
			if (event.target == popup) {
			    popup.style.display = "none";
			}
			}
function viewContact(index){
	var id = index;
	var contact=JSON.parse(localStorage.getItem('Contacts'));


	var showOne = document.getElementById(id);

	  popup.style.display = "block";
	  document.getElementById('ctProfile').src=contact[id].Profile;
        document.getElementById('ctName').innerHTML=contact[id].Name;
		document.getElementById('ctPhone').innerHTML=contact[id].Phone;
		document.getElementById('ctEmail').innerHTML=contact[id].Email;
		document.getElementById('ctAddress').innerHTML=contact[id].Address;
		document.getElementById('ctBirthday').innerHTML=contact[id].Birthday;
	// when the edit button is clicked, show the modal
		var edit=document.getElementById('edit_contact');
		edit.onclick=function(){
		  modal.style.display = "block";
		  popup.style.display = "none";
		
		   name.value=contact[id].Name;
			phone.value=contact[id].Phone;
			email.value=contact[id].Email;
			address.value=contact[id].Address;
			birthday.value=contact[id].Birthday;
			image.src=contact[id].Profile;

			// contact[id]=

		}
		// when delete button is clicked
		var deletecontact=document.getElementById("delete");
		deletecontact.onclick=function(){
			contact.splice(id, 1);
			localStorage.setItem('Contacts',JSON.stringify(contact));
		}

		//when favourate button is clicked
		var addfavourite=document.getElementById("favourite");
		addfavourite.onclick=function(){
			var empty_fav=[];
			empty_fav.push(id);
			localStorage.setItem('Favourites',JSON.stringify(empty_fav));
			console.log(JSON.parse(localStorage.getItem('Favourites')));
		}
 
}
// search bar
function search_function(){
const searchli=document.getElementById('searchcontacts');
	let searchbar = searchli.value.toUpperCase();
	// console.log(searchbar);
	let contactlist = document.querySelector('#contactslists');
	let mysearch=contactlist.getElementsByTagName('tr');

	for (let i = 0; i < mysearch.length; i++) {
		let searchResult=mysearch[i].getElementsByTagName('td')[0];
		if(searchResult){
			let searchvalue=searchResult.textContent || searchResult.innerHTML;
			if(searchvalue.toUpperCase().indexOf(searchbar) > -1){
				mysearch[i].style.display="";

			}else{
				mysearch[i].style.display="none";
			}
		}
		
	}
}


//profile menu
var pmenu = document.querySelector('.profile-menu');
//close the popup
	  var close_menu=document.getElementsByClassName("close_profile_menu")[0];
	  close_menu.onclick = function() {
			pmenu.style.display = "none";
			}
			window.onclick = function(event) { 
			if (event.target == pmenu) {
			    pmenu.style.display = "none";
			}
			}
function profile_menu(){
var menu_list=document.querySelector(".profile-menu");
menu_list.style.display = 'block'
}
// close user details when a close span is clicked
	var user_profile=document.querySelector(".show-user-profile");
//close the popup
	  var close_details=document.getElementsByClassName("close_userdetails")[0];
	  close_details.onclick = function() {
			user_profile.style.display = "none";
			}
			window.onclick = function(event) { 
			if (event.target == user_profile) {
			    user_profile.style.display = "none";
			}
			}
// when my profile is clicked
function myprofile(){

	user_profile.style.display = 'block'
	var user=JSON.parse(localStorage.getItem('User'));
	document.getElementById('profile_name').innerHTML=user.fullName;
	document.getElementById('profile_phone').innerHTML=user.phone;
	document.getElementById('profile_email').innerHTML=user.email;
	document.getElementById('profile_city').innerHTML=user.city;
	document.getElementById('profile_country').innerHTML=user.country;
	document.getElementById('profile_password').value=user.password;
}
