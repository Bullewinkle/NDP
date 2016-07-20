app = window.app || {};

console.warn("!!consumer-lookup!!");
function goHome() {
	var theform = document.goHome;
}

class View {
	constructor() {
		this.addEvent = app.addEvent;

		this.ui = {
			table: document.querySelectorAll('table'),

			createForm: document.getElementById('create_form'),
			createFormSubmit: document.getElementById('cr_create'),
			createRow: document.getElementById('create_row'),
			createFormWrapper: document.getElementById('create_form_wrapper'),
			createFormCloser: document.getElementById('cls_cr'),

			editForm: document.getElementById('edit_form'),
			editFormSubmit: document.getElementById('edit_form'),
			editRow: document.querySelectorAll('#t_id .edit_row'),
			editFormWrapper: document.getElementById('edit_form_wrapper'),
			editFormCloser: document.getElementById('cls_e'),

			deleteForm: document.getElementById('delete_form'),
			deleteFormSubmit: document.getElementById('delete_form'),
			deleteRow: document.querySelectorAll('#t_id .delete_row'),
			deleteFormWrapper: document.getElementById('delete_form_wrapper'),
			deleteFormCloser: document.getElementById('cls_d'),

			getCsv: document.getElementById("get_csv")
		};

		this.addEvent(this.ui.createRow, "click", this.onCreateRowClick, this);
		this.addEvent(this.ui.createFormCloser, "click", this.onCloseCreateRowClick, this);

		this.addEvent(this.ui.editRow, "click", this.onEditRowClick, this);
		this.addEvent(this.ui.editFormCloser, "click", this.onCloseEditFormClick, this);

		this.addEvent(this.ui.deleteRow, "click", this.onDeleteRowClick, this);
		this.addEvent(this.ui.deleteFormCloser, "click", this.onCloseDeleteRowClick, this);

		this.addEvent(this.ui.getCsv, "click", this.onGetCsvClick, this);

	}

	onCreateRowClick(e) {
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
		this.hideEl(this.ui.editFormWrapper);
		this.hideEl(this.ui.deleteFormWrapper);
		this.showEl(this.ui.createFormWrapper);
		document.getElementById('cr_create').focus()
	}

	onCloseCreateRowClick(e) {
		this.hideEl(this.ui.createFormWrapper);
	}

	onEditRowClick(e) {

		// get parent row, add data from its cells in form fields
		var tr_parent = e.currentTarget.parentNode;
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
		this.hideEl(this.ui.createFormWrapper);
		this.hideEl(this.ui.deleteFormWrapper);
		this.showEl(this.ui.editFormWrapper);
		document.getElementById('e_Producer').focus();
	}

	onCloseEditFormClick(e) {
		console.warn('onCloseEditFormClick ');
		this.hideEl(this.ui.editFormWrapper);
	}

	onDeleteRowClick(e) {
		// get parent row, add data from its cells in form fields
		var tr_parent = e.currentTarget.parentNode;
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

		this.hideEl(this.ui.createFormWrapper);
		this.hideEl(this.ui.editFormWrapper);
		this.showEl(this.ui.deleteFormWrapper);
		document.getElementById('d_submit').focus();
	}

	onCloseDeleteRowClick(e) {
		this.hideEl(this.ui.deleteFormWrapper);
	}

	onGetCsvClick(e) {
		console.warn("onGetCsvClick", e, this)
		this.saveToCSV(this.parseTable());
	}

	parseTable() {
		let table = this.ui.table[0];
		let removeCols = 2;
		return _.chain(table.rows)
			.reduce((memo, row)=> {
				let cells = row.children;
				let rowArray = _.chain(cells)
					.slice(removeCols)
					.map((el)=>el.innerText)
					.value();
				memo.push(rowArray);
				return memo
			},[])
			.value();
	}

	saveToCSV(data=[],fileName="NDP.csv") {
		var csvContent = _.reduce(data,(memo, row, index) => {
			let dataString = row.join(",");
			memo += index < data.length ? dataString + "\n" : dataString;
			return memo;
		}, "data:text/csv;charset=utf-8,");

		var encodedUri = encodeURI(csvContent);
		var link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", fileName);
		document.body.appendChild(link); // Required for FF

		link.click();

		setTimeout(()=>{link.remove()},0)
	}

	hideEl(el) {
		el.style.display = "none";
	}

	showEl(el, display = "block") {
		el.style.display = display;
	}

}

app.consumerView = new View();