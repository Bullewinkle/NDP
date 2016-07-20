console.warn("!!consumer-lookup!!");

// gets all the .edit_row cells, registers click to each one
var edit_row = document.querySelectorAll('#t_id .edit_row');
for (var i = 0; i < edit_row.length; i++) {
	edit_row[i].addEventListener('click', function (e) {
		// get parent row, add data from its cells in form fields
		var tr_parent = this.parentNode;
		document.getElementById('e_Producer').value = tr_parent.querySelector('.row_Producer').innerHTML;
		document.getElementById('e_ProducerFilename').value = tr_parent.querySelector('.row_ProducerFilename').innerHTML;
		document.getElementById('e_ProducerLanguage').value = tr_parent.querySelector('.row_ProducerLanguage').innerHTML;
		document.getElementById('e_ProducerEmail').value = tr_parent.querySelector('.row_ProducerEmail').innerHTML;
		document.getElementById('e_Consumer').value = tr_parent.querySelector('.row_Consumer').innerHTML;
		document.getElementById('e_ConsumerLanguage').value = tr_parent.querySelector('.row_ConsumerLanguage').innerHTML;
		document.getElementById('e_ConsumerEmail').value = tr_parent.querySelector('.row_ConsumerEmail').innerHTML;
		document.getElementById('e_ConsumerStatus').value = tr_parent.querySelector('.row_ConsumerStatus').innerHTML;
		document.getElementById('e_NotifyDelivery').value = tr_parent.querySelector('.row_NotifyDelivery').innerHTML;
		document.getElementById('e_KeepMappingWhenErr').value = tr_parent.querySelector('.row_KeepMappingWhenErr').innerHTML;
		document.getElementById('e_Actions').value = tr_parent.querySelector('.row_Actions').innerHTML;
		document.getElementById('e_NewFilename').value = tr_parent.querySelector('.row_NewFilename').innerHTML;
		document.getElementById('e_RemotePath').value = tr_parent.querySelector('.row_RemotePath').innerHTML;
		document.getElementById('e_PostAction').value = tr_parent.querySelector('.row_PostAction').innerHTML;
		document.getElementById('e_PreAction').value = tr_parent.querySelector('.row_PreAction').innerHTML;
		document.getElementById('e_SourceEncoding').value = tr_parent.querySelector('.row_SourceEncoding').innerHTML;
		document.getElementById('e_DestEncoding').value = tr_parent.querySelector('.row_DestEncoding').innerHTML;
		document.getElementById('e_HEX_Repl_Char').value = tr_parent.querySelector('.row_HEX_Repl_Char').innerHTML;
		document.getElementById('e_HEX_Repl_With').value = tr_parent.querySelector('.row_HEX_Repl_With').innerHTML;
		document.getElementById('e_NewMailboxName').value = tr_parent.querySelector('.row_NewMailboxName').innerHTML;
		document.getElementById('e_CONSUMEREXTRACTABLE').value = tr_parent.querySelector('.row_CONSUMEREXTRACTABLE').innerHTML;
		document.getElementById('e_CONSUMEREXTRACTABLECOUNT').value = tr_parent.querySelector('.row_CONSUMEREXTRACTABLECOUNT').innerHTML;
		document.getElementById('e_CONSUMEREXTRACTABLEDURATION').value = tr_parent.querySelector('.row_CONSUMEREXTRACTABLEDURATION').innerHTML;
		document.getElementById('e_OBJECT_ID').value = tr_parent.querySelector('.row_OBJECT_ID').innerHTML;


		// display the form, and focus on a form field
		document.getElementById('delete_form_wrapper').style.display = 'none';
		document.getElementById('create_form_wrapper').style.display = 'none';
		document.getElementById('edit_form_wrapper').style.display = 'block';
		document.getElementById('e_Producer').focus();
	}, false);
}

// to hide #edit_form when click on #cls_e button
document.getElementById('cls_e').addEventListener('click', function () {
	this.parentNode.parentNode.parentNode.style.display = 'none';
}, false);


// gets all the .delete_row cells, registers click to each one
var delete_row = document.querySelectorAll('#t_id .delete_row');
for (var i = 0; i < delete_row.length; i++) {
	delete_row[i].addEventListener('click', function (d) {
		// get parent row, add data from its cells in form fields
		var tr_parent = this.parentNode;
		document.getElementById('d_Producer').value = tr_parent.querySelector('.row_Producer').innerHTML;
		document.getElementById('d_ProducerFilename').value = tr_parent.querySelector('.row_ProducerFilename').innerHTML;
		document.getElementById('d_ProducerLanguage').value = tr_parent.querySelector('.row_ProducerLanguage').innerHTML;
		document.getElementById('d_ProducerEmail').value = tr_parent.querySelector('.row_ProducerEmail').innerHTML;
		document.getElementById('d_Consumer').value = tr_parent.querySelector('.row_Consumer').innerHTML;
		document.getElementById('d_ConsumerLanguage').value = tr_parent.querySelector('.row_ConsumerLanguage').innerHTML;
		document.getElementById('d_ConsumerEmail').value = tr_parent.querySelector('.row_ConsumerEmail').innerHTML;
		document.getElementById('d_ConsumerStatus').value = tr_parent.querySelector('.row_ConsumerStatus').innerHTML;
		document.getElementById('d_NotifyDelivery').value = tr_parent.querySelector('.row_NotifyDelivery').innerHTML;
		document.getElementById('d_KeepMappingWhenErr').value = tr_parent.querySelector('.row_KeepMappingWhenErr').innerHTML;
		document.getElementById('d_Actions').value = tr_parent.querySelector('.row_Actions').innerHTML;
		document.getElementById('d_NewFilename').value = tr_parent.querySelector('.row_NewFilename').innerHTML;
		document.getElementById('d_RemotePath').value = tr_parent.querySelector('.row_RemotePath').innerHTML;
		document.getElementById('d_PostAction').value = tr_parent.querySelector('.row_PostAction').innerHTML;
		document.getElementById('d_PreAction').value = tr_parent.querySelector('.row_PreAction').innerHTML;
		document.getElementById('d_SourceEncoding').value = tr_parent.querySelector('.row_SourceEncoding').innerHTML;
		document.getElementById('d_DestEncoding').value = tr_parent.querySelector('.row_DestEncoding').innerHTML;
		document.getElementById('d_HEX_Repl_Char').value = tr_parent.querySelector('.row_HEX_Repl_Char').innerHTML;
		document.getElementById('d_HEX_Repl_With').value = tr_parent.querySelector('.row_HEX_Repl_With').innerHTML;
		document.getElementById('d_NewMailboxName').value = tr_parent.querySelector('.row_NewMailboxName').innerHTML;
		document.getElementById('d_CONSUMEREXTRACTABLE').value = tr_parent.querySelector('.row_CONSUMEREXTRACTABLE').innerHTML;
		document.getElementById('d_CONSUMEREXTRACTABLECOUNT').value = tr_parent.querySelector('.row_CONSUMEREXTRACTABLECOUNT').innerHTML;
		document.getElementById('d_CONSUMEREXTRACTABLEDURATION').value = tr_parent.querySelector('.row_CONSUMEREXTRACTABLEDURATION').innerHTML;
		document.getElementById('d_OBJECT_ID').value = tr_parent.querySelector('.row_OBJECT_ID').innerHTML;

		// display the form, and focus on a form field
		document.getElementById('edit_form_wrapper').style.display = 'none';
		document.getElementById('create_form_wrapper').style.display = 'none';
		document.getElementById('delete_form_wrapper').style.display = 'block';
		document.getElementById('d_submit').focus();
	}, false);
}

// to hide #edit_form when click on #cls_d button
document.getElementById('cls_d').addEventListener('click', function () {
	this.parentNode.parentNode.parentNode.style.display = 'none';
}, false);

function goHome() {
	var theform = document.goHome;
}

document.getElementById('create_row').addEventListener('click', function (cr) {
	document.getElementById('cr_Producer').value = '';
	document.getElementById('cr_ProducerFilename').value = '';
	document.getElementById('cr_ProducerLanguage').value = '';
	document.getElementById('cr_ProducerEmail').value = '';
	document.getElementById('cr_Consumer').value = '';
	document.getElementById('cr_ConsumerLanguage').value = '';
	document.getElementById('cr_ConsumerEmail').value = '';
	document.getElementById('cr_ConsumerStatus').value = '';
	document.getElementById('cr_NotifyDelivery').value = '';
	document.getElementById('cr_KeepMappingWhenErr').value = '';
	document.getElementById('cr_Actions').value = '';
	document.getElementById('cr_NewFilename').value = '';
	document.getElementById('cr_RemotePath').value = '';
	document.getElementById('cr_PostAction').value = '';
	document.getElementById('cr_PreAction').value = '';
	document.getElementById('cr_SourceEncoding').value = '';
	document.getElementById('cr_DestEncoding').value = '';
	document.getElementById('cr_HEX_Repl_Char').value = '';
	document.getElementById('cr_HEX_Repl_With').value = '';
	document.getElementById('cr_NewMailboxName').value = '';
	document.getElementById('cr_CONSUMEREXTRACTABLE').value = '';
	document.getElementById('cr_CONSUMEREXTRACTABLECOUNT').value = '';
	document.getElementById('cr_CONSUMEREXTRACTABLEDURATION').value = '';


	// display the form, and focus on a form field
	document.getElementById('create_form_wrapper').style.display = 'block';
	document.getElementById('edit_form_wrapper').style.display = 'none';
	document.getElementById('delete_form_wrapper').style.display = 'none';
	document.getElementById('cr_create').focus();
}, false);

// to hide #create_form when click on #cls_c button
document.getElementById('cls_cr').addEventListener('click', function () {
	this.parentNode.parentNode.parentNode.style.display = 'none';
}, false);