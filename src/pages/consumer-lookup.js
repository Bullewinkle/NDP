window.app = window.app || {};
console.warn("!!consumer-lookup!!");

import {saveAs} from 'file-saver';

class View {
	constructor() {

		let tableEl = document.getElementById('t_id');

		this.ui = {
			table: tableEl,
			tableBody: tableEl.tBodies[0],
			tableRows: tableEl.querySelectorAll("tr"),
			tableCells: tableEl.querySelectorAll("td"),

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

			getCsv: document.getElementById("get_csv"),

			pagination: document.querySelectorAll(".pagination")[0]
		};

		this.addEvent = app.addEvent;

		this.addEvent(this.ui.createRow, "click", this.onCreateRowClick, this);
		this.addEvent(this.ui.createFormCloser, "click", this.onCloseCreateRowClick, this);

		this.addEvent(this.ui.editRow, "click", this.onEditRowClick, this);
		this.addEvent(this.ui.editFormCloser, "click", this.onCloseEditFormClick, this);

		this.addEvent(this.ui.deleteRow, "click", this.onDeleteRowClick, this);
		this.addEvent(this.ui.deleteFormCloser, "click", this.onCloseDeleteRowClick, this);

		this.addEvent(this.ui.getCsv, "click", this.onGetCsvClick, this);

		let activeRows = _.filter(this.ui.tableRows, (el,i) => i>0);
		this.addEvent( activeRows , "click", this.onRowClick, this);
		_.each(activeRows, (row,i) => {
			let activeCells = _.filter(row.children,(el,i)=> true);
			this.addEvent( activeCells , "click", this.onCellClick, this);
		});

		// }), "click", this.onCellClick, this);

		this.initPaginationForTable(this.ui.table, this.ui.pagination);
		this.showEl(this.ui.table);
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
		document.getElementById('cr_Producer').focus()
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
		document.getElementById('d_Producer').focus();
	}

	onCloseDeleteRowClick(e) {
		this.hideEl(this.ui.deleteFormWrapper);
	}

	onRowClick(e) {
		let current = e.currentTarget;
		let activeClass = 'row-highlighted';
		_.each(this.ui.tableRows,(row,i) => {
			this.removeClass(row,activeClass);
		})
		this.addClass(current,activeClass);
	}

	onCellClick(e) {
		let current = e.currentTarget;
		let activeClass = 'cell-highlighted';
		_.each( this.ui.tableCells, (cell)  => {
			this.removeClass(cell,activeClass)
		});
		this.addClass(current,activeClass);
	}

	onGetCsvClick(e) {
		this.saveToCSV(this.parseTable());
	}

	parseTable() {
		let table = this.ui.table;
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
			}, [])
			.value();
	}

	saveToCSV(data = [], fileName = "NDP.csv") {
		// expecting format:
		// data = [
		//		[	'name1',	'name2',	'name3'	]
		//		[	'foo',		'1',		'2'		]
		//		[	'bar',		'3',		'4'		]
		// ]

		var csvStart = "";
		var csvContent = _.reduce(data, (memo, row, index) => {
			let dataString = row.join(",");
			memo += index > data.length ? dataString : dataString + "\n";
			return memo;
		}, csvStart);
		var blob = new Blob([csvContent], {type: "text/csv;charset=utf-8"});
		saveAs(blob, fileName);
	}

	initPaginationForTable(table, pagination) {
		if (!table || !pagination) {
			return console.warn("initPaginationForTable must have 2 arguments");
		}

		let model = {
			currentPage: 0,
			showBy: 10,
			totalItems: table.rows.length,
			totalPages: Math.floor(table.rows.length/10)
		};

		let showPage = (index=0, e={}, trigger=true) => {
			model['currentPage'] = index;

			// let indexChildren = _.slice(table.tBodies[0].rows,1,-1)
			let indexChildren = pagination.querySelectorAll('[data-index-pagination]')
			let currentPaginationEl = (e.currentTarget || indexChildren[index]);

			_.each(indexChildren, (el, i, ar)=> {
				if (el == currentPaginationEl) {
					this.addClass(el, 'active')
				} else {
					this.removeClass(el, 'active')
				}
			});

			_.each(table.tBodies[0].rows, (row, index, rows) => {
				let from = model['currentPage'] * model['showBy']
				let to = from + model['showBy'];
				if (from <= index && index < to) {
					this.removeClass(row, 'hide')
				} else {
					this.addClass(row, 'hide')
				}
			});

			if (trigger) {
				history.pushState({
					query: {
						page: +model['currentPage']
					}
				},``,`?page=${+model['currentPage']}`)
			}
		};

		let commmonClickHander = (e) => {
			e.preventDefault();
			e.stopPropagation();
		};

		let prevButtonClickHandler = (index, e) => {
			commmonClickHander(e);
			showPage.apply(this, [index, e]);
		};
		let nextButtonClickHandler = (index, e) => {
			commmonClickHander(e);
			showPage.apply(this, [index, e]);
		};
		let indexButtonClickHandler = (index, e) => {
			commmonClickHander(e);
			showPage.apply(this, [index, e]);
		};

		_.each((new Array(model['totalPages'])), (el, i, ar)=> {
			let prevTemplate = (i) => `<a href="#" aria-label="Previous"> <span aria-hidden="true">&laquo;</span> </a>`
			let nextTemplate = (i) => `<a href="#" aria-label="Next"> <span aria-hidden="true">&raquo;</span> </a>`
			let indexTemplate = (i) => `<a href="#">${i+1}</a>`

			// prev button
			if (i === 0) {
				let button = document.createElement("li")
				button.innerHTML = prevTemplate(i);
				this.addEvent(button, "click", prevButtonClickHandler.bind(this, i));
				pagination.appendChild(button);
			}

			let button = document.createElement("li")
			button.innerHTML = indexTemplate(i);
			button.setAttribute("data-index-pagination",i)
			this.addEvent(button, "click", indexButtonClickHandler.bind(this, i));
			pagination.appendChild(button);

			// next button
			if (i === ar.length - 1) {
				let button = document.createElement("li")
				button.innerHTML = nextTemplate(i);
				this.addEvent(button, "click", nextButtonClickHandler.bind(this, i));
				pagination.appendChild(button);
			}
		});

		let urlMatch = location.search.match(/page=([\d])/)
		let initialPage = (urlMatch? urlMatch[1] : null)|| model['currentPage'];
		showPage(initialPage,{},false);
	}

	hideEl(el) {
		el.style.display = "none";
	}
	showEl(el, display = "block") {
		el.style.display = display;
	}

	addClass(el,className) {
		// el.classList.add(className);
		if (el.className.search(className) > -1) return false;
		el.className = `${el.className} ${className}`
			.trim();
	}

	removeClass(el,className) {
		// el.classList.remove(className);
		if (el.className.search(className) === -1) return false;
		el.className = el.className
			.replace(className,'')
			.trim();
	}

}

app.consumerView = new View();